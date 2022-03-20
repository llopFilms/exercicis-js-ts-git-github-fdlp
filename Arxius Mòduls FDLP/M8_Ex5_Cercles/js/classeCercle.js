

class Cercle {

    constructor (centre, radi) {

        this.centre = centre;
        this.radi = radi;
    }

    distanciaCentres(altreCercle) {

        let distancia = Math.sqrt(Math.pow((altreCercle.centre.x-this.centre.x),2) + Math.pow((altreCercle.centre.y-this.centre.y),2)).toFixed(2);

        return "La distància entre el cercle actual i el rebut és de <b>" +distancia+ "</b>.";

    }

    iguals(altreCercle){

        let distancia = this.distanciaCentres(altreCercle);
        let iguals = (distancia = 0 && this.radi == altreCercle.radi) ? "Els dos cercles <b>són iguals</b>." : "Els dos cercles <b>NO són iguals</b>.";

        return iguals;
    }
 
    concentrics(altreCercle) {

        let distancia = this.distanciaCentres(altreCercle);
        let concentrics = (distancia == 0 && this.radi !== altreCercle.radi) ?  "Els cercles <b>són concèntrics</b>." : "Els cercles <b>NO són concèntrics</b>.";

        return concentrics;
    }

    igualRadi(altreCercle){

        let distancia = this.distanciaCentres(altreCercle);
        let igualRadi = (distancia !== 0 && this.radi == altreCercle.radi) ? "Els cercles <b>tenen el mateix radi</b>" : "Els cercles <b>NO tenen el mateix radi</b>.";

        return igualRadi;
    }

    tangents(altreCercle){

        let distancia = this.distanciaCentres(altreCercle);
        let tangents = (distancia = (this.radi + altreCercle.radi)) ? "Els cercles <b>són tangents</b>." : "Els cercles <b>NO ón tangents</b>.";

        return tangents;
    }

    secants(altreCercle){

        let distancia = this.distanciaCentres(altreCercle);
        let secants = (distancia < (this.radi + altreCercle.radi)) ? "Els cercles <b>són secants</b>." : "Els cercles <b>NO són secants</b>.";

        return secants;
    }
    
    noEsToquen(altreCercle) {

        let distancia = this.distanciaCentres(altreCercle);
        let noEsToquen = (distancia > (this.radi + altreCercle.radi)) ? "Els cercles <b>NO es toquen</b>." : "Els cercles <b>SÍ que es toquen</b>.";

        return noEsToquen;
    }
}