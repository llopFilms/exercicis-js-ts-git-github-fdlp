console.log('Dades carregades');
let clients = [];

function omplirArray() {
  let client1 = new Client('32456789A', 25, 'França');
  let client2 = new Client('12548709Q', 16, 'Dinamarca');
  let client3 = new Client('43623478P', 35, 'Finlàndia');
  clients.push(client1, client2, client3);

  let vol1 = new Vol(133, 'Marron Airways', 1550);
  let vol2 = new Vol(126, 'Simple Airways', 1750);
  client1.vols.push(vol1, vol2);

  let vol3 = new Vol(133, 'Blue Airways', 3000);
  let vol4 = new Vol(126, 'Complicated Airways', 2450);
  client2.vols.push(vol3, vol4);

  let vol5 = new Vol(133, 'Green Airways', 6500);
  let vol6 = new Vol(126, 'Easy Airways', 800);
  client3.vols.push(vol5, vol6);

  console.log('Clients creats');
  console.table(clients);

  for (let i = 0; i < clients.length; i++) {
    console.log("Vols de " + clients[i].dni);
    console.table(clients[i].vols);
  }
}

function llistarVols() {
  let llista = 'Dades clients:<br><ul>';
  for (let i = 0; i < clients.length; i++) {
    llista += `
      <li>Dni: ${clients[i].dni}</li>
      <li>Nacionalitat: ${clients[i].nacionalitat}</li>
      <li>Edat: ${clients[i].edat}</li>
      <li>Vols: <ul>
      `;
    for (let j = 0; j < clients[i].vols.length; j++) {
      llista += `
        <li>Número de vol: ${clients[i].vols[j].numVol}</li>
        <li>Companyia: ${clients[i].vols[j].companyia}</li>
        <li>Distància: ${clients[i].vols[j].distancia}</li>
        <li>CO2 emes: ${clients[i].vols[j].co2Emes}</li>
      `;
    }
    llista += `</ul></li>`;
  }

  llista += '</ul>';
  document.getElementById('llistaVolsP').innerHTML = llista;
}
