import React from "react";

//create your first component
const  Semaforo = () => {
	

	let selectedColor = "blueviolet"
	return (
		<div className="traffic-light">
			<div className="Light red" /*onClick= {()=setColor(red)}*/>r</div>	
			<div className="Light yellow">y</div>	
			<div className="Light green brillo">g</div>	
		</div>
	);
};

export default Semaforo;
