class Vol {
  constructor(numVol, companyia, distancia) {
    this.numVol = numVol;
    this.companyia = companyia;
    this.distancia = distancia;
    this.co2Emes = this.distancia * 0.5;
  }

  getNumVol() {
    return this.numVol;
  }
  getCompanyia() {
    return this.companyia;
  }
  getDistancia() {
    return this.distancia;
  }
  getCo2Emes() {
    return this.co2Emes;
  }

  setNumVol(nouNumVol) {
    this.numVol = nouNumVol;
  }
  setCompanyia(nouCompanyia) {
    this.companyia = nouCompanyia;
  }
  setDistancia(nouDistancia) {
    this.distancia = nouDistancia;
  }

  toString() {
    let descripcio = `
    Dades del vol:
    Num. Vol: ${this.numVol}
    Companyia: ${this.companyia}
    Distància: ${this.distancia}
    CO2 emes: ${this.co2Emes}
    `;
    return descripcio;
  }

  afegirVol(vol) {
    this.vols.push(vol);
  }
}
