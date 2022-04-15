

function f11(){

    let i, j, llista =  "<b>Agenda complerta: </b><br>";

    for (i=0; i<agenda.length; i++) {

        llista += "<ul><b>" +agenda[i].categoria+ ":</b><br>";

        for (j=0; j<agenda[i].contactos[j].length; j++) {

            llista += "<li> contacte: " +agenda[i].contactos[j].contacto+ "</li>";
            llista += "<li> número de Telèfon: " +agenda[i].contactos[j].numeroTelefono+ "</li>";
            llista += "<li> pàgina web: " +agenda[i].contactos[j].web+ "</li>";
        }
        llista += "<br></b></ul>"
    }

    escriuDada("resultat",llista);



}