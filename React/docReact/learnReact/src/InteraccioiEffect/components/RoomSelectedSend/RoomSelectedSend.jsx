import { useEffect } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function showNotification(message, theme) {
	Toastify({
		text: message,
		duration: 3000,
		gravity: "top",
		position: "right",
		style: {
			background: theme ? "black" : "white",
			color: theme ? "white" : "black",
		},
	}).showToast();
}

const connexio = (urlServer, roomId, isDark, prevRef) => {
	let missatgeLog = `Sessió ${
		roomId !== "sortir" ? "connectada a" : "desconnectada de"
	} la sala ${
		roomId !== "sortir" ? roomId : prevRef.current
	} a través de ${urlServer}`;

	const connecta = () => {
		console.log(missatgeLog);
		showNotification(missatgeLog, isDark);
	};
	const desconnecta = () => {
		console.log(missatgeLog);
		showNotification(missatgeLog, isDark);
	};

	return { connecta, desconnecta };
};

const RoomSelectedSend = ({ roomId, isDark, prevRef }) => {
	console.log("roomId", roomId, "isDark", isDark);
	
	const urlServer = "https://servidor1234.com";
	const { connecta, desconnecta } = connexio(
		urlServer,
		roomId,
		isDark,
		prevRef
	);

	useEffect(() => {
		if (roomId === "") return;
		roomId !== "sortir" && connecta();
		roomId === "sortir" && desconnecta();
	}, [roomId]);

	useEffect(() => {
		return () => {
			console.log("hola effect");
			desconnecta();
		};
	}, []);

	return (
		<div style={{ height: "25px" }}>
			{roomId === "sortir" ? (
				<p>Adéu, que passis un bon dia 😊</p>
			) : !roomId ? (
				<p>Hola bon dia 😘</p>
			) : (
				<p>Benvingut a la sala {roomId}!</p>
			)}
		</div>
	);
};

export default RoomSelectedSend;
