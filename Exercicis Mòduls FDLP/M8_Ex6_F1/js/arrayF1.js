

const arrayF1 = [];

function omplirEscuderies(nom, pressupost, pais) {

    let escuderiaNova = new Escuderia(nom, pressupost, pais);
    arrayF1.push(escuderiaNova);
}

function omplirCotxes(cotxe, potencia, velocitatMax, color, preu, i) {

    let cotxeNou = new Cotxe (cotxe, potencia, velocitatMax, color, preu);
    arrayF1[i].cotxes.push(cotxeNou);
}

function omplirPilots(nom, cognom, edat, antiguitat, alssada, pes, i) {

    let pilotNou = new Pilot (nom, cognom, edat, antiguitat, alssada, pes);
    arrayF1[i].pilots.push(pilotNou);
}

function omplirMecanics(nom, cognom, edat, antiguitat, estudisSuperiors, i) {

    let mecanicNou = new Mecanic (nom, cognom, edat, antiguitat, estudisSuperiors);
    arrayF1[i].mecanics.push(mecanicNou);
}

function omplirArrayF1() {

    omplirEscuderies("Alfa Romeo F1 Team", 69, "Suïssa");
    omplirEscuderies("Alpha Tauri", 77,"Itàlia");
    omplirEscuderies("Alpine F1 Team", 100,"França");

    omplirCotxes("Alfa Romeo C41 - #77", 985, 315, "vermell i blanc", 4.5, 0);
    omplirCotxes("Alfa Romeo C41 - #24", 995, 300, "vermell i blanc", 4.3, 0);
    omplirCotxes("Alfa Tauri AT03 - #10", 985, 310, "blau i blanc", 4.2, 1);
    omplirCotxes("Alfa Tauri AT03 - #22", 997, 320, "blau i blanc", 4.4, 1);
    omplirCotxes("Alpine A521 - #31", 1002, 325, "blau i vermell", 4.6, 2);
    omplirCotxes("Alpine A521 - #14", 1022, 327, "blau i vermell", 4.7, 2);

    omplirPilots("Valtteri", "Bottas", 33, 9, 1.73, 70, 0);
    omplirPilots("Guanyu", "Zhou", 21, 0, 1.75, 63, 0);
    omplirPilots("Pierre", "Gasly", 26, 5,1.77, 70, 1);
    omplirPilots("Yuki", "Tsunoda", 22, 1,1.59, 54, 1);
    omplirPilots("Guanyu", "Zhou", 21, 0, 1.75, 63, 2);
    omplirPilots("Esteban", "Ocon", 26, 6,1.86, 66, 2);

    omplirMecanics("Andrea", "Piccini", 32, 5, "No", 0);
    omplirMecanics("Jaime", "Melo Jr", 35, 8, "Sí", 0);
    omplirMecanics("Justin", "Wilson", 42, 10, "Sí", 1);
    omplirMecanics("Bas", "Leinders", 35, 9, "No", 1);
    omplirMecanics("Fabrizio", "Gollin", 45, 11, "Sí", 2);
    omplirMecanics("Kristian", "Kolby", 42, 12, "Sí", 2);
    
    console.table(arrayF1);
    console.table(arrayF1[0].cotxes);
    console.table(arrayF1[0].pilots);
    console.table(arrayF1[0].mecanics);
    console.table(arrayF1[1].cotxes);
    console.table(arrayF1[1].pilots);
    console.table(arrayF1[1].mecanics);
    console.table(arrayF1[2].cotxes);
    console.table(arrayF1[2].pilots);
    console.table(arrayF1[2].mecanics);
    return console.log("Dades F1 carregades");
}