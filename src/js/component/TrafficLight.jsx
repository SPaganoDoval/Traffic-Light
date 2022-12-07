import React from "react";

const TrafficLight = () => {
	const DefaultColors = [ "red", "orange", "green"];
	let mivariable = "";
	const [ActiveColor, setActiveColor] = usaState ("");

	console.log ("COLOR ACTIVO", ActiveColor);
	
	const colorpulsado = (color) => {
		setActiveColor(color);
	};

	return (
		<div>
			{DefaultColors.map ((color, indice) => {
					return (
						<p
							key={indice}
							onClick={() => colorpulsado(color)}
							className={color === ActiveColor ? "black" : color}>
							{`${
								color === ActiveColor ? "Seleccionado" : color
							}`}
						</p>
					);
				})}
		</div>
	);
}

export default TrafficLight ;
