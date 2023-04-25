import TaskContextReducer from "../TaskContextReducer/TaskContextReducer";

const TaskListContextReducer = ({ tasks, ...props }) => (
	<ul style={{ listSyle: "none" }}>
		{tasks.map((task) => (
			<TaskContextReducer key={task.id} task={task} {...props} />
		))}
	</ul>
);

export default TaskListContextReducer;
