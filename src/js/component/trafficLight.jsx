import React, { useState } from "react";

import "./trafficLight.css";


//create your first component
const TrafficLight = () => {

	const [redLight, setRedLight] = useState("");
	const [yellowLight, setYellowLight] = useState("");
	const [greenLight, setGreenLight] = useState("");


	const handleRedLight = () => {
		setRedLight("selected");
		setYellowLight("");
		setGreenLight("");
	}

	const handleYellowLight = () => {
		setRedLight("");
		setYellowLight("selected");
		setGreenLight("");
	}

	const handleGreenLight = () => {
		setRedLight("");
		setYellowLight("");
		setGreenLight("selected");
	}

	return (
		<>
			<div id="trafficTop"></div>
			<div className="container">
				<div className={"red light " + redLight} onClick={handleRedLight}></div>
				<div className={"yellow light " + yellowLight} onClick={handleYellowLight}></div>
				<div className={"green light " + greenLight} onClick={handleGreenLight}></div>
			</div>
		</>
	);
};

export default TrafficLight;
