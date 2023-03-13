

class Hotel {

    //Creem classe Hotel
    constructor (nom, habitacions, pisos, superficie) {

        this._nom = nom;
        this._habitacions = habitacions;
        this._pisos = pisos;
        this._superficie = superficie;
        
    }

    //Creem getters per cada atribut
    get nom () { return this._nom; }
    get habitacions () { return this._habitacions; }
    get pisos () { return this._pisos; }
    get superficie () { return this._superficie; }

    //Creem setters per cada atribut
    set nom(nom) { this._nom = nom; }
    set habitacions(habitacions) { this._habitacions = habitacions; }
    set pisos(pisos) { this._pisos = pisos; }
    set superficie(superficie) { this._superficie = superficie; }

    //Funció manteniment
    calcularManteniment() {

        let numPersonal = this._habitacions / 20;
        numPersonal = Math.ceil(numPersonal);
        let costPersonal = numPersonal * 1500;
        let missatge = "El número de persones de manteniment per aquest hotel és de <b>" +numPersonal+ "</b>, i el cost total del manteniment és de <b>"+costPersonal+"</b> euros."

        return missatge
    }

    //Funció toString
    toString() {

        let dadesHotel = "<br><br>";
        dadesHotel += "Les dades de l'hotel són:<br><ul>"
        dadesHotel += "<li><b>Nom:</b> " +this._nom+ "</li>";
        dadesHotel += "<li><b>Habitacions:</b> " +this._habitacions+ "</li>";
        dadesHotel += "<li><b>Pisos:</b> " +this._pisos+ "</li>";
        dadesHotel += "<li><b>Superfície:</b> " +this._superficie+ "</li>";
        
        return dadesHotel;
    }

}
