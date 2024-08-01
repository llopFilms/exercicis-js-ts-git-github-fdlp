class Cine extends Edificio {
  constructor(nombre, numPlantas, superficie, aforo) {
    super(nombre, numPlantas, superficie);
    this.aforo = aforo;
  }

  getClase() {
    return 'cine';
  }

  calcularCosteVigilancia() {
    let numVigilantes = Math.ceil(this.superficie / 3000);
    let costMensual = numVigilantes * 1300;

    let mensaje = `
    Cálcuos vigilancia:
    - Se necesitarán: ${numVigilantes} vigilantes.
    - Coste mensual: ${costMensual} €.        
        `;
    return mensaje;
  }

  proyectarSesion(numEspectadores, precioEntrada) {
    let recaptacion = Number((numEspectadores * precioEntrada).toFixed(2));
    let mensaje1 = 'El aforo es inferior al número de espectadores.';
    let mensaje2 = 'Se han recaptado ' + recaptacion + ' €.';

    if (this.aforo < numEspectadores) {
      return mensaje1;
    } else {
      return mensaje2;
    }
  }

  toString() {
    let descripcion = `
      Datos Cine:
      - Nombre: ${this.nombre}.
      - Superfície: ${this.superficie} m2.
      - Número de plantas: ${this.numPlantas}.
      - aforo: ${this.aforo}.
    `;
    return descripcion;
  }
}
