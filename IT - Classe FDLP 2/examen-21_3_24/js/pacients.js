let pacients = [];

function crearPacient(...arguments) {
  let nouPacient =
    arguments.length == 7 ? new Home(...arguments) : new Dona(...arguments);
  pacients.push(nouPacient);
}

function omplirPacients() {
  crearPacient('43697671V', 'Jordi Llop', 47, 88, 180, 85, 95);
  crearPacient('674345679B', 'Maria Garcia', 42, 75, 160, 110, 85, 2);
  crearPacient('12345678C', 'Pere Garcia', 42, 75, 165, 65, 85);
  crearPacient('87654321D', 'Ramon Pérez', 52, 95, 190, 90, 100);
  crearPacient('98765432E', 'Josefa Peláez', 23, 55, 170, 80, 90, 1);

  console.log('Array omplert correctament');
  console.table(pacients);
}

function pintarPacients() {
  let llistaPacients = 'LLISTA PACIENTS: <br><br>';
  for (let pacient of pacients) {
    llistaPacients += `
    <span>${pacient.nomComplet}</span>
    <ul>
      <li>DNI: ${pacient.dni}</li>
      <li>Edat: ${pacient.edat} anys</li>
      <li>Pes: ${pacient.pes} kg</li>
      <li>Alçada: ${pacient.estatura/100} m</li>
      <li>Cintura: ${pacient.cintura} cm</li>
      <li>Maluc: ${pacient.maluc} cm</li>
      ${pacient.embarassos ? `<li>Embarassos: ${pacient.embarassos}</li>` : ''}
      </ul>
    <br>
    `;
  }

  document.getElementById('llista-pacients').innerHTML = llistaPacients;
}
