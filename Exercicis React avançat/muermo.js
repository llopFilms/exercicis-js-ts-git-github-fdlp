const obj = {
  nom: "jordi",
  cognom: "llop",
};

const nouObj = { ...obj };
nouObj.nom = "Ramon";

console.log(obj);
console.log(nouObj);

const obj2 = {
  usuari: { nom: "Pepe", cognom: "Sarsanedas" },
};

const nouObj2 = { ...obj2, usuari: { ...obj2.usuari } };
nouObj2.usuari.nom = "Ramon";

console.log(obj2);
console.log("nouObj2", nouObj2);

const objPlantilla = {
  usuari: { tipus: "alumne", nom: "aquíNom", cognom: "aquíCognom" },
};
console.log(objPlantilla);

const actualitzaObj = (obj, nom, cognom) => ({
  ...obj,
  usuari: { ...obj.usuari, nom, cognom },
});

console.log(actualitzaObj(objPlantilla, "Joan", "Petit"));
console.log(actualitzaObj(objPlantilla, "Maria", "Gran"));
