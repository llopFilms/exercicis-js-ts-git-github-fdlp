

class Escuderia {

    constructor (nom, pressupost, pais) {

        this._nom = nom;
        this._pressupost = pressupost;
        this._pais = pais;
        this.cotxes = [];
        this.pilots = [];
        this.mecanics = [];
    }

    get nom() { return this._nom; }
    get pressupost() { return this._pressupost; }
    get pais() { return this._pais; }

    set nom(nom) { this._nom = nom;}
    set pressupost(pressupost) { this._pressupost = pressupost; }
    set pais(pais) { this._pais = pais; }

    toString() {

        let missatge = "<b>Dades escuderia:</b> ";

        missatge += "<b>Nom: </b>" +this._nom+ ", ";
        missatge += "<b>Pressupost: </b>" +this._pressupost+ "M€, ";
        missatge += "<b>País: </b>" +this._pais+ ".";
        
        return missatge;
    }
}