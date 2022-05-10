

class Cinema extends Edifici {

    constructor (nom, numPlantes, superficie, aforament) {

        super (nom, numPlantes, superficie);
        this._aforament = aforament;
    }

    get classe() {return "cinema";}

    calcularCostVigilancia() {

        let numVigilants = Math.ceil(this._superficie / 3000);
        let costMensual = numVigilants * 1300;

        let missatge = "Càlculs vigilància:<br><ul>";
        missatge += "<li>Es necessitaran:<b> "+numVigilants+" </b>vigilants.</li>";
        missatge += "<li>Cost mensual: <b>"+costMensual+" </b>€.</li></ul>"

        return missatge;
    }

    projectarSessio(numEspectadors, preuEntrada) {

        let recaptacio = (numEspectadors * preuEntrada).toFixed(2);;
        let missatge1 = "L'aforament és inferior al número d'espectadors."
        let missatge2 = "S'han recaptat <b>"+recaptacio+" </b>€."
    
        if (this.aforament < numEspectadors) {

            return missatge1
        }else{

            return missatge2;
        }
    }

    toString() {
        
        let missatge = "Dades cinema<b> "+this._nom+":</b><br><ul>";
        missatge += "<li>Superfície:<b> "+this._superficie+" </b>m<super>2</super>.</li>";
        missatge += "<li>Número de plantes:<b> " +this._numPlantes+ " </b>plantes.";
        missatge += "<li>Aforament:<b> " +this._aforament+ " </b>espectadors.</li></ul>"

        return missatge;
    }

    toString2() {

        let missatge = "Dades cinema<b> "+this._nom+":</b> ";
        missatge += "Superfície:<b> "+this._superficie+" </b>m<super>2</super>.";
        missatge += "Número de plantes:<b> " +this._numPlantes+ " </b>plantes.";
        missatge += "Aforament:<b> " +this._aforament+ " </b>espectadors."

        return missatge;
    }

}
