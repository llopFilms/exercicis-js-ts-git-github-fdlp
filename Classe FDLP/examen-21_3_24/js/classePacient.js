class Pacient {
  constructor(dni, nomComplet, edat, pes, estatura, cintura, maluc) {
    this.dni = dni;
    this.nomComplet = nomComplet;
    this.edat = edat;
    this.pes = pes;
    this.estatura = estatura;
    this.cintura = cintura;
    this.maluc = maluc;
  }

  getDni() {
    return this.dni;
  }
  getNomComplet() {
    return this.nomComplet;
  }
  getEdat() {
    return this.edat;
  }
  getPes() {
    return this.pes;
  }
  getEstatura() {
    return this.estatura;
  }
  getCintura() {
    return this.cintura;
  }
  getMaluc() {
    return this.maluc;
  }

  toString() {
    let missatge = `
    \t DNI: ${this.dni}
    \t Nom complet: ${this.nomComplet}
    \t Edat: ${this.edat} anys
    \t Pes: ${this.pes} kg
    \t Estatura: ${this.estatura / 100} m
    \t Cintura: ${this.cintura}
    \t Maluc: ${this.maluc}
    `;
    return missatge;
  }
}
