
//Creem classe ordinador
class Ordinador {

    constructor(marca, model, processador, memoria, discDur) {

        this._marca = marca;
        this._model = model;
        this._processador = processador;
        this._memoria = memoria;
        this._discDur = discDur;
    }

    //Mètodes getter per demanar valors
    get marca() { return this._marca; }
    get model() { return this._model; }
    get processador() { return this._processador; }
    get memoria() { return this._memoria; }
    get discDur() { return this._discDur; }

    //Mètodes setters per modificar valors
    set processador(processador) { this._processador = processador; }
    set memoria(memoria) { this._memoria = memoria; }
    set discDur(discDur) { this._discDur = discDur; }

    //Resposta executar programa
    execPrograma(programa) {

        return "Aquest ordinador està executant el programa " +programa; 
    }

    //Funció toString
    toString() {

        let dadesOrdinador = "\n\n";
        dadesOrdinador += "Marca: " +this._marca+ "\n";
        dadesOrdinador += "Model: " +this._model+ "\n";
        dadesOrdinador += "Processador: " +this._processador+ "\n";
        dadesOrdinador += "Memoria: " +this._memoria+ "\n";
        dadesOrdinador += "Disc Dur: " +this._discDur+ "\n";

        return dadesOrdinador;
    }
}