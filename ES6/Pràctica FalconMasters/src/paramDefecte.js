

function registrarU(nom, pais = "Espanya", correu, telefon = "no especificat"){

	return`Nom: ${nom}, país: ${pais}, correu: ${correu}, telèfon: ${telefon}`;
}

console.log(registrarU("Jordi", undefined,"jordillop@hotmail.com"));

//paràmetre al mig undefined, paràmetre al final, espai buit