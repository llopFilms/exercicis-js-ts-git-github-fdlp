

class Persona{

	constructor (nom, edat) {

		this.nom = nom;
		this.edat = edat;
	}

	mostrarInfo () { console.log(`Les dades són: ${this.nom} i ${this.edat}`); }

};

export default Persona;