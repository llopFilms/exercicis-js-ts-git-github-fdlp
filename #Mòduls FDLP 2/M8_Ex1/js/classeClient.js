class Client {
  constructor(dni, edat, nacionalitat, nombreVols) {
    this.dni = dni;
    this.edat = edat;
    this.nacionalitat = nacionalitat;
    this.nombreVols = nombreVols;
  }

  getDni() {
    return this.dni;
  }
  getEdat() {
    return this.edat;
  }
  getNacionalitat() {
    return this.nacionalitat;
  }
  getNombreVols() {
    return this.nombreVols;
  }

  setDni(dni) {
    this.dni = dni;
  }
  setEdat(edat) {
    this.edat = edat;
  }
  setNacionalitat(nacionalitat) {
    this.nacionalitat = nacionalitat;
  }
  setNombreVols(nombreVols) {
    this.nombreVols = nombreVols;
  }

  toString() {
    let descripcio = `
    Dades del client:
    DNI: ${this.dni}
    Edat: ${this.edat}
    Nacionalitat: ${this.nacionalitat}
    Nombre de vols agafats: ${this.nombreVols}
    `;
    return descripcio;
  }

  petjadaCarboni() {
    let petjada = this.distancia * 0.5 + " tones de CO²";
    return petjada;
  }
}
