class Client {
  constructor(dni, edat, nacionalitat) {
    this.dni = dni;
    this.edat = edat;
    this.nacionalitat = nacionalitat;
    this.vols = [];
  }

  getDni() {
    return this.dni;
  }
  getNacionalitat() {
    return this.nacionalitat;
  }
  getEdat() {
    return this.edat;
  }

  setDni(nouDni) {
    this.dni = nouDni;
  }
  setNacionalitat(nouNacionalitat) {
    this.nacionalitat = nouNacionalitat;
  }
  setEdat(nouEdat) {
    this.edat = nouEdat;
  }

  toString() {
    let descripcio = `
    Dades del client:
    DNI: ${this.dni}
    Nacionalitat: ${this.nacionalitat}
    Edat: ${this.edat}
    `;
    return descripcio;
  }

  sumarPetjadaCarboni() {
    let petjadaCarboni = 0;
    for (let i = 0; i < this.vols.length; i++) {
      petjadaCarboni += this.vols[i].petjadaCarboni();
    }
    return petjadaCarboni;
  }
  
}
