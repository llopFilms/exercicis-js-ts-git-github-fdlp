const arrayEdificios = [];

//Función para crear y añadir Hotel
function anyadirHotel(nombre, numPlantas, superficie, numHabitaciones) {
  let nuevoHotel = new Hotel(nombre, numPlantas, superficie, numHabitaciones);
  arrayEdificios.push(nuevoHotel);
}

//Funció para crear y añadir Cine
function anyadirCine(nombre, numPlantas, superficie, aforament) {
  let nuevoCine = new Cine(nombre, numPlantas, superficie, aforament);
  arrayEdificios.push(nuevoCine);
}

//Función para crear y añadir Hospital
function anyadirHospital(nombre, numPlantas, superficie, numPacientes) {
  let nuevoHospital = new Hospital(
    nombre,
    numPlantas,
    superficie,
    numPacientes
  );
  arrayEdificios.push(nuevoHospital);
}

// Función para llenar el array
function llenarEdificios() {
  anyadirHotel('Hotel Melià Cervantes', 12, 14000, 125);
  anyadirHospital('Hospital Central Fleming', 16, 62000, 350);
  anyadirHotel('Hotel Melià Goya', 10, 14000, 85);
  anyadirCine('Cinema Renoir Hitchcock', 2, 12000, 225);
  anyadirHotel('Hotel Melià Lorca', 22, 44000, 225);
  anyadirHospital('Hospital Central Servet', 10, 29000, 150);
  anyadirCine('Cinema Renoir Spielberg', 4, 32000, 850);
  anyadirHospital('Hospital Central Pasteur', 12, 42000, 225);
  anyadirCine('Cinema Renoir Lynch', 3, 16000, 320);

  console.log('Datos cargados en el array');
}
