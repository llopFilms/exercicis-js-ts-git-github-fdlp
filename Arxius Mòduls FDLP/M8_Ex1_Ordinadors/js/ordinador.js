
//Creem classe ordinador
class Ordinador {

    constructor(marca, model, processador, memoria, discDur) {

        this.marca = marca;
        this.model = model;
        this.processador = processador;
        this.memoria = memoria;
        this.discDur = discDur;
    }

    //Mètodes getter per demanar valors
    getMarca() { return this.marca; }
    getModel() { return this.model; }
    getProcessador() { return this.processador; }
    getMemoria() { return this.memoria; }
    getDiscDur() { return this.discDur; }

    //Mètodes setters per modificar valors
    setProcessador(processador) { this.processador = processador; }
    setMemoria(memoria) { this.memoria = memoria; }
    setDiscDur(discDur) { this.discDur = discDur; }

    //Resposta executar programa
    execPrograma(programa) {

        return "Aquest ordinador està executant el programa " +programa; 
    }

    //Funció toString
    toString() {

        let dadesOrdinador = "\n\n";
        dadesOrdinador += "Marca: " +this.marca+ "\n";
        dadesOrdinador += "Model: " +this.model+ "\n";
        dadesOrdinador += "Processador: " +this.processador+ "\n";
        dadesOrdinador += "Memoria: " +this.memoria+ "\n";
        dadesOrdinador += "Disc Dur: " +this.discDur+ "\n";

        return dadesOrdinador;
    }
}