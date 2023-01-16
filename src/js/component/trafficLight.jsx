import React, { useState } from "react";

import "./trafficLight.css";


//create your first component
const TrafficLight = () => {

	// constantes de estilo
	const opacity = "bg-opacity-50";

	const [redLight, setRedLight] = useState(opacity);
	const [yellowLight, setYellowLight] = useState(opacity);
	const [greenLight, setGreenLight] = useState(opacity);
	const [purpleLight, setPurpleLight] = useState("");
	const [purpleLightOn, setPurpleLightOn] = useState("");

	/**
	 * Enciende la luz roja y apaga las demas
	 */
	const handleRedLight = () => {

		setRedLight("selected");
		setYellowLight(opacity);
		setGreenLight(opacity);
		setPurpleLightOn(opacity);
	}

	/**
	 * Enciende la luz amarilla y apaga las demas
	 */
	const handleYellowLight = () => {

		setRedLight(opacity);
		setYellowLight("selected");
		setGreenLight(opacity);
		setPurpleLightOn(opacity);
	}

	/**
	 * Enciende la luz verde y apaga las demas
	 */
	const handleGreenLight = () => {

		setRedLight(opacity);
		setYellowLight(opacity);
		setGreenLight("selected");
		setPurpleLightOn(opacity);
	}

	/**
	 * Enciende la luz morada y apaga las demas
	 */
	const handlePurpleLight = () => {

		setRedLight(opacity);
		setYellowLight(opacity);
		setGreenLight(opacity);
		setPurpleLightOn("on selected");
	}

	/**
	 * Se encarga de cambiar la luz activa dependiendo de si hay 4 o 3 luces
	 */
	const handleAlterateLight = () => {
		const lights = [handleRedLight, handleYellowLight, handleGreenLight, handlePurpleLight];
		const numLights = purpleLight ? 4 : 3;

		const randomLight = Math.floor(Math.random() * numLights);
		lights[randomLight]();
	}

	/**
	 * Hace que se muestre la luz morada y oculta el botón
	 * @param {React.MouseEvent<HTMLButtonElement>} event botón que añade la luz
	 */
	const handleExtraLight = (event) => {
		setPurpleLight("light");
		event.currentTarget.classList.add("d-none");
	}

	return (
		<>
			<div id="trafficTop"></div>
			<div id="trafficLights" className="d-grid col-6 mx-auto">
				<div className={"bg-danger light " + redLight} onClick={handleRedLight}></div>
				<div className={"bg-warning light " + yellowLight} onClick={handleYellowLight}></div>
				<div className={"bg-success light " + greenLight} onClick={handleGreenLight}></div>
				<div className={`bg-purple ${purpleLight} ${purpleLightOn}`} onClick={handlePurpleLight}></div>
			</div>
			<div className="d-grid gap-2 col-6 mx-auto mt-3">
				<button type="button" className="btn btn-outline-primary m-2" onClick={handleAlterateLight}>Alterate light</button>
				<button type="button" className="btn btn-outline-warning m-2" onClick={handleExtraLight}>Extra light</button>
			</div>
		</>
	);
};

export default TrafficLight;
