class Hospital extends Edificio {
  constructor(nombre, numPlantas, superficie, numPacientes) {
    super(nombre, numPlantas, superficie);
    this.numPacientes = numPacientes;
  }

  getClase() {
    return 'hospital';
  }

  calcularCosteVigilancia() {
    // Math.ceil redondea para arriba: de 5,5 pasaría a 6 vigilantes
    let numVigilantes = Math.ceil(this.superficie / 1000);
    let costeMensual = numVigilantes * 1300;
    let mensaje = `
    Cálculo vigilancia:
    - Se necesitaran:${numVigilantes} vigilantes.
    - Coste mensual: ${costeMensual}€.      
  `;
    return mensaje;
  }

  repartirAlmuerzo() {
    let numRaciones = this.numPacientes * 3;
    let mensaje = `
      Se están repartiendo ${numRaciones} raciones.
    `;
    return mensaje;
  }

  setnumPacientes(numPacientes) {
    this._numPacientes = numPacientes;
  }

  toString() {
    let descripcion = `
      Datos hospital:
      - Nombre: ${this.nombre}.
      - Superfície: ${this.superficie} m2.
      - Número de plantas: ${this.numPlantas}.
      - Número de pacientes: ${this.numPacientes}.
    `;
    return descripcion;
  }
}
