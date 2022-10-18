

class Hotel extends Edifici {

    constructor (nom, numPlantes, superficie, numHabitacions) {

        super (nom, numPlantes, superficie);
        this._numHabitacions = numHabitacions;
    }

    get classe() {return "hotel";}


    calcularCostVigilancia() {

        let numVigilants = Math.ceil(this._superficie / 1000);
        let costMensual = numVigilants * (1300 + 500);
        
        let missatge = "Càlculs vigilància:<br><ul>";
        missatge += "<li>Es necessitaran:<b> "+numVigilants+" </b>vigilants.</li>";
        missatge += "<li>Cost mensual:<b> "+costMensual+" </b>€.</li></ul>";

        return missatge;
    }

    serveiHabitacions() { 

        let numPersones = Math.ceil(this._numHabitacions / 20);
        let costMensual = numPersones * 1000;

        let missatge = "Càlculs servei d'habitacions:<br><ul>";
        missatge += "<li>Es necessitaran:<b> "+numPersones+" </b>persones.</li>";
        missatge += "<li>Cost mensual: <b>"+costMensual+" </b>€.</li></ul><br>";

        return missatge;
    }

    toString() {
        
        let missatge = "Dades hotel<b> "+this._nom+":</b><br><ul>";
        missatge += "<li>Superfície:<b> "+this._superficie+" </b>m<sup>2</sup>.</li>";
        missatge += "<li>Número de plantes:<b> " +this._numPlantes+ " </b>plantes.";
        missatge += "<li>Número d'habitacions:<b> " +this._numHabitacions+ " </b>habitacions.</li></ul>"

        return missatge;
    }

    toString2() {
        
        let missatge = "Dades hotel<b> "+this._nom+":</b> ";
        missatge += "Superfície:<b> "+this._superficie+" </b>m<sup>2</sup>.";
        missatge += "Número de plantes:<b> " +this._numPlantes+ " </b>plantes.";
        missatge += "Número d'habitacions:<b> " +this._numHabitacions+ " </b>habitacions."

        return missatge;
    }
}