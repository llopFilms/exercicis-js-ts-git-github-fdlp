

const mostrarDades = (nom, edat, correu) => console.log(nom, edat, correu);

mostrarDades("Pep", 57, "pep@oeo.com");

const mostrarDades2 = (...dades) => console.log(dades);

mostrarDades2("Victor", 44, "victor@oeo.com");

const mostrarDades3 = (...dades) =>	console.log(dades);

const arrayDades = ["Dani", 37, "dani@oeo.com"];
mostrarDades3(...arrayDades);