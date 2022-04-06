

class Resposta {

    constructor (seleccio, textSeleccio, resultat) {

        this.seleccio = seleccio;
        this.textSeleccio = textSeleccio;
        this.resultat = resultat;
    }

    getSeleccio() { return this.seleccio; }
    getTextSeleccio() { return this.textSeleccio; }
    getResultat() { return this.resultat; }

    setSeleccio (seleccio) { this.seleccio = seleccio; }
    setTextSeleccio (textSeleccio) { this.textSeleccio = textSeleccio; }
    setResultat (resultat) { this.resultat = resultat; }

}