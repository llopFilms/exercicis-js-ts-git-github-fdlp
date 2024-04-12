

class Treballador {

    constructor (nom, cognom, carrec, disponibilitatTrasllat) {

        this._nom = nom;
        this._cognom = cognom;
        this._carrec = carrec;
        this._disponibilitatTrasllat = disponibilitatTrasllat;
    }

    get nom() { return this._nom; }
    get cognom() { return this._cognom; }
    get carrec() { return this._carrec; }
    get disponibilitatTrasllat() { return this._disponibilitatTrasllat; }


}