class Dona extends Pacient {
  
  constructor(dni, nomComplet, edat, pes, estatura, cintura, maluc, embarassos) {
    super(dni, nomComplet, edat, pes, estatura, cintura, maluc);
    this.embarassos = embarassos;
  }

  #RS = 0.95;

  getRSDona(rcc) {
    let condicio = rcc >= this.#RS;
    return super.getRS(condicio);
  }

  toString() {
    let message = super.toString();
    message += `\t Embarassos: ${this.embarassos}`;
    return message;
  }
}
