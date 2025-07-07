console.log('Carregat main');
omplirArray();

function crearAvio() {
  let nouNumAvio = prompt("Introdueix el num d'avio", 'B233');
  let indexNouAvio = avions.findIndex((avio) => avio.numAvio == nouNumAvio);
  if (indexNouAvio != -1) {
    alert('Aquest avió ja existeix');
  } else {
    let tipusAvio = prompt("Introdueix el tipus d'avio", 'Jet privat');
    let marca, model, carrega, longitud, passatgers, nouAvio;

    switch (tipusAvio) {
      case 'Avió comercial':
        marca = prompt('Introdueix la marca', 'Boeing');
        model = prompt('Introdueix el model', '737');
        carrega = +prompt('Introdueix la carrega', '10000');
        longitud = +prompt('Introdueix la longitud', '100');
        passatgers = +prompt('Introdueix el nombre de passatgers', '440');

        nouAvio = new AvioComercial(
          nouNumAvio,
          marca,
          model,
          carrega,
          longitud,
          passatgers
        );
        avions.push(nouAvio);
        break;

      case 'Avioneta':
        marca = prompt('Introdueix la marca', 'Martinfly');
        model = prompt('Introdueix el model', '233A');
        carrega = +prompt('Introdueix la carrega', '4000');
        longitud = +prompt('Introdueix la longitud', '15');
        numHelices = +prompt('Introdueix el nombre de helices', '4');

        nouAvio = new Avioneta(
          nouNumAvio,
          marca,
          model,
          carrega,
          longitud,
          numHelices
        );
        avions.push(nouAvio);
        break;

      case 'Jet privat':
        marca = prompt('Introdueix la marca', 'GatoPardo');
        model = prompt('Introdueix el model', '4737');
        carrega = +prompt('Introdueix la carrega', '2000');
        longitud = +prompt('Introdueix la longitud', '15');
        passatgers = +prompt('Introdueix el nombre de passatgers', '10');

        nouAvio = new JetPrivat(
          nouNumAvio,
          marca,
          model,
          carrega,
          longitud,
          passatgers
        );
        avions.push(nouAvio);
        break;

      default:
        alert('No existeix aquest tipus d’avio');
        break;
    }

    alert('Avió creat correctament');
    console.clear();
    console.table(avions);
  }
}

function eliminarAvio() {
  let numAvio = prompt('Introdueix el num d’avio', 'B233');
  let indexAvio = avions.findIndex((avio) => avio.numAvio == numAvio);
  if (indexAvio == -1) {
    alert('Aquest avió no existeix');
  } else {
    avions.splice(indexAvio, 1);
    alert('Avió eliminat correctament');
    console.clear();
    console.table(avions);
  }
}

function mostrarAvio() {
  let numAvioU = prompt('Introdueix el num d’avio', 'B233');
  let indexAvio = avions.findIndex((avio) => avio.numAvio == numAvioU);
  if (indexAvio == -1) {
    alert('Aquest avió no existeix');
  } else {
    let indexNumAvio = avions.findIndex((avio) => avio.numAvio == numAvioU);
    let avioMostrar = avions[indexNumAvio];
    let combustible = avioMostrar.combustible();

    if (avioMostrar instanceof AvioComercial) {
      let neteja = avioMostrar.netejaAvioComercial();
      let costMenjar = avioMostrar.calcularCostMenjar();

      alert(`
        ${avioMostrar.toString()}
        ${combustible}
        ${neteja}
        ${costMenjar}
      `);
    } else if (avioMostrar instanceof Avioneta) {
      let neteja = avioMostrar.netejarAvioneta();
      let distancia = avioMostrar.calcularDistancia();

      alert(`
        ${avioMostrar.toString()}
        ${combustible}
        ${neteja}
        ${distancia}
      `);
    } else {
      let neteja = avioMostrar.netejaJetPrivat();
      let costReserva = avioMostrar.calcularCostReserva();

      alert(`
        ${avioMostrar.toString()}
        ${combustible}
        ${neteja}
        ${costReserva}
      `);
    }

    console.clear();
    console.table(avions);
  }
}
