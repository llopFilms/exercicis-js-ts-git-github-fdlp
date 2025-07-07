

let posicio = 0;
omplirEdificis();
console.table(arrayEdificis);

function llistaEdificis() {

    let i, llista;
    
    llista = "<small><b>Edificis registrats, plantes, superfície:</b><br><ul>";
    for (i=0; i<arrayEdificis.length; i++) {

        llista += "<li><small>" +arrayEdificis[i].toString2()+ "</small></li>";

    }
    llista += "</ul>";

    escriuDada ("llista", llista);
    return llista;
    
}

llistaEdificis();

function esborrarCamps() {

    escriuDadaValue("nomHotel", "");
    escriuDadaValue("numPlantesHotel", "");
    escriuDadaValue("superficieHotel", "");
    escriuDadaValue("numHabitacions", "");

    escriuDadaValue("nomHospital", "");
    escriuDadaValue("numPlantesHospital", "");
    escriuDadaValue("superficieHospital", "");
    escriuDadaValue("numPacients", "");

    escriuDadaValue("nomCinema", "");
    escriuDadaValue("numPlantesCinema", "");
    escriuDadaValue("superficieCinema", "");
    escriuDadaValue("aforament", "");

    escriuDadaValue("nomEdificiEliminar", "");
    escriuDadaValue("nomEdificiVeure", "");
}

function recollirDivBotons() {

    recollirDivBoto("dadesAltaHotel","altaHotel","Alta Hotel");
    recollirDivBoto("dadesAltaHospital","altaHospital","Alta Hospital");
    recollirDivBoto("dadesAltaCinema","altaCinema","Alta Cinema");
    recollirDivBoto("dadesEliminarEdifici","eliminarEdifici","Eliminar Edifici");
    recollirDivBoto("dadesVeureEdifici","veureEdifici","Veure Edifici");

}

function altaHotel() {

    escriuDada("avis","");
    
    let nom = llegeixDada("nomHotel");
    while (!validacioInd(nom,"nomHotel")) {

        nom = prompt ("Introduïu un nom vàlid:");
        validacioInd(nom,"nomHotel");
    }

    let numPlantes = llegeixDada("numPlantesHotel");
    while (!validacionumIndNum(numPlantes,"numPlantesHotel")) {

        numPlantes = prompt ("Introduïu un número vàlid:");
        validacionumIndNum(numPlantes,"numPlantesHotel");
    }

    let superficie  = llegeixDada("superficieHotel");
    while (!validacionumIndNum(superficie,"superficieHotel")) {

        superficie = prompt ("Introduïu un número vàlid:");
        validacionumIndNum(superficie,"superficieHotel");
    }

    let numHabitacions = llegeixDada("numHabitacions");
    while (!validacionumIndNum(numHabitacions,"numHabitacions")) {
    
        numHabitacions = prompt ("Introduïu un número vàlid:");
        validacionumIndNum(numHabitacions,"numHabitacions");
    }

    let nouHotel = new Hotel(nom, numPlantes, superficie, numHabitacions);
    arrayEdificis.push(nouHotel);

    escriuDada("avis", "Registre de <b>nou Hotel</b> amb el nom <b>"+nom+"</b> registrat satisfactòriament.");

    llistaEdificis();
    esborrarCamps();
    recollirDivBotons();
    
    posicio = arrayEdificis.length-1;

}

function altaCinema() {

    escriuDada("avis","");
    

    let nom = llegeixDada("nomCinema");
    while (!validacioInd(nom,"nomCinema")) {

        nom = prompt ("Introduïu un nom vàlid:");
        validacioInd(nom,"nomCinema");
    }

    let numPlantes = llegeixDada("numPlantesCinema");
    while (!validacionumIndNum(numPlantes,"numPlantesCinema")) {

        numPlantes = prompt ("Introduïu un número vàlid:");
        validacionumIndNum(numPlantes,"numPlantesCinema");
    }

    let superficie  = llegeixDada("superficieCinema");
    while (!validacionumIndNum(superficie,"superficieCinema")) {

        superficie = prompt ("Introduïu un número vàlid:");
        validacionumIndNum(superficie,"superficieCinema");
    }

    let aforament = llegeixDada("aforament");
    while (!validacionumIndNum(aforament,"aforament")) {

        aforament = prompt ("Introduïu un número vàlid:");
        validacionumIndNum(aforament,"aforament");
    }

    let nouCinema = new Cinema(nom, numPlantes, superficie, aforament);
    arrayEdificis.push(nouCinema);

    escriuDada("avis", "Registre de <b>nou Cinema</b> amb el nom <b>"+nom+"</b> registrat satisfactòriament.");

    llistaEdificis();
    esborrarCamps();
    recollirDivBotons();
    posicio = arrayEdificis.length-1;

}

