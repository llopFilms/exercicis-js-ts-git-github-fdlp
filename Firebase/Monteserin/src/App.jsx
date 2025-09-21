import { useState, useEffect } from "react";
import {
	llegirDadesCrud,
	crearCrud,
	esborrarCrud,
	actualitzarCrud,
} from "./lib/utils/crud";
import "./App.css";
import { db, refPersones, auth } from "./lib/constants/firebase";
import { onSnapshot, doc } from "firebase/firestore";
import { snapshot, user } from "./lib/utils/subscripcions";
import { onAuthStateChanged } from "firebase/auth";
import { signInAuth, signUpAuth, logoutAuth } from './lib/utils/auth';

function App() {
	const [usuari, setUsuari] = useState("");
	const [claudePas, setClaudePas] = useState("");
	const [autenticacio, setAutenticacio] = useState("No loguejat");
	const [nomPersona, setNomPersona] = useState("");
	const [idPersona, setIdPersona] = useState("");
	const [dades, setDades] = useState(null);

	const signUp = async () => {
		const missatgeAuth = await signUpAuth(usuari, claudePas);
		setAutenticacio(missatgeAuth);
		setUsuari("");
		setClaudePas("");
	};

	const login = async () => {
		const missatgeAuth = await signInAuth(usuari, claudePas);
		setAutenticacio(missatgeAuth);
		setUsuari("");
		setClaudePas("");
	};

	const logout = async () => {
		const missatgeAuth = await logoutAuth(usuari);
		setAutenticacio(missatgeAuth);
	};

	const llegirDadesPersones = async () => {
		setDades((await llegirDadesCrud()).docs);
	};

	const crearPersona = async () => {
		await crearCrud(nomPersona);
		llegirDadesPersones();
		setNomPersona("");
	};

	const actualitzarPersona = async () => {
		const refPersona = doc(db, "persones", idPersona);
		await actualitzarCrud(refPersona, nomPersona);
		llegirDadesPersones();
		setNomPersona("");
		setIdPersona("");6
	};

	const esborrarPersona = async () => {
		const refPersona = doc(db, "persones", idPersona);
		await esborrarCrud(refPersona);
		llegirDadesPersones();
		setIdPersona("");
	};

	useEffect(() => {
		llegirDadesPersones();
		onSnapshot(refPersones, snapshot);
		onAuthStateChanged(auth, user);
	}, []);

	return (
		<div className="App">
			<div>
				<label htmlFor="usuari">
					Nom usuari:
					<input
						type="email"
						id="usuari"
						placeholder="usuari..."
						onChange={(e) => setUsuari(e.target.value)}
						value={usuari}
					/>
				</label>
			</div>
			<div>
				<label htmlFor="claudePas">
					Clau de Pas:
					<input
						type="password"
						id="claudePas"
						placeholder="claudepas..."
						onChange={(e) => setClaudePas(e.target.value)}
						value={claudePas}
					/>
				</label>
			</div>
			<div>
				<button onClick={signUp}>Sign Up</button>
				<button onClick={login}>Log in</button>
				<button onClick={logout}>Log out</button>
				<p>
					<input type="text" value={autenticacio} readOnly />
				</p>
			</div>

			<hr />

			<div>
				<input
					type="text"
					placeholder="Id Persona..."
					value={idPersona}
					onChange={(e) => setIdPersona(e.target.value)}
				/>
				<button onClick={esborrarPersona}>Esborrar Persona</button>
			</div>
			<div>
				<input
					type="text"
					placeholder="Nom persona..."
					value={nomPersona}
					onChange={(e) => setNomPersona(e.target.value)}
				/>
				<button onClick={crearPersona}>Crear Persona</button>
			</div>
			<button onClick={actualitzarPersona}>Actualitzar Nom</button>
			{dades &&
				dades.map((dada) => (
					<p key={dada.id}>
						{dada.data().nom} - {dada.id}
					</p>
				))}
		</div>
	);
}

export default App;
