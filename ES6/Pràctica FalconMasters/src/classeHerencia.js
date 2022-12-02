

class Usuario {

	constructor(){

			this.nom = "Jordi";
			this.edat = 46;

			console.log("Objecte Usuario creat");
	}
}

const jordi= new Usuario();
console.log(jordi);


class Usuari {

	constructor(nom, edat, feina){

			this.nom = nom;
			this.edat = edat;
			this.feina = feina;

			console.log("Objecte Ususari creat");
	}

	salutacio(missatge) {
		return missatge;
	}

	mostrarInfo() {
		return `
		Ǹom: ${this.nom}
		Edat: ${this.edat}
		Feina: ${this.feina}
		`;
	}
}

const jordi2 = new Usuari ("Jordi", 46, "desenvolupador web");
console.log(jordi2.salutacio("Hola des de Usuari2"));
console.log(jordi2.mostrarInfo());

class Estudiant extends Usuari {

	constructor(nom, edat, feina, carrera){

			super(nom, edat, feina);
			this.carrera = carrera;

			console.log("Objecte Estudiant creat");
	}

		mostrarInfoCarrera() {
		return `
		Carrera: ${this.carrera}
		`;
	}
}

const ramon = new Estudiant ("Ramon", 44, "consultor", "telecos");
console.log(ramon);
console.log(ramon.super.mostrarInfo() + ramon.mostrarInfoCarrera);