function altaHospital() {

    escriuDada("avis","");
    
    let nom = llegeixDada("nomHospital");
    while (!validacioInd(nom,"nomHospital")) {

        nom = prompt ("Introduïu un nom vàlid:");
        validacioInd(nom,"nomHospital");
    }

    let numPlantes = llegeixDada("numPlantesHospital");
    while (!validacionumIndNum(numPlantes,"numPlantesHospital")) {

        numPlantes = prompt ("Introduïu un número vàlid:");
        validacionumIndNum(numPlantes,"numPlantesHospital");
    }

    let superficie  = llegeixDada("superficieHospital");
    while (!validacionumIndNum(superficie,"superficieHospital")) {

        superficie = prompt ("Introduïu un número vàlid:");
        validacionumIndNum(superficie,"superficieHospital");
    }

    let numPacients = llegeixDada("numPacients");
    while (validacionumIndNum(numPacients,"numPacients")) {

        numPacients = prompt ("Introduïu un número vàlid:");
        validacionumIndNum(numPacients,"numPacients");
    }

    let nouHospital = new Hospital(nom, numPlantes, superficie, numPacients);
    arrayEdificis.push(nouHospital);

    escriuDada("avis", "Registre de <b>nou Hospital</b> amb el nom <b>"+nom+"</b> registrat satisfactòriament.");

    llistaEdificis();
    esborrarCamps();
    recollirDivBotons();

    posicio = arrayEdificis.length-1;

}

function eliminarEdifici() {

    escriuDada("avis","");
    esborrarCamps();

    let nomEdifici = llegeixDada("nomEdificiEliminar");
    while (!validacioInd(nomEdifici,"nomEdificiEliminar")) {
        nomEdifici = prompt ("Introduïu un nom vàlid:");
        validacioInd(nomEdifici,"nomEdificiEliminar");
    }
    let registratIndex = arrayEdificis.findIndex(element => element.nom == nomEdifici);

    if (registratIndex != -1) {
        
        let registrat = arrayEdificis[registratIndex];
        let nomEdificiEsborrar = registrat.nom;
        let confirma = confirm("Esteu segurs que voleu esborrar l'edifici "
        +registrat.nom+ "?");
    
        if (confirma == true);{
    
            arrayEdificis.splice(registratIndex, 1);
    
            escriuDada("avis", "L'edifici <b> "+nomEdificiEsborrar+" </b>ha estat esborrat satisfactòriament.");
        }
    
    }else{

        escriuDada("avis", "Aquest edifici <b>no es troba</b> a la llista.");
    }
    
    llistaEdificis();
    esborrarCamps();
    recollirDivBotons();
    escriuDadaValue("dadesEliminarEdifici","");

    posicio = posicio;
}

function veureCinema(registrat) {

    let numEspectadors = prompt ("Introduïu el número d'espectadors de la sessió");
    while (numEspectadors =="" || isNaN(numEspectadors) || numEspectadors <0) {

        numEspectadors = prompt ("Introduïu un número vàlid:");
    }

    let preuEntrada = prompt ("Introduïu el preu d'entrada de la sessió");
    while (preuEntrada =="" || isNaN(preuEntrada) || preuEntrada <0) {

        preuEntrada = prompt ("Introduïu un número vàlid:");
    }

    return registrat.projectarSessio(numEspectadors, preuEntrada);

}

function veureEdifici() {

    escriuDada("avis","");
    esborrarCamps();

    let nomEdifici = llegeixDada("nomEdificiVeure");
    while (!validacioInd(nomEdifici,"nomEdificiVeure")) {

        nomEdifici = prompt ("Introduïu un nom vàlid:");
        validacioInd(nomEdifici,"nomEdificiVeure");        
    }
    
    let registratIndex = arrayEdificis.findIndex(element => element.nom === nomEdifici)

    if (registratIndex != -1){

        let registrat = arrayEdificis[registratIndex];
        let classe = arrayEdificis[registratIndex].classe;

        switch (classe) {

            case "hotel": escriuDada("avis", registrat + registrat.calcularCostVigilancia() + registrat.netejar() + registrat.serveiHabitacions());
            break;

            case "cinema": escriuDada("avis", veureCinema(registrat) + "<br><br>"+ registrat + registrat.calcularCostVigilancia()) + registrat.netejar();
            break;

            case "hospital": escriuDada("avis", registrat + registrat.calcularCostVigilancia() + registrat.netejar() + registrat.repartirDinar());
            break;

        }

    }else{

        escriuDada("avis", "Aquest edifici <b>no es troba</b> a la llista.");
    }
    
    llistaEdificis();
    esborrarCamps();
    recollirDivBotons();
    escriuDadaValue("dadesVeureEdifici","");

    posicio = posicio;

}

function sortir() {

    esborrarCamps();
    recollirDivBotons();
    escriuDada("avis", "<b>Moltes gràcies i a reveure!</b>")

}
