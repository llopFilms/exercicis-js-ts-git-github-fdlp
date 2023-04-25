import { useState } from "react";

const AddTaskContextReducer = ({ handleAddTask }) => {
	const [text, setText] = useState("");

	return (
		<div>
			<input
				type="text"
				placeholder="Add task..."
				value={text}
				onChange={({ target: { value } }) => setText(value)}
			/>
			<button
				onClick={() => {
					setText("");
					handleAddTask(text);
				}}>
				Add Task
			</button>
		</div>
	);
};

export default AddTaskContextReducer;
