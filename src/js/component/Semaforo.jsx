import React from "react";

//create your first component
const  Semaforo = () => {
	

	let selectedColor = "blueviolet"
	return (
		<div className="traffic-light">
			<div className="Light red" /*onClick= {()=setColor(red)}*/></div>	
			<div className="Light yellow"></div>	
			<div className="Light green brillo"></div>	
		</div>
	);
};

export default Semaforo;

