console.log("Hola classe");
document.write("Hola classe");

// tsc app -w per compilar en mode observador
(function exercici1() {
	let num: number = 2.4244324255444;
	let numF: number = Number(num.toFixed(2));
	let numR: number = Math.round(num * 100) / 100;
	console.log(numF, numR);
	console.log(typeof numF);
});

(function exercici2() {
	let texto = {
		saludo: "Oriol",
	};

	function saludar(saludo: string) {
		console.log("Hola " + saludo);
		const element = document.getElementById("ex1") as HTMLElement;
		element.innerHTML = "Hola" + saludo;
	}
	saludar(texto.saludo);
});

(function exercici3() {
	var salutacio: string = "Hola";

	function saludar2() {
		let salutacio2: string;
		if (true) {
			salutacio = " Adios";
			salutacio2 = "Adios2";
		}
		console.log(salutacio, salutacio2);
		const element = document.getElementById("ex2") as HTMLElement;
		element.innerHTML = salutacio + " " + salutacio2;
	}
	saludar2();
});

(function exercici5() {
	let variable: any = "Oriol";
	variable = 1234;
	let arrayMix = ["2", 24, "Pep", true];
	let arrayMix2: any[] = ["3", 25, "Ramon", false];
	let arrayMix3: [string, number, string, boolean] = [
		"4",
		26,
		"Josep Maria",
		true,
	]; // tuple
});

(function exercici5i6() {
	// Exercici 5
	// El idoni es definir sempre la tipologia de la variable
	let color: string = "Vermell";
	let motorx: number = 1.6;
	let passatgers: number = 5;
	let portes: boolean = true;
	let combustibleX: string[] = ["Diesel", "Electric"];

	// Exercici 6
	let usuari: {
		nom: string;
		edat: number;
		color: string;
	} = {
		nom: "Josep",
		edat: 30,
		color: "blau",
	};
	console.log(usuari);
})();

(function exercici7() {
	let nom: string = "Joan";
	let apellidos: string = "Perez";
	let edat: number = 32;

	let text = "Hola món"; //encadenem resultats + o ${}
	let concat = `${text}, sóc en ${nom} ${apellidos}, i tinc ${edat} anys`;
	console.log(concat);
	const element3 = document.getElementById("ex3") as HTMLElement;
	element3.innerHTML = concat;

	enum Direccio {
		Nord = 1,
		Sud = NaN,
		Est = "est".length,
		Oest = 6,
	}
	console.log(Direccio);

	enum DireccioText {
		Nord = "NORD",
		Sud = "SUD",
		Est = "Est",
		Oest = "OEST",
	}
	console.log(DireccioText);

	enum Color {
		Vermell,
		Verd,
		Blau,
	}
	let z: Color = Color.Verd;
	let z2: string = Color[1];
	console.log(z2, z);
	console.log(Color);

	enum ColorNum {
		Vermell = 30,
		Verd = 8,
		Blau = 22,
	}
	let cN: ColorNum = ColorNum.Blau;
	let cN2: string = ColorNum[22];
	console.log(cN2, cN);
	console.log(ColorNum);
});

(function exercici8i9i10() {
	// Exercici 8
	const velocitat: number = 0;
	//probem de diferenciar segons combustible
	function accelerar(a: number): number {
		return a + 20;
	}
	console.log(accelerar(velocitat));

	// Exercici 9
	const velocitat2: number = 0;
	//probem de diferenciar segons combustible
	function accelerar2(a: number, b: string = "Diesel") {
		let suma: number = a + 20;
		return suma + "Km/h utilitzant " + b;
	}
	console.log(`La meva velocitat es ${accelerar2(velocitat2)}`);

	// Exercici 10
	const velocitat3: number = 0;
	//probem de diferenciar segons combustible
	function accelerar3(a: number, b: string = "Diesel", c?: string, d?: number) {
		let suma: number = a + 20;
		if (c && d) {
			return `${suma} Km/h utilitzant ${b} i amb ${c} de ${d} anys`;
		} else if (c) {
			return suma + "Km/h utilitzant " + b + " i amb " + c;
		} else if (d) {
			return `${suma} Km/h utilitzant ${b} i amb algú de ${d} anys`;
		} else {
			return suma + "Km/h utilitzant " + b;
		}
	}
	console.log(
		`La meva velocitat es ${accelerar3(velocitat3, undefined, undefined, 23)}`
	);
});

