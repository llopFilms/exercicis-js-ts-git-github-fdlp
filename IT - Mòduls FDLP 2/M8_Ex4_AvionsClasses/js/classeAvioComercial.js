class AvioComercial extends Avio {
  constructor(numAvio, marca, model, carrega, longitud, passatgers) {
    super(numAvio, marca, model, carrega, longitud);
    this.passatgers = passatgers;
  }

  toString() {
    let descricpio = `
    Dades de l'avio:
    Marca: ${this.marca}
    Model: ${this.model}
    Carrega: ${this.carrega}
    Longitud: ${this.longitud}
    Passatgers: ${this.passatgers}
    `;
    return descricpio;
  }

  netejaAvioComercial() {
    let neteja = `La neteja de l'avió comercial tardarà ${Number(
      (this.longitud * 10) / 2
    )} min.`;
    return neteja;
  }

  calcularCostMenjar() {
    let cost = `El cost del menjar serà de ${this.passatgers}€.`;
    return cost;
  }
}
