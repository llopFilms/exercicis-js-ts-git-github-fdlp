
omplirBanc();
let posicio = 0;
console.table(arrayClients);
console.table(arrayComptes);

function llistaBanc() {

    let i, j, llista;
    
    llista = "<small><b>Clients registrats, #compte i saldo:</b><br><ul>";
    for (i=0; i<arrayClients.length; i++) {

        llista += "<li><b>" +arrayClients[i].nom+ " " + arrayClients[i].cognom+ ":</b> ";

        for (j=0; j<arrayClients[i].comptes.length; j++) {

            llista += " #"+arrayClients[i].comptes[j].numCompte+ ", " + arrayClients[i].comptes[j].saldo+ "€.";
        }
    }
    llista += "</li></ul></small>";

    escriuDada ("llista", llista);
    
}

llistaBanc();

function esborrarCamps() {

    escriuDadaValue("nomCrear", "");
    escriuDadaValue("cognomCrear", "");
    escriuDadaValue("numCompteEliminar", "");
    escriuDadaValue("numCompteIngres", "");
    escriuDadaValue("quantitatIngres", "");
    escriuDadaValue("numCompteRetir", "");
    escriuDadaValue("quantitatRetir", "");

}

function recollirDivs() {

    recollir("numCompteEliminar");
    recollir("numCompteIngressar");
    recollir("numCompteRetirar");

}

function botonsCrearClient() {

    estatBoto("crearClient",false);
    estatBoto("eliminarClient",true);
    estatBoto("crearCompte", true);
    estatBoto("veureCompte",true);
    estatBoto("eliminarCompte",true);
    estatBoto("ingressar", true);
    estatBoto("retirar", true);

}

function botonsGestions() {

    estatBoto("crearClient",true);
    estatBoto("eliminarClient",false);
    estatBoto("crearCompte", false);
    estatBoto("veureCompte",false);
    estatBoto("eliminarCompte",false);
    estatBoto("ingressar", false);
    estatBoto("retirar", false);

}

function botonsCrearCompte() {

    estatBoto("crearClient",true);
    estatBoto("eliminarClient",false);
    estatBoto("crearCompte", false);
    estatBoto("veureCompte",true);
    estatBoto("eliminarCompte",true);
    estatBoto("ingressar", true);
    estatBoto("retirar", true);
}

function crearClient() {

    escriuDada("avis","");
    
    let dni = llegeixDada("dniCrear");

    let nom = llegeixDada("nomCrear");
    while (validacioIndPrompt(nom, "nomCrear") == false) {

        nom = prompt ("Introduïu un nom vàlid:");
        validacioIndPrompt(nom, "nomCrear");        
    }

    let cognom = llegeixDada("cognomCrear");
    while (validacioIndPrompt(cognom, "cognomCrear") == false) {

        cognom = prompt ("Introduïu un cognom vàlid:");
        validacioIndPrompt(cognom, "cognomCrear");
    }

    let nouClient = new Client(dni, nom, cognom);
    arrayClients.push(nouClient);

    escriuDada("avis", "Registre de client a nom de <b>"+nom+" "+cognom+"</b> registrat satisfactòriament. Ara podeu crear un <b>número de compte</b>.");
    recollirDivBoto("dadesCrearClient","crearClient","Crear Client");
    esborrarCamps();
    botonsCrearCompte();
    llistaBanc();

    posicio = arrayClients.length-1;
    
}

function eliminarClient() {

    escriuDada("avis","");
    recollirDivs();
    esborrarCamps();

    let registrat = arrayClients[posicio];
    confirm ("Esteu segurs que voleu esborrar el client " +registrat.nom+ " " +registrat.cognom+ "?");

    let i=0; let condicio = false;

    let llista = "El client <b>" +registrat.nom+ " " +registrat.cognom+ "</b> té comptes amb <b>saldo positiu.</b><ul>"; 
    while (i<registrat.comptes.length) {

        if (registrat.comptes[i].saldo >0) {

            llista += "<li>El número de compte <b>#"+registrat.comptes[i].numCompte+ " </b>té un saldo positiu de <b> " +registrat.comptes[i].saldo+ " €.</b></li>";
            condicio = true;
        }
    i++;
    }
    llista += "</ul>Sisplau, deixeu els comptes indicats amb <b>saldo 0€.</b>";

    if (condicio == true){

        escriuDada("avis", llista);
        botonsGestions();
        estatBoto("eliminarClient",true);

    }else{

        arrayClients.splice(posicio, 1);
        escriuDada("avis", "El client <b>" +registrat.nom+ " " +registrat.cognom+ "</b> ha estat eliminat satisfactòriament.");
        botonsCrearClient();
    }
    
    console.log(registrat, condicio, llista);
    llistaBanc();

    posicio = posicio;
    
}

