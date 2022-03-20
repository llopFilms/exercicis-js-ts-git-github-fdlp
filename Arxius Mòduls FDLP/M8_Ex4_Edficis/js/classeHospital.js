

class Hospital extends Edifici {

    constructor (nom, numPlantes, superficie, numPacients) {

        super (nom, numPlantes, superficie);
        this.numPacients = numPacients;

    }

    getClasse() {

        return "hospital";

    }

    calcularCostVigilancia() {

        let numVigilants = Math.ceil(this.superficie/1000);
        let costMensual = (numVigilants * 1300);
        let missatge = "Càlculs vigilància:<br><ul>";
        missatge += "<li>Es necessitaran:<b> "+numVigilants+" </b>vigilants.</li>";
        missatge += "<li>Cost mensual: <b>"+costMensual+"</b> €.</li></ul>"

        return missatge;
    }

    repartirDinar() { 
    
        let numRacions = this.numPacients*3;
        let missatge = "S'estan repartint <b>"+numRacions+"</b> racions.";
        return missatge;
    }

    setNumPacients(numPacients) { this.numPacients = numPacients;}

    toString() {

        let missatge = "Dades hospital<b> "+this.nom+":</b><br><ul>";
        missatge += "<li>Número de plantes:<b> " +this.numPlantes+ " </b>plantes.";
        missatge += "<li>Superfície:<b> "+this.superficie+" </b>m<super>2</super>.</li>";
        missatge += "<li>Número de pacients:<b> " +this.numPacients+ " </b>pacients.</li></ul>"

        return missatge;
    }
  
}