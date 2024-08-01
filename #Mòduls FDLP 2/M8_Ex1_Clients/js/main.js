console.log('Main carregat');
let clients = [];

function mostrarClient(id) {
  let client = clients[id - 1];
  document.getElementById('dniU' + id).value = client.getDni();
  document.getElementById('edatU' + id).value = client.getEdat();
  document.getElementById('nacionalitatU' + id).value =
    client.getNacionalitat();
  document.getElementById('volsU' + id).value = client.getNombreVols();
  document.getElementById('carboniClientU' + id).innerHTML =
    client.petjadaCarboni();
}
function crearClient(id) {
  let dniDefecte = id === 1 ? '12345678Z' : '87654321A';
  let dni = prompt('Introdueix el dni del client', dniDefecte);
  let edatDefecte = id === 1 ? '18' : '48';
  let edat = prompt('Introdueix la edat del client', edatDefecte);
  let nacionalitatDefecte = id === 1 ? 'Espanya' : 'Noruega';
  let nacionalitat = prompt(
    'Introdueix la nacionalitat del client',
    nacionalitatDefecte
  );
  let nombreVolsDefecte = id === 1 ? '5' : '7';
  let nombreVols = prompt(
    'Introdueix el nombre de vols agafats del client',
    nombreVolsDefecte
  );
  let client = new Client(dni, edat, nacionalitat, nombreVols);
  console.log(`client ${id} -->`, client);

  clients.push(client);
  alert(client.toString());
  mostrarClient(id);
}

function crearClients() {
  crearClient(1);
  crearClient(2);
  console.table(clients);
}
function canviarValor(id) {
  let indicadorClient = id.substring(0, id.length - 1);
  console.log('indicadorClient -->', indicadorClient);
  let numeroClient = +id.substring(id.length - 1, id.length);
  console.log('numeroClient -->', numeroClient);
  let indexClient = numeroClient - 1;
  console.log('indexClient -->', indexClient);
  let client = clients[indexClient];
  console.log('client -->', client);

  switch (indicadorClient) {
    case 'dni':
      let dniNouDefecte = numeroClient === 1 ? '23431234S' : '34598753T';
      let dniNou = prompt('Introdueix el nou dni', dniNouDefecte);
      client.setDni(dniNou);
      document.getElementById('dniU' + numeroClient).value = client.getDni();
      break;
    case 'edat':
      let edatNouDefecte = numeroClient === 1 ? '23' : '45';
      let edatNou = prompt('Introdueix la nova edat', edatNouDefecte);
      client.setEdat(edatNou);
      document.getElementById('edatU' + numeroClient).value = client.getEdat();
      break;
    case 'nacionalitat':
      let nacionalitatNouDefecte = numeroClient === 1 ? 'Suècia' : 'Canadà';
      let nacionalitatNou = prompt(
        'Introdueix la nova nacionalitat',
        nacionalitatNouDefecte
      );
      client.setNacionalitat(nacionalitatNou);
      document.getElementById('nacionalitatU' + numeroClient).value =
        client.getNacionalitat();
      break;
    case 'vols':
      let nombreVolsNouDefecte = numeroClient === 1 ? '7' : '9';
      let nombreVolsNou = prompt(
        'Introdueix el nou nombre de vols agafats',
        nombreVolsNouDefecte
      );
      client.setNombreVols(nombreVolsNou);
      document.getElementById('volsU' + numeroClient).value =
        client.getNombreVols();
      document.getElementById('carboniClientU' + numeroClient).innerHTML =
        client.petjadaCarboni();
      break;
  }

  console.log('client -->', client);
}