function crearCompte() {

    escriuDada("avis","");
    recollirDivs();
    esborrarCamps();

    let registrat = arrayClients[posicio];
    
    let numCompteNou = Math.floor((Math.random()*100)+ 1);
    while (arrayComptes.includes(numCompteNou)) {

        numCompteNou = Math.floor((Math.random()*100)+ 1);
    }
    arrayComptes.push(numCompteNou);
    
    let nouCompte = new Compte (numCompteNou, 0);
    registrat.comptes.push(nouCompte);

    let indexCompteNou = registrat.comptes.findIndex(element => element.numCompte === numCompteNou);

    escriuDada("avis", "Nou compte corrent número <b>#" +registrat.comptes[indexCompteNou].numCompte+ "</b>, creat a nom de <b>"+registrat.nom+ " " +registrat.cognom+ "</b>. Disposa d'un saldo incial de: <b>" +registrat.comptes[indexCompteNou].saldo+ " €.");
    
    botonsGestions();
    llistaBanc();
    posicio = posicio;
    
}

function mostrarComptes() {

    escriuDada("avis","");
    recollirDivs();
    esborrarCamps();

    let registrat = arrayClients[posicio];
    
    let i=0;
    let llistaComptes = "Sr./Sra. <b>" +registrat.nom+ " " +registrat.cognom+ ", </b>disposeu dels següents comptes:<ul>";
        while (i<registrat.comptes.length) {

                llistaComptes += "<li><b>Número de compte i saldo</b>: " +registrat.comptes[i]+ "</li>";
                i++;
        }
    llistaComptes += "</ul>";
    console.table(arrayComptes);

    escriuDada ("avis", llistaComptes);

}   

function eliminarCompte () {

    escriuDada("avis","");
    recollirDivs();
    esborrarCamps();
    mostrarComptes();
    escriuDadaValue("numCompteEli", mostrarComptes());
    document.getElementById("numCompteEliminar").style.display = "block";

}   
    
function eliminarCompte2() {

    let registrat = arrayClients[posicio];

    let numCompteEliminar = Number(llegeixDada("numCompteEli"));
    let continuar = validacionumIndPrompt(numCompteEliminar,"numCompteEli");
    while (continuar == false) {

        numCompteEliminar = Number(prompt ("Introduïu un número de compte vàlid:"));

        if (validacionumIndPrompt(numCompteEliminar,"numCompteEli")) {

            continuar = true;
        }
    }    
    
    let indexNumCompteEliminar = registrat.comptes.findIndex (element => element.numCompte === numCompteEliminar);

    if (indexNumCompteEliminar !=-1) {    
    
        if (registrat.comptes[indexNumCompteEliminar].saldo !=0){

            escriuDada("avis","El saldo dels compte <b>#" +numCompteEliminar+ ", NO</b> és <b>0€</b>. Buideu el compte primer.");
        }else{
        
            confirm ("Esteu segurs que voleu eliminar el compte #" +numCompteEliminar+" ?");
            registrat.comptes.splice(indexNumCompteEliminar, 1);
            escriuDada ("avis", "El compte número <b>#" +numCompteEliminar+ "</b> ha estat eliminat satisfactòriament.");
        }

    }else{
        escriuDada("avis","<b>Aquest compte no existeix</b>");
    }

    recollir("numCompteEliminar");
    esborrarCamps();
    llistaBanc();

    posicio = posicio;
}

function ingressar() {

    escriuDada("avis","");
    recollirDivs();
    esborrarCamps();
    mostrarComptes();
    document.getElementById("numCompteIngressar").style.display = "block";
        
}

