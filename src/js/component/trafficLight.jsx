import React, { useState } from "react";

import "./trafficLight.css";


//create your first component
const TrafficLight = () => {

	const [purpleLightExist, setPurpleLightExist] = useState("");
	const [activeColor, setActiveColor] = useState(false);
	const [extraLightBtn, setExtraLightBtn] = useState("on");

	/**
	 * Se encarga de cambiar la luz activa dependiendo de si la luz morada existe
	 */
	const handleAlterateLight = () => {
		const lights = ["red", "yellow", "green", "purple"];
		const numLights = purpleLightExist ? lights.length : 3;

		const randomLight = Math.floor(Math.random() * numLights);
		handleActive(lights[randomLight]);
	}

	const handleExtraLight = () => {
		setPurpleLightExist(purpleLightExist ? "" : "light")
		setExtraLightBtn(purpleLightExist ? "on" : "off");
	}

	const handleActive = (color) => {
		setActiveColor(color);
	};

	return (
		<>
			<div id="trafficTop"></div>
			<div id="trafficLights" className="d-grid col-6 mx-auto">
				<div className={`bg-danger light ${activeColor === "red" ? "active" : "bg-opacity-50"}`} onClick={() => handleActive('red')}></div>
				<div className={`bg-warning light ${activeColor === "yellow" ? "active" : "bg-opacity-50"}`} onClick={() => handleActive('yellow')}></div>
				<div className={`bg-success light ${activeColor === "green" ? "active" : "bg-opacity-50"}`} onClick={() => handleActive('green')}></div>
				<div className={`bg-purple ${purpleLightExist} ${activeColor === "purple" && purpleLightExist ?
					"active" : "bg-opacity-50"}`}
					onClick={() => handleActive('purple')}></div>
			</div>
			<div className="d-grid gap-2 col-6 mx-auto mt-3">
				<button type="button" className="btn btn-outline-primary m-2 fw-bold fs-1" onClick={handleAlterateLight}>Alterate light</button>
				<button type="button" className="btn btn-outline-warning m-2 fw-bold fs-1" onClick={handleExtraLight}>{`Extra light ${extraLightBtn}`}</button>
			</div>
		</>
	);
};

export default TrafficLight;
