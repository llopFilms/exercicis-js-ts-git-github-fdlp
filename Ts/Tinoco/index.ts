console.log("Hola classe");
document.write("Hola classe");

let num: number = 2.444444;
let numF: number = Number(num.toFixed(2));
console.log(numF);
console.log(typeof numF);

// Exercici 2
// Un arxiu simple de TypeScript
let texto = {
	saludo: "Oriol",
};

function saludar(saludo: string) {
	console.log("Hola " + saludo);
	document.getElementById("ex1").innerHTML = ("Hola" + saludo);
}
saludar(texto.saludo);
//tsc app -w per compilar en mode observador

// Exercici 3
// Un arxiu simple de TypeScript
var salutacio = "Hola";
let salutacio2 = "Hola2";

function saludar2() {
	if (true) {
		salutacio = " Adios";
		salutacio2 = "Adios2";
}
	console.log(salutacio, salutacio2);
	document.getElementById("ex2").innerHTML = salutacio + " " + salutacio2;
}
saludar2();

// Exercici 4
// Un arxiu simple de TypeScript
let variable: any = "Oriol";
variable = 1234;
let arrayMix: any[] = ["2", 24, "Pep", true];
arrayMix = ["2", 24, "Pep", true, false];


// Exercici 5
// Un arxiu simple de TypeScript
// El idoni es definir sempre la tipologia de la variable
let color: string = "Vermell";
let motor: number = 1.6;
let passatgers: number = 5;
let portes: boolean = true;
let combustible: string[] = ["Diesel", "Electric"];

// Exercici 6
// Un arxiu simple de TypeScript
let usuari = {
    nom:"Oriol",
    edat:"35"
}

usuari = {
    nom:"Josep",
    edat:"30",
    color:"blau"
}

// Exercici 7
// Un arxiu simple de TypeScript `` "" ''
let nom:string = "Joan";
let apellidos:string = "Perez";
let edat:number = 32;

let texte = "Hola món"; //encadenem resultats + o ${}
let concat = `Hola món, sóc en ${nom} ${apellidos}, i tinc ${edat} anys`;
console.log(concat);
document.getElementById("ex3").innerHTML = concat;

