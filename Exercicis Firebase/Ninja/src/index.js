import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	getDocs,
	addDoc,
	deleteDoc,
	doc,
	onSnapshot,
	query,
	where,
	orderBy,
	serverTimestamp,
	getDoc,
	updateDoc,
} from "firebase/firestore";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAdWTDki4BmuFCsiyLuRtwv2tKHPjzhJyA",
	authDomain: "ninja-96936.firebaseapp.com",
	projectId: "ninja-96936",
	storageBucket: "ninja-96936.appspot.com",
	messagingSenderId: "685141930371",
	appId: "1:685141930371:web:1035c86649bc81f8d506b6",
};

//init firebase app
initializeApp(firebaseConfig);
//init services
const db = getFirestore();
const auth = getAuth();
//colection ref
const colRef = collection(db, "books");
//get query
const queryRef = query(colRef, where("author", "==", "Fèlix el Gat"));
//get query ordered
const queryRefSort = query(
	colRef,
	where("author", "==", "Fèlix el Gat"),
	orderBy("title", "desc")
);
//get query ordered by timestamp
const queryRefTstamp = query(colRef, orderBy("createdAt", "desc"));
//get collection data
/* getDocs(colRef)
	.then((snapshot) => {
		//console.log(snapshot.docs);
		let dades = [];
		snapshot.docs.forEach((doc) => {
			dades.push({ ...doc.data(), id: doc.id });
		});
		console.log(dades);
	})
	.catch((err) => {
		console.log(err.message);
	}); */

//get real time collection data
const unsubsCol = onSnapshot(queryRefTstamp, (snapshot) => {
	let dades = [];
	snapshot.docs.forEach((doc) => {
		dades.push({ ...doc.data(), id: doc.id });
	});
	console.log(dades);
});

//get one doc
const docRef = doc(db, "books", "ILukMFvP8ReACUtA7Gt0");
getDoc(docRef).then((doc) => console.log(doc.data(), doc.id));
const unsubsDoc = onSnapshot(docRef, (doc) => console.log(doc.data(), doc.id));

//afegir documents
const addBooksForm = document.querySelector(".add");
addBooksForm.addEventListener("submit", (e) => {
	e.preventDefault();
	addDoc(colRef, {
		title: addBooksForm.title.value,
		author: addBooksForm.author.value,
		createdAt: serverTimestamp(),
	}).then(() => {
		addBooksForm.reset();
	});
});

//esborrar documents
const deleteBooksForm = document.querySelector(".delete");
deleteBooksForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const docRef = doc(db, "books", deleteBooksForm.id.value);
	deleteDoc(docRef).then(() => deleteBooksForm.reset());
});

//actualitzant documents
const updateBooksForm = document.querySelector(".update");
updateBooksForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const docRef = doc(db, "books", updateBooksForm.id.value);
	updateDoc(docRef, {
		title: "nou títol",
	}).then(() => updateBooksForm.reset());
});

//signup nous usuaris
const singupForm = document.querySelector(".signup");
singupForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const email = singupForm.email.value;
	const password = singupForm.password.value;

	createUserWithEmailAndPassword(auth, email, password)
		.then((cred) => {
			//console.log("usuari creat", cred.user);
			singupForm.reset();
		})
		.catch((err) => {
			console.log(err.message);
		});
});

const logoutButton = document.querySelector(".logout");
logoutButton.addEventListener("click", () => {
	signOut(auth)
		.then(() => {
			//console.log("ususari no loguejat");
		})
		.catch((err) => {
			console.log(err.message);
		});
});

const loginForm = document.querySelector(".login");
loginForm.addEventListener("click", (e) => {
	e.preventDefault();

	const email = loginForm.email.value;
	const password = loginForm.password.value;

	signInWithEmailAndPassword(auth, email, password)
		.then((cred) => {
			//console.log("usuari loguejat",cred.user);
			loginForm.reset();
		})
		.catch((err) => {
			console.log(err.message);
		});
});

// subscripció a auth changes
const unsubsAuth = onAuthStateChanged(auth, (user) => {
	console.log("Estat d'usuari:", user);
});

// Cancel·lar subscripocions
const unsubsButton = document.querySelector(".unsubs");
unsubsButton.addEventListener("click", () => {
	console.log("Cancel·lant...");
	unsubsCol();
	unsubsDoc();
	unsubsAuth();
});
