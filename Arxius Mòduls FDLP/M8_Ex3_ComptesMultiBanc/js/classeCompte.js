

class Compte {

    //Creem classe Compte
    constructor (numCompte, saldo) {

        this._numCompte = numCompte;
        this._saldo = saldo;

    }

    // Getters
    get numCompte() { return this._numCompte; }
    get saldo() { return this._saldo; }

    //Mètodes gestió
    ingres(quantitat) {

        this._saldo += quantitat;
        return this._saldo;
    }
    
    retirada(quantitat) {

        if (quantitat > this._saldo) {
            alert ("No hi ha saldo suficient");

        }else{
            this._saldo -= quantitat;
            return this._saldo
        }
    }

    //Funció toString
    toString() {

        let resultat= "#"+this._numCompte+ " ==> " +this._saldo+ " €";

        return resultat;
    }

}
