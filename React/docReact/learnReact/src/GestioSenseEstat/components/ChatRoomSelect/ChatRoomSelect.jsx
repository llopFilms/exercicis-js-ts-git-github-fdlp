import { useEffect, useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const ChatRoomSelect = () => {
	const [roomId, setRoomId] = useState(null);
	const [ésFosc, setÉsFosc] = useState(false);
	const [missatgeInput, setMissatgeInput] = useState(null);
	console.log(roomId, ésFosc, missatgeInput);

	const serverUrl = "https://localhost:1234";

	const connexio = (serverUrl, roomId) => {
		const connecta = () => {
			console.log(`✅ Connexió a sala ${roomId} a través de ${serverUrl}`);
		};
		const desconnecta = () => {
			console.log(`❌ Desconnexió a sala ${roomId}`);
		};
		return {
			connecta,
			desconnecta,
		};
	};

	const notifica = (missatge, ésFosc) => {
		console.log(missatge);
		
		Toastify({
			text: missatge,
			duration: 2000,
			gravity: "top",
			position: "right",
			style: {
				background: !ésFosc ? "white" : "black",
				color: !ésFosc ? "black" : "white",
			},
		}).showToast();
	};

	const sessio = connexio(serverUrl, roomId);
	useEffect(() => {
		if (!!roomId) {
			let missatge;
			if (roomId !== "sortir") {
				sessio.connecta();
				notifica(missatge = missatgeInput ?? "Connectat!", ésFosc);
			} else {
				sessio.desconnecta();
				notifica(missatge = missatgeInput ?? "Desconnectat!", ésFosc);
			}
		}
	}, [roomId]);

	useEffect(() => {
		return () => {			
			setRoomId(null);
			setÉsFosc(false);
			sessio.desconnecta();
		};
	}, []);

	return (
		<div>
			<h3>Selecció de sales del xat</h3>
			<label htmlFor="missatgeInput">
				Missatge per la Sala{" "}
				<input
					type="text"
					id="missatgeInput"
					value={missatgeInput ?? ""}
					onChange={({ target: { value } }) => setMissatgeInput((value === "") ? null : value)}
				/>
			</label>
			<label htmlFor="escullSala">
				Escull una sala del xat{" "}
				<select
					name="escullSala"
					id="escullSala"
					value={roomId ?? ""}
					onChange={(e) => setRoomId(e.target.value)}>
					<optgroup label="Escull una sala">
						<option value=""></option>
						<option value="general">General</option>
						<option value="de viatges">Viatges</option>
						<option value="de musica">Música</option>
						<option value="sortir">Sortir</option>
					</optgroup>
				</select>
			</label>
			<label htmlFor="checkboxFosc">
				<input
					id="checkboxFosc"
					type="checkbox"
					value={ésFosc}
					onChange={(e) => setÉsFosc(e.target.checked)}
				/>
				Tria el tema fosc{" "}
			</label>
			{roomId && <p>Benvingut a la sala {roomId}!</p>}
		</div>
	);
};

export default ChatRoomSelect;
