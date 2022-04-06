

class Pregunta {

    constructor (enunciat, opcio1, opcio2, opcio3, opcio4, correcta) {

        this.enunciat = enunciat;
        this.opcio1 = opcio1;
        this.opcio2 = opcio2;
        this.opcio3 = opcio3;
        this.opcio4 = opcio4;
        this.correcta = correcta;

    }

    getEnunciat() { return this.enunciat; }
    getOpcio1() { return this.opcio1; }
    getOpcio2() { return this.opcio2; }
    getOpcio3() { return this.opcio3; }
    getOpcio4() { return this.opcio4; }
    getCorrecta() { return this.correcta; }

}








