import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth } from "../constants/firebase";

export const signUpAuth = (usuari, claudePas) => {
	createUserWithEmailAndPassword(auth, usuari, claudePas);
	return `Nou usuari ${usuari}`;
};

export const signInAuth = (usuari, claudePas) => {
	console.log(usuari);
	signInWithEmailAndPassword(auth, usuari, claudePas);
	return `${usuari} loguejat`;
};

export const logoutAuth = (usuari) => {
	signOut(auth);
	return `${usuari} desloguejat`;
};
