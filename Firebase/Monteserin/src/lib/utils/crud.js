import { refPersones } from "../constants/firebase";
import {
	addDoc,
	deleteDoc,
	getDocs,
	query,
	updateDoc,
} from "firebase/firestore";

export const crearCrud = (nom) => addDoc(refPersones, { nom });

export const llegirDadesCrud = () => getDocs(query(refPersones));

export const actualitzarCrud = (refPersona, nom) =>
	updateDoc(refPersona, { nom });

export const esborrarCrud = (refPersona) => deleteDoc(refPersona);
