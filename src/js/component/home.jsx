import React from "react";
/*const [color, setColor] = React.useState ("red")*/

import Semaforo from "./Semaforo.jsx";
import TrafficLight from "./TrafficLight.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const  Home = () => {
	

	return (
		<div>
			<Semaforo />
			<TrafficLight />
		</div>
		
		
		);
};

export default Home;
