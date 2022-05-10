

function f11(){

    let i, j, llista =  "<b>Agenda complerta: </b><br>";

    for (i=0; i<agenda.length; i++) {

        llista += "<ul><b>" +agenda[i].categoria+ ":</b><br>";

        for (j=0; j<agenda[i].contactos.length; j++) {

            llista += "<li> contacte: " +agenda[i].contactos[j].contacto+ "</li>";
            llista += "<li> número de Telèfon: " +agenda[i].contactos[j].numeroTelefono+ "</li>";
            llista += "<li> pàgina web: " +agenda[i].contactos[j].web+ "</li><br>";
        }
        llista += "</ul>";
    }

    escriuDada("resultat", llista);

    let llista2 = agenda.at(0);
    let llista3 = agenda.at(1);
    console.table(llista2);
    console.table(llista3);
}

function f12(){

    let i, j, llista =  "<b>Contacte Emergencias Médicas: </b><br>";

    /* for (i=0; i<agenda.length; i++) {

        for (j=0; j<agenda[i].contactos.length; j++) {

            if (agenda[i].contactos[j].contacto == "Emergencias Médicas") {

                llista += "<ul>";
                llista += "<li> contacte: " +agenda[i].contactos[j].contacto+ "</li>";
                llista += "<li> número de Telèfon: " +agenda[i].contactos[j].numeroTelefono+ "</li>";
                llista += "<li> pàgina web: " +agenda[i].contactos[j].web+ "</li><br>";
                llista += "</ul>";
            }
        }
    } */

    i=0; let trobat = false;
    while (i<agenda.length && trobat == false) {

        j=0;
        while (j<agenda[i].contactos.length && trobat == false) {

            if (agenda[i].contactos[j].contacto == "Emergencias Médicas") {
                
                llista += "<ul>";
                llista += "<li> contacte: " +agenda[i].contactos[j].contacto+ "</li>";
                llista += "<li> número de Telèfon: " +agenda[i].contactos[j].numeroTelefono+ "</li>";
                llista += "<li> pàgina web: " +agenda[i].contactos[j].web+ "</li><br>";
                llista += "</ul>";
                trobat = true;
            }
        j++;
        }
    i++;
    }

    escriuDada("resultat", llista);

    let index = agenda[0].contactos.findIndex(element => element.contacto == "Emergencias Médicas");
    let llista2 = agenda[0].contactos.at(index);
    console.log("agenda[0].contactos[index] --> index =",index);
    console.table(llista2);
}

function f13(){

    let i, j, llista =  "<b>Categoria Cancelación tarjetas de crédito: </b>";

    /* for (i=0; i<agenda.length; i++) {

        if (agenda[i].categoria == "Tarjetas de Crédito (cancelación)") {
            llista += "<ul><b>" +agenda[i].categoria+ "</b>";

            for (j=0; j<agenda[i].contactos.length; j++) {

                llista += "<li> contacte: " +agenda[i].contactos[j].contacto+ "</li>";
                llista += "<li> número de Telèfon: " +agenda[i].contactos[j].numeroTelefono+ "</li>";
                llista += "<li> pàgina web: " +agenda[i].contactos[j].web+ "</li><br>";
            }
            llista += "</ul>";
        }
    } */

    i=0; let trobat = false;
    while (i<agenda.length && trobat == false) {

        if (agenda[i].categoria == "Tarjetas de Crédito (cancelación)") {
            llista += "<ul><b>" +agenda[i].categoria+ "</b>";
            
            for (j=0; j<agenda[i].contactos.length; j++) {

                llista += "<li> contacte: " +agenda[i].contactos[j].contacto+ "</li>";
                llista += "<li> número de Telèfon: " +agenda[i].contactos[j].numeroTelefono+ "</li>";
                llista += "<li> pàgina web: " +agenda[i].contactos[j].web+ "</li><br>";
            }
            llista += "</ul>";
            trobat = true;
        }
    i++;
    }

    escriuDada("resultat", llista);

    let index = agenda.findIndex(element => element.categoria == "Tarjetas de Crédito (cancelación)");
    console.log("agenda[index] --> index =",index);
    let llista2 = agenda.at(index);
    console.table(llista2);
}

