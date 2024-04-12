class Home extends Pacient {
  constructor(dni, nomComplet, edat, pes, estatura, cintura, maluc) {
    super(dni, nomComplet, edat, pes, estatura, cintura, maluc);
  }

  #RS = 0.95;

  getIGHome() {
    return super.getIG() - 5.4;
  }

  getRSHome(rcc) {
    let condicio = rcc > this.#RS;
    return super.getRS(condicio);
  }

  toString() {
    let missatge = super.toString();
    return missatge;
  }
}
