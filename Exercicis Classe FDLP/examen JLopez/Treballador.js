class Treballador {
    constructor(nom, cognom, carrec, disponibilitatTrasllat) {
        this.nom = nom;
        this.cognom = cognom;
        this.carrec = carrec;
        this.disponibilitatTrasllat = disponibilitatTrasllat;
    }

    getNom() { return this.nom; }
    getCognom() { return this.cognom; }
    getCarrec() { return this.carrec; }
    getDisponibilitatTrasllat() { return this.disponibilitatTrasllat; }

    setNom(nom) { this.nom = nom; }
    setCognom(cognom) { this.cognom = cognom; }
    setCarrec(carrec) { this.carrec = carrec; }
    setDisponibilitatTrasllat(disponibilitatTrasllat) { this.disponibilitatTrasllat = disponibilitatTrasllat; }
}