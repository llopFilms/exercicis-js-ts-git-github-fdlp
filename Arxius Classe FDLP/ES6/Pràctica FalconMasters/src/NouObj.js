

const crearObj = (nom, edat) => {

	return {
		nom: nom,
		edat: edat
	}
}

console.log(crearObj("Ramon", 55));

const crearObj2 = (nom, edat) => {

	return {
		nom,
		edat,
		mostrarInfo() {return `${nom} té ${edat} anys`},
		//mostrarInfo2: () => `${nom} té ${edat} anys`
	}
}

const obj2 = crearObj2("Pep", 47);
console.log(obj2);
console.log(obj2.mostrarInfo());
//console.log(obj2.mostrarInfo2());