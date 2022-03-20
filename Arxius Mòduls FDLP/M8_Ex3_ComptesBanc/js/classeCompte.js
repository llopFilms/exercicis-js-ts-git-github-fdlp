

class Compte {

    //Creem classe Compte
    constructor (numCompte, saldo) {

        this.numCompte = numCompte;
        this.saldo = saldo;

    }

    //Mètodes gestió
    ingres(quantitat) {
         
        this.saldo += quantitat;
        return this.saldo;
    
    }
    retirada(quantitat) {

        if (quantitat > this.saldo) {
            alert ("No hi ha saldo suficient");

        }else{
            this.saldo -= quantitat;
            return this.saldo
        }

    }

    //Funció toString
    toString() {

        let resultat="";
        resultat += "#"+this.numCompte+ " ==> " +this.saldo+ " €";

        return resultat;
    }

}
