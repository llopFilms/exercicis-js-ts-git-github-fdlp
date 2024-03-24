

class Cercle {

    constructor (centre, radi) {

        this._centre = centre;
        this._radi = radi;
    }

    get centre() { return this._centre; }
    get radi() { return this._radi; }

    distanciaCentres(cercle2) {

        let distancia = Math.hypot((cercle2.centre.x-this.centre.x),(cercle2.centre.y-this.centre.y)).toFixed(2);
        
        /* Math.sqrt(Math.pow((cercle2.centre.x-this.centre.x),2) + Math.pow((cercle2.centre.y-this.centre.y),2)).toFixed(2); */
        console.log (distancia);

        return distancia;
    }

    iguals(cercle2){

        let distancia = this.distanciaCentres(cercle2);
        let iguals = (distancia == 0 && this.radi == cercle2.radi) ? "Els dos cercles <b>són iguals</b>." : "Els dos cercles <b>NO són iguals</b>.";
        console.log(this.radi, cercle2.radi, distancia);
        console.log(distancia == 0 && this.radi == cercle2.radi);

        return iguals;
    }

    concentrics(cercle2) {

        let distancia = this.distanciaCentres(cercle2);
        let concentrics = (distancia == 0 && this._radi != cercle2.radi) ?  "Els cercles <b>són concèntrics</b>." : "Els cercles <b>NO són concèntrics</b>.";

        return concentrics;
    }

    igualRadi(cercle2){

        let distancia = this.distanciaCentres(cercle2);
        let igualRadi = (this._radi == cercle2.radi) ? "Els cercles <b>tenen el mateix radi</b>" : "Els cercles <b>NO tenen el mateix radi</b>.";

        return igualRadi;
    }

    tangents(cercle2){

        let distancia = this.distanciaCentres(cercle2);
        let tangents = (distancia == (this._radi + cercle2.radi)) ? "Els cercles <b>són tangents</b>." : "Els cercles <b>NO són tangents</b>.";

        return tangents;
    }

    secants(cercle2){

        let distancia = this.distanciaCentres(cercle2);
        let secants = (distancia > (this._radi + cercle2.radi)) ? "Els cercles <b>són secants</b>." : "Els cercles <b>NO són secants</b>.";

        return secants;
    }
    
    noEsToquen(cercle2) {

        let distancia = this.distanciaCentres(cercle2);
        let noEsToquen = (distancia > (this._radi + cercle2.radi)) ? "Els cercles <b>NO es toquen</b>." : "Els cercles <b>SÍ que es toquen</b>.";

        return noEsToquen;
    }
}