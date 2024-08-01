let posicion = 0;
llenarEdificios();
console.table(arrayEdificios);

function altaHotel() {
  let nombreHotelAlta = prompt('Introduce el nombre del Hotel');
  let indiceHotelAlta = arrayEdificios.findIndex(
    (edificio) => edificio.nombre == nombreHotelAlta
  );
  console.log("indiceHotelAlta -->",indiceHotelAlta);  

  if (indiceHotelAlta != -1) {
    alert('Ese hotel ya existe');
  } else {
    let numPlantasHotelCrear = Number(
      prompt('Introduce el nuevo número de plantas')
    );
    let superficieHotelCrear = Number(prompt('Introduce la nueva superficie'));
    let numHabitacionesHotelCrear = Number(
      prompt('Introduce el nuevo número de habitaciones')
    );

    let nuevoHotel = new Hotel(
      nombreHotelAlta,
      numPlantasHotelCrear,
      superficieHotelCrear,
      numHabitacionesHotelCrear
    );
    arrayEdificios.push(nuevoHotel);
    console.table(arrayEdificios);

    alert(
      'El hotel se ha creado con éxito, con los siguientes datos: ' +
        nuevoHotel.toString()
    );
  }
}

function altaCine() {
  let nombreCineAlta = prompt('Introduce el nombre del Cine');
  let indiceCineAlta = arrayEdificios.findIndex(
    (edificio) => edificio.nombre == nombreCineAlta
  );
  console.log("indiceCineAlta -->",indiceCineAlta);  

  if (indiceCineAlta != -1) {
    alert('Ese cine ya existe');
  } else {
    let numPlantasCineCrear = Number(
      prompt('Introduce el nuevo número de plantas')
    );
    let superficieCineCrear = Number(prompt('Introduce la nueva superficie'));
    let aforoCineCrear = Number(prompt('Introduce el nuevo aforo'));

    let nuevoCine = new Cine(
      nombreCineAlta,
      numPlantasCineCrear,
      superficieCineCrear,
      aforoCineCrear
    );
    arrayEdificios.push(nuevoCine);
    console.table(arrayEdificios);

    alert(
      'El cine se ha creado con exito, con los siguientes datos: ' +
        nuevoCine.toString()
    );
  }
}

function altaHospital() {
  let nombreHospitalAlta = prompt('Introduce el nombre del Hospital');
  let indiceHospitalAlta = arrayEdificios.findIndex(
    (edificio) => edificio.nombre == nombreHospitalAlta
  );
  console.log("indiceHospitalAlta -->",indiceHospitalAlta);
  

  if (indiceHospitalAlta != -1) {
    alert('Ese hispotal ya existe');
  } else {
    let numPlantasHospitalCrear = Number(
      prompt('Introduce el nuevo número de plantas')
    );
    let superficieHospitalCrear = Number(
      prompt('Introduce la nueva superficie')
    );
    let numPacientesCrear = Number(
      prompt('Introduce el nuevo número de pacientes')
    );

    let nuevoHospital = new Hotel(
      nombreHospitalAlta,
      numPlantasHospitalCrear,
      superficieHospitalCrear,
      numPacientesCrear
    );
    arrayEdificios.push(nuevoHospital);
    console.table(arrayEdificios);

    alert(
      'El hospital se ha creado con exito, con los siguientes datos: ' +
        nuevoHospital.toString()
    );
  }
}

function eliminarEdificio() {
  let nombreEdificioEliminar = prompt(
    'Introduce el nombre del edificio a eliminar'
  );
  let indiceEdificioEliminar = arrayEdificios.findIndex(
    (edificio) => edificio.nombre == nombreEdificioEliminar
  );
  console.log("indiceEficioizar -->",indiceEficioizar);
  
  if (indiceEdificioEliminar != -1) {
    let edificioEliminar = arrayEdificios[indiceEdificioEliminar];
    let nombreEdificiElminar = edificioEliminar.nombre;
    let confirma = confirm(
      'Estás seguro que quieres eliminar el edificio ' +
        nombreEdificiElminar +
        '?'
    );

    if (confirma == true) {
      arrayEdificios.splice(indiceEdificioEliminar, 1);
      alert('El edificio ' + nombreEdificiElminar + ' se eliminó correctamente');
    } else {
      alert('El edificio no se borró');
    }
  } else {
    alert('Este edificio no existe');
  }
}

function verEdificio() {
  let nombreEdificioVer = prompt('Introduce el nombre del edificio a ver');
  let indiceEdificioVer = arrayEdificios.findIndex(
    (edificio) => edificio.nombre == nombreEdificioVer
  );
console.log("indiceEdificioVer -->",indiceEdificioVer);

  if (indiceEdificioVer != -1) {
    let edificioVer = arrayEdificios[indiceEdificioVer];
    let clase = arrayEdificios[indiceEdificioVer].getClase();
    let datosEdificio = edificioVer.toString();
    let costeVigilancia;

    switch (clase) {
      case 'hotel':
        costeVigilancia = edificioVer.calcularCostVigilancia();
        let servicioHabitaciones = edificioVer.servicioHabitaciones();

        alert(`
              ${datosEdificio}
              ${costeVigilancia}
              ${servicioHabitaciones}         
            `);
        break;

      case 'cine':
        costeVigilancia = edificioVer.calcularCostVigilancia();
        let numEspectadores = prompt(
          'Introduce el número de espectadores de la sesión'
        );
        let precioEntrada = prompt('Introduce el precio de la entrada');
        let proyectarSesion = edificioVer.proyectarSesion(
          numEspectadores,
          precioEntrada
        );

        alert(`
              ${datosEdificio}
              ${costeVigilancia}
              ${proyectarSesion}         
            `);
        break;

      case 'hospital':
        costeVigilancia = edificioVer.calcularCostVigilancia();
        let repartirAlmuerzo = edificioVer.repartirAlmuerzo();

        alert(`
              ${datosEdificio}
              ${costeVigilancia}
              ${repartirAlmuerzo}         
            `);
        break;
    }
  } else {
    alert('Ese edificio no existe');
  }
}
