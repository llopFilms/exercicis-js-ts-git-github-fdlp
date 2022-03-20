

class Categoria {

    constructor (categoria) {
        this.categoria = categoria;
        this.contactos = [];
    } 

    /*afegirContacte(nouContacto) {
        contactos.push(nouContacto);
    }*/

    afegirContacte(contacto, numeroTelefono, web) {
        let nouContacto = new Contacto (contacto, numeroTelefono, web);
        this.contactos.push(nouContacto);
        return nouContacto;
    }

}



