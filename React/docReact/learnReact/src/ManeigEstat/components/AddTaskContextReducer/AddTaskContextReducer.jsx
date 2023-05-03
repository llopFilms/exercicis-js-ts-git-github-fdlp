import { useContext, useState } from "react";
import { TaskDisptachContext } from "../TasksAppProvider/TasksAppProvider";

const AddTaskContextReducer = () => {
	const [text, setText] = useState("");
	const { handleAddTask } = useContext(TaskDisptachContext);

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
