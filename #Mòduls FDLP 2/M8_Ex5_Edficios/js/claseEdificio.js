class Edificio {
  constructor(nombre, numPlantas, superficie) {
    this.nombre = nombre;
    this.numPlantas = numPlantas;
    this.superficie = superficie;
  }

  //Getters
  getNombre() {
    return this.nombre;
  }
  getNumPlantas() {
    return this.numPlantas;
  }
  getSuperficie() {
    return this.superficie;
  }

  //Métodos
  limpiar() {
    let tiempo = this.superficie / 5 + 0.5 * this.numPlantas;
    let horas = parseInt(tiempo / 60);
    let minutos = horas % 60;

    let costeMensual = Number((tiempo * 30).toFixed(2));
    let mensaje = `
      Cálculos limpieza:
      - Se necesitarán ${horas} horas y ${minutos} minutos.
      - Coste mensual: ${costeMensual} €.     
  `;

    return mensaje;
  }
}
