

class Client {

    constructor(dni, nom, cognom) {
        this._dni = dni;
        this._nom = nom;
        this._cognom = cognom;
        this.comptes = [];

    }

    //Getters
    get dni() { return this._dni; }
    get nom() { return this._nom; }
    get cognom() { return this._cognom; }

    //Setters
    set dni(dni) { this._dni = dni; }
    set nom(nom) { this._nom = nom; }
    set cognom(cognom) { this._cognom = cognom; }

    toString() { 

        let resultat="";
        resultat += "<b>"+this._nom+ " " +this._cognom+ "</b><small> (DNI número: " +this._dni+ ")</small>";

        return resultat;
        
    }
}