

let posicio = 0;
console.table(arrayEdificis);

function llistaEdificis() {

    let i, j, llista;
    
    llista = "<small><b>Edificis registrats, plantes, superfície:</b><br><ul>";
    for (i=0; i<arrayEdificis.length; i++) {

        llista += "<li><b>" +arrayEdificis[i].getNom()+ "</b>: " + arrayEdificis[i].getNumPlantes()+ " plantes, " +arrayEdificis[i].getSuperficie()+ " m<sup>2</sup>.";

    }
    llista += "</ul></small>";

    escriuDada ("llista", llista);
    return llista;
    
}

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
    let continuar = validacioIndPrompt(nom,"nomHotel");
    while (continuar == false) {

        nom = prompt ("Introduïu un nom vàlid:");
        validacioIndPrompt(nom,"nomHotel");
        if (validacioIndPrompt(nom,"nomHotel") == true) {

            continuar = true;
        };
    }

    let numPlantes = llegeixDada("numPlantesHotel");
    continuar = validacionumIndPrompt(numPlantes,"numPlantesHotel");
    while (continuar == false) {

        numPlantes = prompt ("Introduïu un número vàlid:");
        validacionumIndPrompt(numPlantes,"numPlantesHotel");
        if (validacionumIndPrompt(numPlantes,"numPlantesHotel") == true){

            continuar = true;
        }
    }

    let superficie  = llegeixDada("superficieHotel");
    continuar = validacionumIndPrompt(superficie,"superficieHotel");
    while (continuar == false) {

        superficie = prompt ("Introduïu un número vàlid:");
        validacionumIndPrompt(superficie,"superficieHotel");
        if (validacionumIndPrompt(superficie,"superficieHotel") == true) {

            continuar = true;
        };
    }

    let numHabitacions = llegeixDada("numHabitacions");
    continuar = validacionumIndPrompt(numHabitacions,"numHabitacions");
    while (continuar == false) {
    
        numHabitacions = prompt ("Introduïu un número vàlid:");
        validacionumIndPrompt(numHabitacions,"numHabitacions");
        if (validacionumIndPrompt(numHabitacions,"numHabitacions") == true){

            continuar = true;
        }
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
    let continuar = validacioIndPrompt(nom,"nomCinema");
    while (continuar == false) {

        nom = prompt ("Introduïu un nom vàlid:");
        validacioIndPrompt(nom,"nomCinema");
        if (validacioIndPrompt(nom,"nomCinema") == true) {

            continuar = true;
        };
    }

    let numPlantes = llegeixDada("numPlantesCinema");
    continuar = validacionumIndPrompt(numPlantes,"numPlantesCinema");
    while (continuar == false) {

        numPlantes = prompt ("Introduïu un número vàlid:");
        validacionumIndPrompt(numPlantes,"numPlantesCinema");
        if (validacionumIndPrompt(numPlantes,"numPlantesCinema") == true){

            continuar = true;
        }
    }

    let superficie  = llegeixDada("superficieCinema");
    continuar = validacionumIndPrompt(superficie,"superficieCinema");
    while (continuar == false) {

        superficie = prompt ("Introduïu un número vàlid:");
        validacionumIndPrompt(superficie,"superficieCinema");
        if (validacionumIndPrompt(superficie,"superficieCinema") == true) {

            continuar = true;
        };
    }

    let aforament = llegeixDada("aforament");
    continuar = validacionumIndPrompt(aforament,"aforament");
    while (continuar == false) {

        aforament = prompt ("Introduïu un número vàlid:");
        validacionumIndPrompt(aforament,"aforament");
        if (validacionumIndPrompt(aforament,"aforament") == true){

            continuar = true;
        }
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
    let continuar = validacioIndPrompt(nom,"nomHospital");
    while (continuar == false) {

        nom = prompt ("Introduïu un nom vàlid:");
        validacioIndPrompt(nom,"nomHospital");
        if (validacioIndPrompt(nom,"nomHospital") == true) {

            continuar = true;
        };
    }

    let numPlantes = llegeixDada("numPlantesHospital");
    continuar = validacionumIndPrompt(numPlantes,"numPlantesHospital");
    while (continuar == false) {

        numPlantes = prompt ("Introduïu un número vàlid:");
        validacionumIndPrompt(numPlantes,"numPlantesHospital");
        if (validacionumIndPrompt(numPlantes,"numPlantesHospital") == true){

            continuar = true;
        }
    }

    let superficie  = llegeixDada("superficieHospital");
    continuar = validacionumIndPrompt(superficie,"superficieHospital");
    while (continuar == false) {

        superficie = prompt ("Introduïu un número vàlid:");
        validacionumIndPrompt(superficie,"superficieHospital");
        if (validacionumIndPrompt(superficie,"superficieHospital") == true) {

            continuar = true;
        };
    }

    let numPacients = llegeixDada("numPacients");
    continuar = validacionumIndPrompt(numPacients,"numPacients");
    while (continuar == false) {

        numPacients = prompt ("Introduïu un número vàlid:");
        validacionumIndPrompt(numPacients,"numPacients");
        if (validacionumIndPrompt(numPacients,"numPacients") == true){

            continuar = true;
        }
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
    let continuar = validacioIndPrompt(nomEdifici,"nomEdificiEliminar");
    while (continuar == false) {
    
        nomEdifici = prompt ("Introduïu un nom vàlid:");
        validacioIndPrompt(nomEdifici,"nomEdificiEliminar");
        if (validacioIndPrompt(nomEdifici,"nomEdificiEliminar") == true){

            continuar = true;
        }
    }
    
    if (arrayEdificis.some(element => element.nom === nomEdifici)){
        
        let registrat = arrayEdificis.find(element => element.nom === nomEdifici);
        let registratIndex = arrayEdificis.indexOf(registrat);

        let nomEdificiEsborrar = registrat.getNom();
        let confirma = confirm ("Esteu segurs que bvoleu esborrar l'edifici "
        +registrat.getNom()+ "?");
    
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
    let continuar = false;
    while (numEspectadors =="" || isNaN(numEspectadors) || numEspectadors <0) {

        numEspectadors = prompt ("Introduïu un número vàlid:");
        
        if (numEspectadors =="" || isNaN(numEspectadors) || numEspectadors <=0) {

            continuar = true;
        }
    }

    let preuEntrada = prompt ("Introduïu el preu d'entrada de la sessió");
    continuar = false;
    while (preuEntrada =="" || isNaN(preuEntrada) || preuEntrada <0) {

        preuEntrada = prompt ("Introduïu un número vàlid:");
        
        if (preuEntrada =="" || isNaN(preuEntrada) || preuEntrada <=0) {

            continuar = true;
        }
    }

    return registrat.projectarSessio(numEspectadors, preuEntrada);

}

function veureEdifici() {

    escriuDada("avis","");
    esborrarCamps();

    let nomEdifici = llegeixDada("nomEdificiVeure");
    let continuar = validacioIndPrompt(nomEdifici,"nomEdificiVeure");
    while (continuar == false) {

        nomEdifici = prompt ("Introduïu un nom vàlid:");
        validacioIndPrompt(nomEdifici,"nomEdificiVeure");
        if (validacioIndPrompt(nomEdifici,"nomEdificiVeure") == true){

            continuar = true;
        }
    }
    
    if (arrayEdificis.some(element => element.nom === nomEdifici)){

        let registrat = arrayEdificis.find(element => element.nom === nomEdifici);
        let registratIndex = arrayEdificis.indexOf(registrat);
        let classe = arrayEdificis[registratIndex].getClasse();

        switch (classe) {

            case "hotel": escriuDada("avis", registrat.toString() + registrat.calcularCostVigilancia() + registrat.netejar() + registrat.serveiHabitacions());
            break;

            case "cinema": escriuDada("avis", veureCinema(registrat) + "<br><br>"+ registrat.toString() + registrat.calcularCostVigilancia()) + registrat.netejar();
            break;

            case "hospital": escriuDada("avis", registrat.toString() + registrat.calcularCostVigilancia() + registrat.netejar() + registrat.repartirDinar());
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