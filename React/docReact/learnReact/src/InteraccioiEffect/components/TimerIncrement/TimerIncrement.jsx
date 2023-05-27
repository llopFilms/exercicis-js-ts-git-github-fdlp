import { useEffect, useState } from "react";

const TimerIncrement = () => {
	const [timer, setTimer] = useState({ count: 0, increment: 1 });
	const { count, increment } = timer;

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTimer((prev) => ({ ...timer, count: prev.count + increment }));
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, [increment]);

	return (
		<div>
			<h3>Timer + Increment</h3>
			<p>Timer: {count}</p>
			<p>
				Increment by:{" "}
				<button
					onClick={() =>
						setTimer({ ...timer, increment: timer.increment + 1 })
					}>
					+
				</button>
				{increment}{" "}
				<button
					onClick={() =>
						setTimer({ ...timer, increment: timer.increment - 1 })
					}>
					-
				</button>
			</p>
		</div>
	);
};

export default TimerIncrement;
