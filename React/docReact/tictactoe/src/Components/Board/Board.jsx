import Square from "../Square/index";

const Board = () => {
	
	const [suqares, setSuqares] = useState(Array(9).fill(null));

	return (
		<>
			<div className="board-row">
				<Square />
				<Square />
				<Square />
			</div>
			<div className="board-row">
				<Square />
				<Square />
				<Square />
			</div>
			<div className="board-row">
				<Square />
				<Square />
				<Square />
			</div>
		</>
	);
};

export default Board;
