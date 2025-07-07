class Vol {
  constructor(numVol, distancia, companyia, numPassatgers, numMotors) {
    this.numVol = numVol;
    this.distancia = distancia;
    this.companyia = companyia;
    this.numPassatgers = numPassatgers;
    this.numMotors = numMotors;
  }

  getNumVol() {
    return this.numVol;
  }
  getDistancia() {
    return this.distancia;
  }
  getCompanyia() {
    return this.companyia;
  }
  getNumPassatgers() {
    return this.numPassatgers;
  }
  getNumMotors() {
    return this.numMotors;
  }

  setNumVol(nouNumVol) {
    this.numVol = nouNumVol;
  }
  setDistancia(nouDistancia) {
    this.distancia = nouDistancia;
  }
  setCompanyia(nouCompanyia) {  
    this.companyia = nouCompanyia;
  }
  setNumPassatgers(nouNumPassatgers) {
    this.numPassatgers = nouNumPassatgers;
  } 
  setNumMotors(nouNumMotors) {
    this.numMotors = nouNumMotors;
  }

  toString() {
    let descripcio = `
    Num. Vol: ${this.numVol}
    Distància: ${this.distancia}
    Companyia: ${this.companyia}
    Nombre de passatgers: ${this.numPassatgers}
    Nombre de motors: ${this.numMotors}
    `
    return descripcio;
  }

  calculaPetjadaCarboni() {
    let petjadaCarboni = (this.numMotors * 0.1) * (this.distancia / 1000);
    return petjadaCarboni;
  }
}
