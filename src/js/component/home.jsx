import React from "react";
/*const [color, setColor] = React.useState ("red")*/

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const  Home = () => {
	

	selectedColor = "blueviolet"
	return (
		<div className="traffic-light">
			<div className="Light red" /*onClick= {()=setColor(red)}*/>r</div>	
			<div className="Light yellow">y</div>	
			<div className="Light green brillo">g</div>	
		</div>
	);
};

export default Home;
