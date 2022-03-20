

let posicio = 0;
console.table(arrayClients);
console.table(arrayComptes);
escriuDadaValue("dniInici","43697671V")

function llistaBanc() {

    let i, j, llista;
    
    llista = "<small><b>Clients registrats, #compte i saldo:</b><br><ul>";
    for (i=0; i<arrayClients.length; i++) {

        llista += "<li><b>" +arrayClients[i].getNom()+ " " + arrayClients[i].getCognom()+ ":</b> ";

        for (j=0; j<arrayClients[i].comptes.length; j++) {

            llista += "#"+arrayClients[i].comptes[j].numCompte+ ", " + arrayClients[i].comptes[j].saldo+ "€.</li>";
        }
    }
    llista += "</ul></small>";

    escriuDada ("llista", llista);
    return llista;
    
}

function botonsCrear() {

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

function crearClient() {

    escriuDada("avis","");
    
    let dni = llegeixDada("dniCrear");
    let nom  = llegeixDada("nomCrear");
    let cognom = llegeixDada("cognomCrear");

    let nouClient = new Client(dni, nom, cognom);
    arrayClients.push(nouClient);
 
    escriuDada("avis", "Registre de client a nom de <b>"+nom+" "+cognom+"</b> registrat satisfactòriament.");
    recollir("dadesCrearClient","crearClient","Crear Client");
    botonsGestions();
    llistaBanc();

    posicio = arrayClients.length-1;
    console.log(posicio);
}

function eliminarClient() {

    escriuDada("avis","");

    let registrat = arrayClients[posicio];
    confirm ("Esteu segurs que voleu esborrar el client " +registrat.getNom()+ " " +registrat.getCognom()+ "?");
    let nomClient = registrat.getNom()+ " " +registrat.getCognom();

    arrayClients.splice(posicio, 1);
    escriuDada("avis", "El client <b>" +nomClient+ "</b> ha estat eliminat satisfactòriament.");

    botonsCrear();
    llistaBanc();

    posicio = posicio;
    console.log(posicio);
}

function crearCompte() {

    escriuDada("avis","");

    let registrat = arrayClients[posicio];
    let numCompteNou = Math.floor((Math.random()*100)+ 1);
    let i;

    while (arrayComptes.includes(numCompteNou)) {

        numCompteNou = Math.floor((Math.random()*100)+ 1);
    }
    arrayComptes.push(numCompteNou);
    
    let nouCompte = new Compte (numCompteNou, 0);
    registrat.comptes.push(nouCompte);
   
    let indexCompteNou = registrat.comptes.findIndex(element => element.numCompte === numCompteNou);

    escriuDada("avis", "Nou compte corrent número <b>#" +registrat.comptes[indexCompteNou].numCompte+ "</b>, creat a nom de <b>"+registrat.getNom()+ " " +registrat.getCognom()+ "</b>. Disposa d'un saldo incial de: <b>" +registrat.comptes[indexCompteNou].saldo+ " €.");
    
    llistaBanc();
    posicio = posicio;
}

function veureCompte() {

    escriuDada("avis","");
    let registrat = arrayClients[posicio];
    let dniClient = registrat.dni;

    //Alterntiva amb loop 2x(while-if)
    /*let i=0, j;

    llistaClient = "<b>Dades comptes client: </b><ul>";
    while (i<arrayClients.length && i<=posicio) {
    j=0;

        if (dniClient == registrat.dni) {

            llistaClient += "<li><b>Nom: </b>" +registrat.nom+ "</li>";
            llistaClient += "<li><b>Cognom: </b>" +registrat.cognom+ "</li>";
            llistaClient += "<li><b>Dni: </b>" +registrat.dni+ "</li><br>";
        }
            
        while (j<registrat.comptes.length) {

            if (dniClient == registrat.dni) {

                llistaClient += "<li><b>Número de Compte: </b>#" +registrat.comptes[j].numCompte+ "</li>";
                llistaClient += "<li><b>Saldo disponible: </b>" +registrat.comptes[j].saldo+ " €</li><br>";
            }
        j++;
        }
        llistaClient += "</ul>";
    i++;
    }*/

    //Alternativa amb toString()
    let llistaClient2, j;
    i=0;
    llistaClient2 = "<b>Dades comptes client: </b><ul>" +registrat.toString()+ "<br><br>";
    while (i<registrat.comptes.length) {
    
        if (dniClient == registrat.dni) {

            llistaClient2 += "<li><b>Número de Compte i saldo disponible: </b>" +registrat.comptes[i].toString()+ "</li>";
        }
    i++;
    }
    llistaClient2 += "</ul>";
     
    escriuDada ("avis",llistaClient2);
    llistaBanc();
    posicio = posicio;

}

function eliminarCompte() {

    escriuDada("avis","");
    let registrat = arrayClients[posicio];
   
    let i=0, llistaComptes, llistaComptes2;
    let dniClient = registrat.dni;

    //let numComptes = registrat.comptes.length;
    //let saldo = registrat.comptes.saldo;
   
    //Alterntiva per  while
    /*llistaComptes = "Sr./Sra. <b>"+registrat.nom+ " " +registrat.cognom+ ", </b>disposeu dels següents comptes:<ul>";
    while (i<registrat.comptes.length) {
 
        if (dniClient == registrat.dni) {

            llistaComptes += "<li><b>Número de Compte: </b>#" +registrat.comptes[i].numCompte+ "</li>";
            llistaComptes += "<li><b>Saldo disponible: </b>" +registrat.comptes[i].saldo+ " €</li><br>";
        }
    i++;
    }
    llistaComptes2 += "</ul>";

    i=0;*/
    let numCompte, saldo;
    llistaComptes2 = "Sr./Sra. <b>"+registrat.getNom()+ " " +registrat.getCognom()+ ", </b>disposeu dels següents comptes:<ul>";
    while (i<registrat.comptes.length) {
 
        if (dniClient == registrat.dni) {

            llistaComptes2 += "<li><b>Número de compte i saldo</b>: " +registrat.comptes[i].toString()+ "</li>";
            numCompte = registrat.comptes[i].numCompte;
            saldo = registrat.comptes[i].saldo;
        }
    i++;
    }
    llistaComptes += "</ul>";

    escriuDada ("avis", llistaComptes2);
    confirm ("Esteu segurs que voleu eliminar el compte " +numCompte+" ?");
    let indexNumCompte = registrat.comptes.findIndex (element => element.numCompte === numCompte);
      
    if (saldo !=0){

        escriuDada("avis","El saldo dels compte <b>" +numCompte+ "</b>no és 0. Buideu el compte primer.");
    }else{
    
        registrat.comptes.splice(indexNumCompte, 1);
        escriuDada ("avis", "El compte número <b>#" +numCompte+ "</b> ha estat eliminat satisfactòriament.");
    }

    llistaBanc();
    posicio = posicio;
}

function ingressar(){

    escriuDada("avis","");
    let registrat = arrayClients[posicio];
    
    let quantitat = Number(prompt("Quina quantitat vols ingressar?"));
    let saldo = registrat.comptes[0].ingres(quantitat);
    
    escriuDada("avis", "La quantitat <b>" +quantitat+ " €</b> s'ha ingressat satisfactòriament. El saldo disponble és de<b> " +saldo+ "€ </b>");

    llistaBanc();
    posicio = posicio;

}

function retirar(){

    escriuDada("avis","");
    let registrat = arrayClients[posicio];
    
    
    let quantitat = Number(prompt("Quina quantitat vols retirar?"));
    let saldo = registrat.comptes[0].retirada(quantitat);
    escriuDada("avis", "La quantitat <b>" +quantitat+ " €</b> s'ha retirat satisfactòriament. El saldo disponble és de<b> "+saldo+ "€ </b>.");
 
    llistaBanc();
    posicio = posicio;

}

function sortir() {

    escriuDada("avis","<b>Merci i adéu siau!</b>");

    llistaBanc();
    posicio = posicio;

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
    console.log(registrat,indexClient);

    if (indexClient !== -1) {

        escriuDada("avis", "El DNI número <b>" +dniInici+ " </b> està registrat amb les següents dades: <br>" +registrat.toString()+ ". <br><br><b>Cliqueu a l'opció que desitgeu.<b>");
        escriuDadaValue("dniCrear", dniInici);
        botonsGestions();

    }else{

        escriuDada("avis", "El DNI número <b>" +dniInici+ ", NO </b> està associat a cap client.<br><br><b>Voleu crear un registre de client?</b>");
        escriuDadaValue("dniCrear", dniInici);
        botonsCrear();
    }
  
}

