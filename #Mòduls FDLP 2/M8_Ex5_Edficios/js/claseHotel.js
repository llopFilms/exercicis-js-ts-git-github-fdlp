class Hotel extends Edificio {
  constructor(nombre, numPlantas, superficie, numHabitaciones) {
    super(nombre, numPlantas, superficie);
    this.numHabitaciones = numHabitaciones;
  }

  getClase() {
    return 'hotel';
  }

  calcularCosteVigilancia() {
    // Math.ceil redondea para arriba: de 5,5 pasaría a 6 vigilantes
    let numVigilantes = Math.ceil(this.superficie / 1000);
    let costeMensual = numVigilantes * (1300 + 500);

    let mensaje = `
      Cálculos vigilancia:
      - Se necesitaran: ${numVigilantes} vigilantes.
      - Coste mensual: ${costeMensual} €.    
    `;
    return mensaje;
  }

  servicioHabitaciones() {
    // Math.ceil redondea para arriba: de 5,5 pasaría a 6 personas
    let numPersonas = Math.ceil(this.numHabitaciones / 20);
    let costeMensual = numPersonas * 1000;

    let mensaje = `
      Cálculos servicio de habitaciones:
      - Se necessitaran:${numPersonas} personas.
      - Coste mensual: ${costeMensual} €.    
    `;
    return mensaje;
  }

  toString() {
    let descripcion = `
      Datos Hotel:
      - Nombre: ${this.nombre}.
      - Superfície: ${this.superficie} m2.
      - Número de plantas: ${this.numPlantas}.
      - Número de habitaciones: ${this.numHabitaciones}.    
    `;
    return descripcion;
  }
}
