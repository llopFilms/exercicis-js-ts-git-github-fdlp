

class Contacto {

    constructor(contacto, numeroTelefono, web) {
        this.contacto = contacto;
        this.numeroTelefono = numeroTelefono;
        this.web = web; 

    }

    toString() {

        let objecte = "<b>Objecte to String():</b><br><ul>";
        objecte += "<li><b>Contacte: </b>" +this.contacto+ "<br></li>";
        objecte += "<li><b>Telèfon: </b>" +this.numeroTelefono+ "<br></li>";
        objecte += "<li><b>Pàgina web: </b>" +this.web+ "</li></ul>";

        return objecte;

    }
}