(function exerciciPadLeft() {
	function padLeft(valor: string, marge: string | number) {
		if (typeof marge === "number") {
			return `Afegeix tantes 'X' com valor en número ${Array(marge + 1).join(
				"X"
			)} ${valor}`;
		}
		if (typeof marge === "string") {
			return `Afegeix tantes 'X' com valor.length en string ${Array(
				marge.length + 1
			).join("X")} ${valor}`;
		}
		return `Expected String or number, got '${marge}'`;
	}
	console.log(padLeft("esqerra", 4));
	console.log(padLeft("esquerra", "dos"));
	//console.log(padLeft("esquerra", true));

	let llista: { a: number; b: number; c: number; d: string };
	llista = { a: 1, b: 2, c: 3, d: "Ramon" };
	//for (let element in llista) console.log(`${element}: ${llista[element]}`);

	let llista2: [number, number, number, string];
	llista2 = [1, 2, 3, "Pere"];
	for (let element of llista2)
		console.log(`${llista2.indexOf(element)}: ${element}`);
	for (let i: number = 0; i < llista2.length; i++)
		console.log(`${i}: ${llista2[i]}`);

	let paraula: string = "Vas";
	for (let lletra of paraula) console.log(lletra);
	let frase: string[] = ["No", "sé", "què", "estàs", "llegint", "passarell"];
	for (let paraula of frase) console.log(paraula);

	let stringx = "Hola bon dia";
	for (let caracter of stringx) console.log(caracter);
});

(function exercici11i12i13() {
	// Exercici 11
	// Funcio normal en TypeScript
	let mevaFuncio = function (a: string): string {
		return a;
	};

	//Funcio de fletxa en TypeScript
	let mevaFuncioF = (a: string): string => a;

	console.log(mevaFuncio("Normal"));
	console.log(mevaFuncioF("Fletxa"));

	// Exercici 12
	// Funcio normal en TypeScript amb 2 o més parametres
	let mevaFuncio2 = function (a: number, b: number) {
		return a + b;
	};

	//Funcio de fletxa en TypeScript amb 2 o més parametres ()
	let mevaFuncioF2 = (a: number, b: number) => a + b;

	console.log(mevaFuncio2("Normal".length, 5));
	console.log(mevaFuncioF2("Fletxa".length, 7));

	// Ecercici 13
	// Funcio normal en TypeScript amb 2 o més parametres
	let mevaFuncio3 = function (a: number, b: number): number {
		return a + b;
	};

	//Funcio de fletxa en TypeScript amb 2 o més parametres ()
	let mevaFuncioF3 = (a: number, b: number): number => a + b; //Pendent

	console.log(mevaFuncio3(2, 2));
	console.log(mevaFuncioF3(2, 3));

	//Anem a veure con es realitzaria amb diverses linies de logica
	let funcioMajuscules = function (paraula: string): string {
		paraula = paraula.toUpperCase();
		return paraula;
	};

	let funcioMajusculesF = (paraula: string): string => {
		paraula = paraula.toUpperCase();
		return paraula;
	};

	console.log(funcioMajuscules("pepitolospalotes"));
	console.log(funcioMajusculesF("cagüenlaleche"));
});

(function exercici14() {
	let nom2: string = "Josep";

	// Funcio normal en TypeScript
	let persona = {
		nom2: "Doraemon",
		pinta() {
			setTimeout(function () {
				console.log(nom2 + " pinta un dibuix");
			}, 1000);
		},
	};
	persona.pinta();

	//Funcio de fletxa en TypeScript
	let persona1 = {
		nom2: "Doraemon",
		pinta() {
			setTimeout(() => {
				//Aqui tindriem que fer-ho !function=>
				console.log(this.nom2 + " pinta un dibuix");
			}, 1500);
		},
	};
	persona1.pinta();
});

