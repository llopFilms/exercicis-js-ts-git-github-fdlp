

const persona = ["Jordi", 46, "Espanya", "Desenvolupador web"];

const [nom, edat, pais, feina] = persona;

console.log("persona: " +nom, edat, pais, feina);


const persona2 = ["Pep", 20, "Espanya"];

const [nom2, edat2, pais2, feina2 = "cap"] = persona2;

console.log("persona 2: "+nom2, edat2, pais2, feina2);


const persona3 = ["Ramon", undefined, "Espanya"];

const [nom3, edat3 = 0, pais3, feina3 = "cap"] = persona3;

console.log("persona 3: "+nom3, edat3, pais3, feina3);

const persona4 = ["Ramon", ,"Espanya"];

const [nom4, , pais4, feina4 = "sense-feina"] = persona4;

console.log("persona 4: "+nom4, pais4, feina4);

//paràmetre al mig 'undefined' o res, paràmetre al final, res

const mostrarInfo = ([nom4, , ,feina4 = "sense-feina"])	=> console.log(nom4, feina4);

mostrarInfo(persona4);

//Agafes els valors desestructurats de nou,de l'array que sigui