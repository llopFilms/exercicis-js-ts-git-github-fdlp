class Hotel {

  constructor (nom, nCambres, nPlantes, superficie) {
    this.nom=nom;
    this.nCambres=nCambres;
    this.nPlantes=nPlantes;
    this.superficie=superficie;
  }

  get getNom() {return this.nom;}
  get getNCambres() {return this.nCambres;}
  get getNPlantes() {return this.nPlantes;}
  get getSuperficie() {return this.superficie;}
 
  setNom(nom) {this.nom=nom;}
  setNCambres(nCambres) {this.nCambres=nCambres;}
  setNPlantes(nPlantes) {this.nPlantes=nPlantes;}
  setSuperficie(superficie) {this.superficie=superficie;}

  toString() {
    let missatge= "Nom de l'hotel: " + this.nom +
      "<br>Cambres: " + this.nCambres +
      "<br>Plantes: " + this.nPlantes +
      "<br>Superfície: " + this.superficie;
    return missatge;
  }

  calcularManteniment() {
    let nEmpleats = (this.nCambres / 20);  //nombre d'empleats que calen
    let costMensual = nEmpleats*1500;      //cost mensual de tot el personal
    let missatge= "Aquest ocupa " + nEmpleats + " empleats " +
                   "i la despesa mensual en personal arriba a " + costMensual + " euros."
    return missatge;
  }
  
}