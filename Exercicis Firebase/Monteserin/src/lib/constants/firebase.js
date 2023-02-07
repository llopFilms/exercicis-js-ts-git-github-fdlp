import { initializeApp } from "firebase/app";
import {collection, getFirestore, doc} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBCMBdCq1aichnMUFWDw089fbTOJlghofU",
	authDomain: "monteserin-2afa7.firebaseapp.com",
	projectId: "monteserin-2afa7",
	storageBucket: "monteserin-2afa7.appspot.com",
	messagingSenderId: "799934831023",
	appId: "1:799934831023:web:e1878da6bfb1c0267b775a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const refPersones = collection(db, "persones");
export const auth = getAuth();
export default app;
