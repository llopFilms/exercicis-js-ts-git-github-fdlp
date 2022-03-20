

class Hotel extends Edifici {

    constructor (nom, numPlantes, superficie, numHabitacions) {

        super (nom, numPlantes, superficie);
        this.numHabitacions = numHabitacions;

    }

    getClasse() {

        return "hotel";

    }


    calcularCostVigilancia() {

        let numVigilants = Math.ceil(this.superficie/1000);
        let costMensual = numVigilants * (1300+500);
        
        let missatge = "Càlculs vigilància:<br><ul>";
        missatge += "<li>Es necessitaran:<b> "+numVigilants+" </b>vigilants.</li>";
        missatge += "<li>Cost mensual:<b> "+costMensual+" </b>€.</li></ul>";

        return missatge;
    }

    serveiHabitacions() { 

        let numPersones = Math.ceil(this.numHabitacions/20);
        let costMensual = numPersones*1000;

        let missatge = "Càlculs servei d'habitacions:<br><ul>";
        missatge += "<li>Es necessitaran:<b> "+numPersones+" </b>persones.</li>";
        missatge += "<li>Cost mensual: <b>"+costMensual+" </b>€.</li></ul><br>";

        return missatge;
    }

    toString() {
        
        let missatge = "Dades hotel<b> "+this.nom+":</b><br><ul>";
        missatge += "<li>Superfície:<b> "+this.superficie+" </b>m<sup>2</sup>.</li>";
        missatge += "<li>Número de plantes:<b> " +this.numPlantes+ " </b>plantes.";
        missatge += "<li>Número d'habitacions:<b> " +this.numHabitacions+ " </b>pacients.</li></ul>"

        return missatge;
          
    }

}