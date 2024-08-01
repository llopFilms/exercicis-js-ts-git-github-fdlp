console.log('Main carregat');
console.log('Carregat main');
omplirArray();
//llistarVols();

function crearClient() {
  let dniNouClient = prompt('Introdueixi el dni del client', '43697671V');
  let nacionalitatNouClient = prompt(
    'Introdueixi la nacionalitat del client',
    'Catalan'
  );
  let edatNouClient = +prompt("Introdueixi l'edat del client", '25');

  let nouClient = new Client(
    dniNouClient,
    edatNouClient,
    nacionalitatNouClient
  );
  clients.push(nouClient);
  console.table(clients);

  alert(`Client creat satisfactòriament
    ${nouClient.toString()}`);
}

function eliminarClient() {
  let dniClient = prompt('Introdueixi el dni del client', '43697671V');
  let indexClient = clients.findIndex((client) => client.dni == dniClient);

  if (indexClient == -1) {
    alert('No existeix aquest client');
  } else {
    clients.splice(indexClient, 1);
    alert('Client eliminat satisfactòriament');
    console.table(clients);
  }
}

function crearVol() {
  let dniClient = prompt('Introdueixi el dni del client', '32456789A');
  let indexClient = clients.findIndex((client) => client.dni == dniClient);

  if (indexClient == -1) {
    alert('No existeix aquest client');
  } else {
    let codiVolNou = +prompt('Introdueixi el número de vol', '244');
    let existeixVol = clients[indexClient].vols.some(vol => vol.numVol == codiVolNou);
    console.log(existeixVol);
    if (existeixVol) { 
      alert(`El vol ${codiVolNou} ja existeix`);
    } else {
    let companyiaVolNou = prompt(
      'Introdueixi la companyia del vol',
      'Marron Airways'
    );
      let distanciaVolNou = +prompt('Introdueixi la distància del vol', '1550');
      let nouVol = new Vol(codiVolNou, companyiaVolNou, distanciaVolNou);
      clients[indexClient].vols.push(nouVol);
      alert(`Vol creat satisfactòriament
      ${nouVol.toString()}`);
      console.table(clients[indexClient].vols);
    }
    
  }
}

function mitjanaEdatsMajorsEdat() {
  let arraymMajorsEdat = clients.filter(cliente => cliente.edat >= 18);
  console.table(arraymMajorsEdat);
  let sumaEdats = arraymMajorsEdat.reduce((sumatori, cliente) => sumatori + cliente.edat, 0);
  console.log("sumaEdats -->", sumaEdats);
  let media = sumaEdats / arraymMajorsEdat.length;
  console.log("media -->", media);
  alert(`La mitjana d'edat dels clients majors de 18 anys és ${media}`);
}

function petjadaCarboniClient() {
  let dniClient = prompt('Introdueixi el dni del client', '32456789A');
  let indexClient = clients.findIndex((client) => client.dni == dniClient);
  if (indexClient == -1) {
    alert('No existeix aquest client');
    return;
  }
  let sumaCO2 = clients[indexClient].vols.reduce((sumatori, vol) => sumatori + vol.co2Emes, 0);
  console.log(sumaCO2);
  alert(
    `La petjada de carboni del client ${dniClient} és ${sumaCO2} tones de CO₂`
  );
}

function petjadaCarboniMitjana() {

  let sumaCO2Clients = 0;
  for (let i = 0; i < clients.length; i++) {
    sumaCO2Clients += clients[i].vols.reduce((sumatori, vol) => sumatori + vol.co2Emes, 0);
  }
  console.log("sumaCO2Clients -->",sumaCO2Clients);

  let mitjanaCO2Clients = sumaCO2Clients / clients.length;
  console.log("mitjanaCO2Clients -->",mitjanaCO2Clients);
  alert(`La petjada de carboni mitjana dels clients è ${mitjanaCO2Clients} tones de CO²`);
}
