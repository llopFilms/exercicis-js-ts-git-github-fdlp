


class Treballador {

    constructor (nom, cognom, edat, antiguitat) {

    this._nom = nom;
    this._cognom = cognom;
    this._edat = edat;
    this._antiguitat = antiguitat;
    this._souBase = 50000;
    }

    get nom() { return this._nom; }
    get cognom() { return this._cognom; }
    get edat() { return this._edat; }
    get antiguitat() { return this._antiguitat; } 
    get souBase() { return this._souBase;}

    set nom(nom) { this._nom = nom;}
    set cognom(cognom) { this._cognom = cognom; }
    set edat(edat) { this._edat = edat; }
    set antiguitat(antiguitat) { this._antiguitat = antiguitat; }
    set souBase(souBase) { this._souBase = souBase; }

}

