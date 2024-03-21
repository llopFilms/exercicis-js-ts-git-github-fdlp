class Dona extends Pacient {
  constructor(dni, nomComplet, edat, pes, estatura, cintura, maluc, embarassos) {
    super(dni, nomComplet, edat, pes, estatura, cintura, maluc);
    this.embarassos = embarassos;
  }

  toString() {
    let message = super.toString();
    message += `\n\tEmbarassos: ${this.embarassos}`;
    return message;
  }
}
