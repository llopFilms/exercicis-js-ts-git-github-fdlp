

class Cotxe {

    static idCotxe = 0;

    constructor (model, potencia, velocitatMax, color, preu) {

        this._model = model;
        this._potencia = potencia;
        this._velocitatMax = velocitatMax;
        this._color = color;
        this._preu = preu;
        
        this._idCotxe = Cotxe.afegirId();
        
    }

    get model () { return this._model; }
    get potencia () { return this._potencia; }
    get velocitatMax () { return this._velocitatMax; }
    get color () { return this._color; }
    get preu () { return this._preu; }

    set model(model) { this._model = model; }
    set potencia(potencia) { this._potencia = potencia; }
    set velocitatMax(velocitatMax) { this._velocitatMax = velocitatMax; }
    set color(color) { this._color = color; }
    set preu(preu) { this._preu = preu; }

    toString() {

        let missatge = "<b>Cotxe " +this._idCotxe+ ":</b> ";

        missatge += "<b>Model: </b>" +this._model+ ", ";
        missatge += "<b>Potència: </b>" +this._potencia+ "CV, ";
        missatge += "<b>Velocitat màxima: </b>" +this._velocitatMax+ "km/h, ";
        missatge += "<b>Color: </b>" +this._color+ ", ";
        missatge += "<b>Preu: </b>" +this._preu+ "M€.";

        return missatge;
    }

    static afegirId() {

        return Cotxe.idCotxe += 1;
    }

}