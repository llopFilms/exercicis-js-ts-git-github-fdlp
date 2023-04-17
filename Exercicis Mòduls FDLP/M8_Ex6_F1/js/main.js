let posicio = 0;
omplirArrayF1();

function llistaF1() {
	let i,
		j,
		llista = "<small>";

	for (i = 0; i < arrayF1.length; i++) {
		llista += arrayF1[i] + "<ul>";

		for (j = 0; j < arrayF1[i].cotxes.length; j++) {
			llista += "<li>" + arrayF1[i].cotxes[j] + "</li>";
		}

		for (j = 0; j < arrayF1[i].pilots.length; j++) {
			llista += "<li>" + arrayF1[i].pilots[j] + "</li>";
		}

		for (j = 0; j < arrayF1[i].mecanics.length; j++) {
			llista += "<li>" + arrayF1[i].mecanics[j] + "</li>";
		}
		llista += "<br></ul>";
	}

	llista += "</small>";
	escriuDada("llista", llista);
}

llistaF1();

function mostrarEscuderia() {
	let nomBuscat = prompt("Quina escuderia vols?", "Alfa Romeo F1 Team");
	let index = arrayF1.findIndex((el) => el.nom == nomBuscat);
	let escuderia = arrayF1[index];

	//Aquí hi ha un if que diu que no hi és si index =-1...

	//Cridem al toString() de Escuderia
	document.getElementById("pEscuderia").innerHTML = escuderia;
}

function mostrarCotxes() {
	let nomBuscat = prompt("Quin cotxe vols veure?", "Alfa Romeo C41 - #77");

	//entrem a remenar arrays de cotxes...
	let i,
		j,
		trobat = false,
		index,
		cotxe;
	for (i = 0; i < arrayF1.length; i++) {
		for (j = 0; j < arrayF1[i].cotxes.length; j++) {
			index = arrayF1[i].cotxes.findIndex((el) => el.model == nomBuscat);

			if (index != -1) {
				cotxe = arrayF1[i].cotxes[index];
				j = arrayF1[i].cotxes.length;
			}

			/* if (arrayF1[i].cotxes[j].model == nomBuscat){

                trobat = true;
                cotxe = arrayF1[i].cotxes[j];
                console.log(cotxe);
            } */
		}
	}
	//Aquí hi ha un if amb 'trobat' que diu hi és o que no...
	//Cridem al toString() delcotxe:
	document.getElementById("pCotxes").innerHTML = cotxe;
}
