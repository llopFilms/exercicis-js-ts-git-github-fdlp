
let posicio = 0;
llistaHotels();

//Funcions auxiliars

function llistaHotels() {

    let i, llista;
    
    llista = "<small><b>Hotels registrats:</b><br><ul>";
    for (i=0; i<arrayHotels.length; i++) {

        llista += "<li>" +arrayHotels[i].nom+ "</li>";
    }
    llista += "</ul></small>";
    
    escriuDada ("llista", llista);
    return llista;
    
}

function buidarFormulari(){

    escriuDadaValue("nomModificar", "");
    escriuDadaValue("1", "");
    escriuDadaValue("2", "");
    escriuDadaValue("3", "");
    escriuDadaValue("nomModificar", "");
    escriuDadaValue("4", "");
    escriuDadaValue("5", "");
    escriuDadaValue("6", "");

}

function botonsCrear() {

    document.getElementById("baixaHotelBoto").disabled = true;
    document.getElementById("veureHotelBoto").disabled = true;
    document.getElementById("modificarHotelBoto").disabled = true;

}

function botonsCreat() {

    document.getElementById("baixaHotelBoto").disabled = false;
    document.getElementById("veureHotelBoto").disabled = false;
    document.getElementById("modificarHotelBoto").disabled = false;

}

function crearHotel() {

    escriuDada("avis","");
          
    let nom = llegeixDada("nomModificar");
    let numHabitacions = llegeixDada("1");
    let numPisos = llegeixDada("2");
    let superficie = llegeixDada("3");

    let nouHotel = new Hotel(nom, numHabitacions, numPisos, superficie);
    arrayHotels.push(nouHotel);
    
    escriuDada ("avis","S'ha registrat amb èxit el nou hotel <b>"+nouHotel.nom+ "</b>" +nouHotel.toString());

    document.getElementById("dadesCrear").style.display = "none";
    document.getElementById("crearHotelBoto").value = "Crear Hotel";
    botonsCreat();
    buidarFormulari();
    llistaHotels();
    posicio = arrayHotels.indexOf(nouHotel);

}

function validacioCrearHotel() {

    escriuDada ("avis","");

    let validacioNum = true; let i;
    for (i=1; i<=3; i++){

        dadaBona(i);
        contingut = llegeixDada(i);
        Number(i);

        if (contingut = "" || contingut <=0 || isNaN(contingut)){

            validacioNum = false;
            dadaDolenta(i);
            escriuDadaValue(i, "");
        }
    }
    
    if (validacioNum == true) {
       
        crearHotel();
    }else{

        escriuDada("avis","<strong>Escriviu les dades correctament</strong>");
    }

}

function donarDeBaixaHotel() {

    escriuDada("avis","");

    let registrat = arrayHotels[posicio];    
    confirm ("Esteu segurs que voleu esborrar l'hotel " +registrat.nom+ "?");
    let nomHotelBaixa = registrat.nom;

    arrayHotels.splice(posicio, 1);
    escriuDada("avis", "L'hotel <b>" +nomHotelBaixa+ "</b> ha estat esborrat satisfactòriament.<br><br> Creeu un altre hotel o bé introduïu un altre nom.")
    
    botonsCrear();
    llistaHotels();
    posicio = posicio-1;
    
}

function veureHotel() {
    
    escriuDada("avis","");
    let registrat = arrayHotels[posicio];

    escriuDada("avis", "L'hotel <b>" +registrat.nom+ "</b> té les següents característiques :" +registrat.toString()+ "<br>" +registrat.calcularManteniment());

}    

function modificarHotel() {

    escriuDada("avis","");
    escriuDadaValue("nomInici", "");
    let registrat = arrayHotels[posicio];
    
    registrat.setNom(llegeixDada("nomModificar"));
    registrat.setHabitacions(llegeixDada("4"));
    registrat.setPisos(llegeixDada("5"));
    registrat.setSuperficie(llegeixDada("6"));

    escriuDada("avis", "L'hotel <b>" +registrat.nom+ "</b> té les següents noves característiques :" +registrat.toString());

    document.getElementById("dadesModificar").style.display = "none";
    document.getElementById("modificarHotelBoto").value = "Modificar Hotel";
    buidarFormulari();
    llistaHotels();
    
}

function validacioModificarHotel() {

    escriuDada ("avis","");

    let validacioNum = true; let i;
    for (i=4; i<=6; i++){

        dadaBona(i);
        contingut = llegeixDada(i);
        Number(i);

        if (contingut = "" || contingut <=0 || isNaN(contingut)){

            validacioNum = false;
            dadaDolenta(i);
            escriuDadaValue(i, "");
        }
    }
    
    let nomModificar = llegeixDada("nomModificar");
    let validacioNom = false;
    if (nomModificar == ""){

        validacioNom;
        dadaDolenta("nomModificar");
        escriuDada("avis", "<b>Heu d'introduir un nom d'hotel</b>");
        
    }else{

        validacioNom = true;
        dadaBona("nomModificar");
    }
    
    if (validacioNom == true && validacioNum == true) {
       
        modificarHotel();
    }else{

        escriuDada("avis","<strong>Escriviu les dades correctament</strong>");
    }

}

function donarDeBaixaHotel() {

    escriuDada("avis","");

    let registrat = arrayHotels[posicio];    
    confirm ("Esteu segurs que voleu esborrar l'hotel " +registrat.nom+ "?");
    let nomHotelBaixa = registrat.nom;

    arrayHotels.splice(posicio, 1);
    escriuDada("avis", "L'hotel <b>" +nomHotelBaixa+ "</b> ha estat esborrat satisfactòriament.<br><br> Creeu un altre hotel o bé introduïu un altre nom.")
    
    botonsCrear();
    llistaHotels();
    posicio = posicio-1;
    
}
function sortir() {

    escriuDada("avis","<b>Merci i a reveure!</b>");
    escriuDadaValue("nomInici","");
    
}

function inici() {

    let nomInici = llegeixDada("nomInici");
    
    let continuar = false;
    while (nomInici == ""){

        dadaDolenta("nomInici");
        escriuDada("avis", "<b>Heu d'introduir un nom d'hotel</b>");
        nomInici = prompt ("Introduïu un nom d'hotel");

        if(nomInici !== ""){
            continuar = true;
            escriuDadaValue("nomInici", nomInici);
            dadaBona("nomInici");
            escriuDada("avis", "");
        }    
    }
              
    let registrat = arrayHotels.find(registrat => registrat.nom == nomInici);
    let indexHotel = arrayHotels.indexOf(registrat);
    
    if (indexHotel ==-1){

        escriuDada("avis", "L'hotel <b>" +nomInici+ ", no</b> es troba registrat.<br><br> Cliqueu a l'opció <b>'Crear Hotel'</b> per registrar-lo.");
        document.getElementById("crearHotelBoto").disabled = false;
        escriuDadaValue("nomCrear", nomInici);
        escriuDadaValue("nomModificar", nomInici);
        botonsCrear();

    }else{

        escriuDada("avis", "l'hotel <b>" +nomInici+ "</b> està registrat. Cliqueu l'opció que desitjeu.");
        escriuDadaValue("nomModificar", registrat.nom);
        botonsCreat();
        
    }

}
