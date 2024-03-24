


class Mecanic extends Treballador {

    static idMecanic = 0;

    constructor (nom, cognom, edat, antiguitat, estudisSuperiors) {

        super (nom, cognom, edat, antiguitat);
        
        this._estudisSuperiors = estudisSuperiors;
        this._idMecanic = Mecanic.afegirId();
    }

    get estudisSuperiors () { return this._estudisSuperiors; }
    get souMecanic () { return this._souMecanic; }

    set estudisSuperiors(estudisSuperiors) { this._estudisSuperiors = estudisSuperiors; }
    
    toString() {

        let missatge = "<b>Mecànic " +this._idMecanic+ ": </b>";

        missatge += "<b>Nom: </b>" +super.nom+ ", ";
        missatge += "<b>Cognom: </b>" +super.cognom+ ", ";
        missatge += "<b>Edat: </b>" +super.edat+ " anys, ";
        missatge += "<b>Antiguitat: </b>" +super.antiguitat+ " anys, ";
        missatge += "<b>Estudis Superiors: </b>" +this._estudisSuperiors+ ", ";
        missatge += "<b>Sou Mecànic: </b>" +this.souMecanic()+ " €.";

        return missatge;
    }

    souMecanic () {

        return super.souBase + 10000 * this._antiguitat;
    
    }

    static afegirId() {

        return Mecanic.idMecanic += 1;
    }


}