

const usuari = {
	nom: "Jordi",
	correu:"jordillop@hotmail.com",
	edat: 46,
	pais:"Espanya",
	feina: "Desenvolupador web",
}

const {nom, feina, antiguitat = 0} = usuari;

console.log("clg: "+nom, feina, antiguitat);

const mostrarInfo = ({nom, feina, antiguitat = 0}) => console.log("funció: "+nom, feina, antiguitat = 0);

mostrarInfo(usuari);