function f21(){

    let i, j, llista =  "<b>Contacte Bombreos: </b>";

    /* for (i=0; i<agenda.length; i++) {

        for (j=0; j<agenda[i].contactos.length; j++) {

            if (agenda[i].contactos[j].contacto == "Bomberos") {

                llista += "<ul>";
                llista += "<li> contacte: " +agenda[i].contactos[j].contacto+ "</li>";
                llista += "<li> número de Telèfon: " +agenda[i].contactos[j].numeroTelefono+ "</li>";
                llista += "<li> pàgina web: " +agenda[i].contactos[j].web+ "</li><br>";
                llista += "</ul>";
            }
        }
    } */

    i=0; let trobat = false;
    while (i<agenda.length && trobat == false) {

        j=0;
        while (j<agenda[i].contactos.length && trobat == false) {

            if (agenda[i].contactos[j].contacto == "Bomberos") {

                llista += "<ul>";
                llista += "<li> contacte: " +agenda[i].contactos[j].contacto+ "</li>";
                llista += "<li> número de Telèfon: " +agenda[i].contactos[j].numeroTelefono+ "</li>";
                llista += "<li> pàgina web: " +agenda[i].contactos[j].web+ "</li><br>";
                llista += "</ul>";
                trobat = true;
            }
        j++;    
        }
    i++;
    }

    escriuDada("resultat", llista);

    let index = agenda.findIndex(element => element.categoria == "Emergencias");
    let bomberos = agenda[index].contactos.find(element => element.contacto == "Bomberos");
    console.table(bomberos);

}

function f22(){

    let i, j, llista =  "<b>Web de la Creu roja: </b>";

    /* for (i=0; i<agenda.length; i++) {

        for (j=0; j<agenda[i].contactos.length; j++) {

            if (agenda[i].contactos[j].contacto == "Cruz Roja") {

                llista += "<ul>";
                llista += "<li> pàgina web: " +agenda[i].contactos[j].web+ "</li><br>";
                llista += "</ul>";
            }
        }
    } */

    i=0; let trobat = false;
    while (i<agenda.length && trobat == false) {

        j=0;
        while (j<agenda[i].contactos.length && trobat == false) {

            if (agenda[i].contactos[j].contacto == "Cruz Roja") {

                llista += "<ul>";
                llista += "<li> pàgina web: " +agenda[i].contactos[j].web+ "</li><br>";
                llista += "</ul>";
                trobat = true;
            }
        j++;
        }
    i++;
    }

    escriuDada("resultat", llista);

    let index = agenda.findIndex(element => element.categoria == "Emergencias");
    let registrat = agenda[index].contactos.find(element => element.contacto == "Cruz Roja");
    let llista2 = registrat.web
    console.log("Pàgina web: "+llista2);
}

function f23(){

    let i, j, llista =  "<b>Telèfon i web de MasterCard: </b>";

    /* for (i=0; i<agenda.length; i++) {

        for (j=0; j<agenda[i].contactos.length; j++) {

            if (agenda[i].contactos[j].contacto == "Mastercard") {

            llista += "<ul>";
            llista += "<li> número de Telèfon: " +agenda[i].contactos[j].numeroTelefono+ "</li>";
            llista += "<li> pàgina web: " +agenda[i].contactos[j].web+ "</li><br>";
            llista += "</ul>";
            }
        }
    } */

    i=0; let trobat = false;
    while (i<agenda.length && trobat == false) {

        j=0;
        while (j<agenda[i].contactos.length && trobat == false) {

            if (agenda[i].contactos[j].contacto == "Mastercard") {

            llista += "<ul>";
            llista += "<li> número de Telèfon: " +agenda[i].contactos[j].numeroTelefono+ "</li>";
            llista += "<li> pàgina web: " +agenda[i].contactos[j].web+ "</li><br>";
            llista += "</ul>";
            trobat = true;
            }
        j++
        }
    i++;
    }
    escriuDada("resultat", llista);

    let index = agenda.findIndex(element => element.categoria == "Tarjetas de Crédito (cancelación)");
    let registrat = agenda[index].contactos.find(element => element.contacto == "Mastercard");
    let llista2 = registrat.numeroTelefono;
    let llista3 = registrat.web;
    console.log("Número de telèfon: "+llista2, "\nPàgina web: "+llista3);
}