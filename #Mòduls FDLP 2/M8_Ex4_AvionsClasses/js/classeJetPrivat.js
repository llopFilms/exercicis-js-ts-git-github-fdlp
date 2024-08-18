class JetPrivat extends Avio {
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

  netejaJetPrivat() {
    let neteja = `La menetja del jet privat tardarà ${Number(
      ((this.longitud * 10) / 2 + 15).toString(2)
    )} min.`;
    return neteja;
  }

  calcularCostReserva() {
    let costReserva = `El cost de la reserva del jet privat es de ${
      this.passatgers * 1000
    }€.`;

    if (this.passatgers > 10) {
      let avis = 'El nombre de passatgers ha de ser inferior a 10';
      return avis;
    } else {
      return costReserva;
    }
  }
}
