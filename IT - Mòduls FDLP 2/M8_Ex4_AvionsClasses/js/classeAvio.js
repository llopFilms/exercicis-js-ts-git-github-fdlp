class Avio {
  constructor(numAvio, marca, model, carrega, longitud) {
    this.numAvio = numAvio;
    this.marca = marca;
    this.model = model;
    this.carrega = carrega;
    this.longitud = longitud;
  }

  combustible() {
    let litres = `El combustible necessari es de: ${Number((this.longitud / this.carrega.toFixed(2)))} litres`;
    return litres;
  }
}
