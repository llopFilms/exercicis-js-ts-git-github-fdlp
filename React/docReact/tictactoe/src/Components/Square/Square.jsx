
import { useState } from "react";

const Square = () => {
	
const [value, setValue] = useState(null)

	const handleClick = () => {
		setValue("X");
	}

	return(
		<div>
		<button className="square" onClick={handleClick}>{value}</button>
		</div>
	);
	};

export default Square;
