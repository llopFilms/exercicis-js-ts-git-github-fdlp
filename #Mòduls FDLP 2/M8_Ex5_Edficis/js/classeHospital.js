

class Hospital extends Edifici {

    constructor (nom, numPlantes, superficie, numPacients) {

        super (nom, numPlantes, superficie);
        this._numPacients = numPacients;

    }

    get classe() {return "hospital";}

    calcularCostVigilancia() {

        let numVigilants = Math.ceil(this._superficie / 1000);
        let costMensual = (numVigilants * 1300);
        let missatge = "Càlculs vigilància:<br><ul>";
        missatge += "<li>Es necessitaran:<b> "+numVigilants+" </b>vigilants.</li>";
        missatge += "<li>Cost mensual: <b>"+costMensual+"</b> €.</li></ul>"

        return missatge;
    }

    repartirDinar() { 
    
        let numRacions = this._numPacients * 3;
        let missatge = "S'estan repartint <b>"+numRacions+"</b> racions.";
        return missatge;
    }

    setNumPacients(numPacients) { this._numPacients = numPacients;}

    toString() {

        let missatge = "Dades hospital<b> "+this._nom+":</b><br><ul>";
        missatge += "<li>Superfície:<b> "+this._superficie+" </b>m<super>2</super>.</li>";
        missatge += "<li>Número de plantes:<b> " +this._numPlantes+ " </b>plantes.";
        missatge += "<li>Número de pacients:<b> " +this._numPacients+ " </b>pacients.</li></ul>"

        return missatge;
    }

    toString2() {

        let missatge = "Dades hospital<b> "+this._nom+":</b> ";
        missatge += "Superfície:<b> "+this._superficie+" </b>m<super>2</super>.";
        missatge += "Número de plantes:<b> " +this._numPlantes+ " </b>plantes.";
        missatge += "Número de pacients:<b> " +this._numPacients+ " </b>pacients."

        return missatge;
    }
}