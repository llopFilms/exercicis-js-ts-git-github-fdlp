

class Hotel {

    //Creem classe Hotel
    constructor (nom, habitacions, pisos, superficie) {

        this.nom = nom;
        this.habitacions = habitacions;
        this.pisos = pisos;
        this.superficie = superficie;
        
    }

    //Creem getters per cada atribut
    get getNom () { return this.nom; }
    get getHabitacions () { return this.habitacions; }
    get getPisos () { return this.pisos; }
    get getSuperficie () { return this.superficie; }

    //Creem setters per cada atribut
    setNom (nom) { this.nom = nom; }
    setHabitacions (habitacions) { this.habitacions = habitacions; }
    setPisos (pisos) { this.pisos = pisos; }
    setSuperficie (superficie) { this.superficie = superficie; }

    //Funció manteniment
    calcularManteniment() {

        let numPersonal = this.habitacions / 20;
        numPersonal = Math.ceil(numPersonal);
        let costPersonal = numPersonal * 1500;
        let missatge = "El número de persones de manteniment per aquest hotel és de <b>" +numPersonal+ "</b>, i el cost total del manteniment és de <b>"+costPersonal+"</b> euros."

        return missatge
    }

    //Funció toString
    toString() {

        let dadesHotel = "<br><br>";
        dadesHotel += "Les dades de l'hotel són:<br><ul>"
        dadesHotel += "<li><b>Nom:</b> " +this.nom+ "</li>";
        dadesHotel += "<li><b>Habitacions:</b> " +this.habitacions+ "</li>";
        dadesHotel += "<li><b>Pisos:</b> " +this.pisos+ "</li>";
        dadesHotel += "<li><b>Superfície:</b> " +this.superficie+ "</li>";
        
        return dadesHotel;
    }

}