(function exercici15i16i17i18() {
	// Exercici 15
	const cotxe = {
		model: "Kia Rio",
		motor: 1.5,
		combustible: "Diesel",
		meu: true,
	};
	// Destructuració de objectes {,,}= ;
	const { model, motor, combustible, meu } = cotxe;
	console.log(model + " " + motor + " " + combustible + " " + meu);

	// Exercici 16
	let cotxe3 = {
		model3: "Kia Rio",
		motor3: "1.5",
		combustible3: "Diesel",
	};
	// Destructuració de objectes {,,}= ;
	const { model3: string, motor3, combustible3 } = cotxe3;
	//console.log(model3+ " " +motor3+ " " +combustible3);

	// Exercici 17
	let conductors: string[] = ["Toni", "Oriol", "Ana"];

	// Desestructuració de l'Array [] =;
	// const [a, ...rest]
	const [a, ...f] = conductors;
	console.log(a + " " + f);
	console.log(f);

	// I si només volem obtenir el valor c? ,,c
	const [, , d] = conductors;
	console.log(d);

	// Exercici 18
	function mostracombustibles(primer: string[], ...segon: string[]) {
		console.log(primer, segon);
	}
	const combustibles = ["Diesel", "Benzina"];
	const nouscombustibles = ["Electric", "GLP"];
	mostracombustibles(combustibles, ...nouscombustibles);
});

(function exercici19() {
	const promesa1 = new Promise(function (resolve, reject) {
		setTimeout(() => {
			//console.log(missatge);
			//Si acaba be
			const exit = true;
			if (exit) resolve("ok");
			//Si acaba malament
			else reject("ko");
		}, 1500);
	});

	//console.log("Pas 1");
	/* promesa1.then(
		///then(resolve,reject)
		function () {
			console.log("Em mostraré quan la promesa acabi bé");
		},
		function () {
			console.error("Em mostraré si tot surt malament");
		}
		); */
	promesa1.then((resposta) => {
		console.log("then", resposta);
		console.log("Em mostraré quan la promesa acabi bé");
	});

	//console.log("Pas 2");
	/* promesa1.catch(function (error) {
		console.log(error);
	}); */
	promesa1.catch((error) => {
		console.log("catch", error);
		console.log(error);
	});
});

(function exercici20() {
	// Exercici 20
	const promesa2 = () => {
		setTimeout(() => {
			console.log("Client 1 - 1er Plat");
			console.log("Client 1 - 2on Plat");
			console.log("Client 1 - Postre");
		}, 1500);
	};

	const promesa3 = () => {
		//setTimeout( ()=>{
		console.log("Client 2 - 1er Plat");
		console.log("Client 2 - 2on Plat");
		console.log("Client 2 - Postre");
		//}, 1500)
	};

	//console.log("Pas 1");
	promesa2();
	promesa3();
});

(function exercici21i22i23() {
	// Exercici 21, 22, 23
	const funcioCobrarDinar = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(true);
			}, 3000);
		});
	};

	const promesa4 = () => {
		console.log("Client 1 - 1er Plat");
		console.log("Client 1 - 2on Plat");
		console.log("Client 1 - Postre");
		const cobrar = funcioCobrarDinar();
		console.log("Aqui tè el compte", cobrar);
	};

	const promesa5 = () => {
		//setTimeout( ()=>{
		console.log("Client 2 - 1er Plat");
		console.log("Client 2 - 2on Plat");
		console.log("Client 2 - Postre");
		//}, 1500)
	};

	//console.log("Pas 1");

	promesa4();
	promesa5();
});

(function exercici24() {
	// Exercici 24
	const funcioCobrarDinar3 = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(true);
			}, 3000);
		});
	};

	let promesa6 = async () => {
		console.log("Client 1 - 1er Plat");
		console.log("Client 1 - 2on Plat");
		console.log("Client 1 - Postre");
		const cobrar = await funcioCobrarDinar3();
		console.log("Aquí té el compte", cobrar);
	};

	let promesa7 = () => {
		console.log("Client 2 - 1er Plat");
		console.log("Client 2 - 2on Plat");
		console.log("Client 2 - Postre");
	};

	//console.log("Pas 1");
	promesa6();
	promesa7();
});

(function exercici25() {
	function coche(objecte) {
		console.log("El meu cotxe es un: " + objecte.marca); //provem marcaes
	}

	let elMeuCotxe = {
		marca: "Kia",
		portes: 5,
		combustible: "Diesel",
	};

	coche(elMeuCotxe);
});