function ingressar2(){

    let registrat = arrayClients[posicio];
    
    let numCompteIngres = Number(llegeixDada("numCompteIngres"));
    let continuar = validacionumIndPrompt(numCompteIngres,"numCompteIngres");
    while (continuar == false) {

        numCompteIngres = Number(prompt ("Introduïu un número de compte vàlid:"));

        if (validacionumIndPrompt(numCompteIngres,"numCompteIngres")) {

            continuar = true;
        }
    }
    
    let quantitat = Number(llegeixDada("quantitatIngres"));
    continuar = validacionumIndPrompt(quantitat,"quantitatIngres");
    while (continuar == false) {

        quantitat = Number(prompt ("Introduïu una quantitat vàlida:"));
        if (validacionumIndPrompt(quantitat,"quantitatIngres") == true) {

            continuar = true;
        }
    }

    let indexNumCompteIngres = registrat.comptes.findIndex (element => element.numCompte === numCompteIngres);
    let saldo;

    if (indexNumCompteIngres !=-1) {
    
        saldo = registrat.comptes[indexNumCompteIngres].ingres(quantitat);
    
        escriuDada("avis", "La quantitat <b>" +quantitat+ " €</b> s'ha ingressat satisfactòriament al compte <b>#" +numCompteIngres+ "</b>. El saldo disponible és de<b> " +saldo+ "€. </b>");

    }else{
        escriuDada("avis","<b>Aquest compte no existeix</b>");
    }

    recollir("numCompteIngressar");
    esborrarCamps();
    llistaBanc();

    posicio = posicio;

}

function retirar(){

    escriuDada("avis","");
    recollirDivs();
    esborrarCamps();
    mostrarComptes();
    document.getElementById("numCompteRetirar").style.display = "block";

}

function retirar2(){

    let registrat = arrayClients[posicio];

    let numCompteRetir = Number(llegeixDada("numCompteRetir"));
    let continuar = validacionumIndPrompt(numCompteRetir, "numCompteRetir");
    while (continuar == false) {

        numCompteRetir = Number(prompt ("Introduïu un número de compte vàlid:"));
        if (validacionumIndPrompt(numCompteRetir, "numCompteRetir") == true) {

            continuar = true;
            
        }
    }
    
    let quantitat = Number(llegeixDada("quantitatRetir"));
    continuar = validacionumIndPrompt(quantitat, "quantitatRetir");
    while (continuar == false) {

        quantitat = Number(prompt ("Introduïu una quantitat vàlida:"));
        if (validacionumIndPrompt(quantitat, "quantitatRetir") == true) {

            continuar = true;
        }
    }

    let indexNumCompteRetir = registrat.comptes.findIndex (element => element.numCompte === numCompteRetir);
    let saldo;

    if (indexNumCompteRetir !=-1){
    
        saldo = registrat.comptes[indexNumCompteRetir].retirada(quantitat);
    
        escriuDada("avis", "La quantitat <b>" +quantitat+ " €</b> s'ha retirat satisfactòriament del compte <b>#" +numCompteRetir+ "</b>. El saldo disponible és de<b> " +saldo+ "€. </b>");

    }else{
        escriuDada("avis","<b>Aquest compte no existeix</b>");
    }

    recollir("numCompteRetirar");
    esborrarCamps();
    llistaBanc();

    posicio = posicio;

}

function sortir() {

    escriuDada("avis","<b>Merci i adéu siau!</b>");
    recollirDivs();
    esborrarCamps();
    llistaBanc();
    
}

function inici(){

    let dniInici = llegeixDada("dniInici");
    //Separació lletra, número i posar a majúscula
    let numDni = dniInici.substring(0, dniInici.length-1);
    let lletra = dniInici.substring(dniInici.length-1);
    lletra = lletra.toUpperCase();
    dniInici = numDni+lletra;

    let registrat = arrayClients.find(element => element.dni == dniInici);
    let indexClient = arrayClients.indexOf(registrat);
    
    if (indexClient !== -1) {

        escriuDada("avis", "El DNI número <b>" +dniInici+ " </b> està registrat amb les següents dades: <br>" +registrat+ ". <br><br><b>Cliqueu a l'opció que desitgeu.<b>");
        escriuDadaValue("dniCrear", dniInici);
        botonsGestions();

    }else{

        escriuDada("avis", "El DNI número <b>" +dniInici+ ", NO </b> està associat a cap client.<br><br><b>Voleu crear un registre de client?</b>");
        escriuDadaValue("dniCrear", dniInici);
        botonsCrearClient();
    }

}

