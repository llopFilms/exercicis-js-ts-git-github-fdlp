class Avioneta extends Avio {
  constructor(numAvio, marca, model, carrega, longitud, numHelices) {
    super(numAvio, marca, model, carrega, longitud);
    this.numHelices = numHelices;
  }

  toString() {
    let descricpio = `
    Dades de l'avio:
    Marca: ${this.marca}
    Model: ${this.model}
    Carrega: ${this.carrega}
    Longitud: ${this.longitud}
    Num. Helices: ${this.numHelices}
    `;
    return descricpio;
  }

  netejarAvioneta() {
    let neteja = `La neteja de l'avioneta tardarà ${Number(
      ((this.longitud * 10) / 2).toFixed(2)
    )} min.`;
    return neteja;
  }

  calcularDistancia() {
    let distancia = `L'avioneta podrà recórrer ${this.numHelices} km.`;
    return distancia;
  }
}
