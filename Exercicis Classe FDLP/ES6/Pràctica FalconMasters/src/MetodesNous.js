

const text = "Hola nois";

console.log(text, "comença amb h:", text.toLowerCase().startsWith("h"));

console.log(text, "acaba amb a:", text.endsWith("a"));

console.log(text, "inclou 'Jordi':", text.includes("Jordi"));

const amics =["Pere", "Pep", "Manel"];

console.log("Amics: ", amics, "inclou Manel:", amics.includes("Manel"));

console.log("Més de 4 lletres a 'amics':", amics.find((element) => {
	return element.length > 4;
}))

console.log("Més de 4 lletres a 'amics':", amics.find(element => element.length > 4));

console.log("Trobar índex de Manel a 'amics'", amics.findIndex(element => element == "Manel"));


