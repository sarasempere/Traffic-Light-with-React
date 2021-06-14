import React, { useState } from "react";

export function Home() {
	const [color, setColor] = useState();

	return (
		<div className="container">
			<div className="palito"></div>
			<div className="text-center mt-5 semaforo">
				<div className="container">
					<div
						onClick={() => setColor("red")}
						className={
							"circulo red" + (color == "red" ? " focus" : "")
						}></div>
					<div
						className={
							"circulo orange" +
							(color == "orange" ? " focus" : "")
						}
						onClick={() => setColor("orange")}></div>
					<div
						className={
							"circulo green" + (color == "green" ? " focus" : "")
						}
						onClick={() => setColor("green")}></div>
				</div>
			</div>
		</div>
	);
}
