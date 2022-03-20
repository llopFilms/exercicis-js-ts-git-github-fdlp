

class Edifici {

    constructor(nom, numPlantes, superficie) {

        this.nom = nom;
        this.numPlantes = numPlantes;
        this.superficie = superficie;

    }

    //Getters

    getNom() { return this.nom; }
    getNumPlantes() { return this.numPlantes; }
    getSuperficie() { return this.superficie; }

    //Mètodes

    netejar() {

        let temps = this.superficie/5 + 0.5*this.numPlantes;
        let hores = parseInt((this.superficie/5 + 0.5*this.numPlantes)/60); 
        let minuts = (this.superficie/5 + 0.5*this.numPlantes)%60;
        
        let costMensual = (temps*30).toFixed(2);
        let missatge = "Càlculs neteja:<br><ul>";
        missatge += "<li>Es necessitaran:<b> "+hores+" </b>hores i <b> "+minuts+" </b>minuts.</li>";
        missatge += "<li>Cost mensual: <b>"+costMensual+" </b>€.</li></ul>"

        return missatge;

    }

}