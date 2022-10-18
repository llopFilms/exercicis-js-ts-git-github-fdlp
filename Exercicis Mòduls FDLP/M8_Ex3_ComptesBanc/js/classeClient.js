

class Client {

    constructor(dni, nom, cognom) {
        this.dni = dni;
        this.nom = nom;
        this.cognom = cognom;
        this.comptes = [];

    }

    //Getters
    getDni() { return this.dni; }
    getNom() { return this.nom; }
    getCognom() { return this.cognom; }

    //Setters
    setDni() { this.dni = dni; }
    setNom() { this.nom = nom; }
    setCognom() { this.cognom = cognom; }

    toString() { 

        let resultat="";
        resultat += "<b>"+this.nom+ " " +this.cognom+ "</b><small> (DNI número: " +this.dni+ ")</small>";

        return resultat;
        
    }
}