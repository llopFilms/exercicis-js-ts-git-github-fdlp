

class Edifici {

    constructor(nom, numPlantes, superficie) {

        this._nom = nom;
        this._numPlantes = numPlantes;
        this._superficie = superficie;
    }

    //Getters
    get nom() { return this._nom; }
    get numPlantes() { return this._numPlantes; }
    get superficie() { return this._superficie; }

    //Mètodes
    netejar() {

        let temps = this._superficie / 5 + 0.5 * this._numPlantes;
        let hores = parseInt(temps / 60); 
        let minuts = hores % 60;
        
        let costMensual = (temps*30).toFixed(2);
        let missatge = "Càlculs neteja:<br><ul>";
        missatge += "<li>Es necessitaran:<b> "+hores+" </b>hores i <b> "+minuts+" </b>minuts.</li>";
        missatge += "<li>Cost mensual: <b>"+costMensual+" </b>€.</li></ul>"

        return missatge;
    }
}