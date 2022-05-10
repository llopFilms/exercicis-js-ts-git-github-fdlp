

class Pilot extends Treballador {

    static idPilot = 0;

    constructor(nom, cognom, edat, antiguitat, alssada, pes) {

        super (nom, cognom, edat, antiguitat);
        this._alssada = alssada;
        this._pes = pes;

        this._idPilot = Pilot.afegirId();
    }

    get alssada() { return this._alssada; }
    get pes() { return this._pes; }

    set alssada(alssada) { this._alssada = alssada; }
    set pes(pes) { this._pes = pes;}

    toString() {

        let missatge = "<b>Pilot " +this._idPilot+ ":</b> ";

        missatge += "<b>Nom: </b>" +super.nom+ ", ";
        missatge += "<b>Cognom: </b>" +super.cognom+ ", ";
        missatge += "<b>Edat: </b>" +super.edat+ " anys, ";
        missatge += "<b>Alçada: </b>" +this._alssada+ " m, ";
        missatge += "<b>Pes: </b>" +this._pes+ " kg, ";
        missatge += "<b>Antiguitat: </b>" +super.antiguitat+ " anys, ";
        missatge += "<b>Sou Pilot: </b>" +this.souPilot()+ " €.";

        return missatge;
    }

    souPilot() {

        return super.souBase + 10000 * this._antiguitat + 50000;
    }

    static afegirId() {

        return Pilot.idPilot += 1;
    }












}
