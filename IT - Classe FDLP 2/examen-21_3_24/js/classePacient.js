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

  getRoundNum(num) {
    return Math.round(num * 100) / 100;
  }

  getIMC() {
    let imc = this.pes / (this.estatura / 100) ** 2;
    return this.getRoundNum(imc);
  }

  getIG() {
    let ig = 1.2 * this.getIMC() + 0.23 * this.edat;
    return this.getRoundNum(ig);
  }

  getRCC() {
    let rcc = this.cintura / this.maluc;
    return this.getRoundNum(rcc);
  }
  
  getRS(condicio) {
    return (condicio) ? 'implica un risc per la salut' : 'és correcte';
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
