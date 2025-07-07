console.log('Main caregat');

function trobarPerDNI() {
  let dniR = document.getElementById('dniU').value;
  // Find retorna el primer objecte de l'array que compleix la condició
  // Si no el troba retorna 'undefined'

  // let personaTrobada = personas.find((persona) => persona.dni == dniR);

  let personaTrobada = undefined,
    i = 0,
    trobada = false;
  while (i < personas.length && !trobada) {
    if (personas[i].dni == dniR) {
      personaTrobada = personas[i];
      trobada = true;
    }
    i++;
  }

  console.log('personaTrobada -->', personaTrobada);
  let mostrarPersonaTrobada =
    personaTrobada == undefined
      ? 'undefined'
      : `
  Persona trobada amb DNI ${dniR}:
  <ul>
      <li>Nom: ${personaTrobada.nombre}</li>
      <li>Edat: ${personaTrobada.dni}</li>
      <li>Aficions: ${personaTrobada.hobbies.join(', ')}</li>
  </ul>`;
  console.log(mostrarPersonaTrobada);
  document.getElementById('personaFind').innerHTML = mostrarPersonaTrobada;
}

function trobarIndexPerDNI() {
  let dniR = document.getElementById('dniU').value;
  // findIndex retorna l'index del primer objecte de l'array que compleix la condició
  // Si no el troba retorna -1

  // let indexTrobat = personas.findIndex((persona) => persona.dni == dniR);

  let indexTrobat = -1,
    i = 0,
    trobada = false;
  while (i < personas.length && !trobada) {
    if (personas[i].dni == dniR) {
      indexTrobat = i;
      trobada = true;
    }
    i++;
  }
  console.log('indexTrobat -->', indexTrobat);

  document.getElementById(
    'personaFindIndex'
  ).innerHTML = `Posició persona amb número de DNI ${dniR} ${
    indexTrobat === -1 ? 'no trobada' : 'trobada'
  } amb índex ${indexTrobat}`;
}

function trobarPersonesPerHobbie() {
  // Filter retorna un array amb els objectes que compleixen la condició
  // Sinó retorna un array buit

  let aficio = document.getElementById('aficioU').value;

  /* let personesAficio = personas.filter((persona) => persona.hobbies.includes(aficio)); */

  let personesAficio = [];
  for (let i = 0; i < personas.length; i++) {
    if (personas[i].hobbies.includes(aficio)) {
      personesAficio.push(personas[i]);
    }
  }
  console.table(personesAficio);

  // let llistaNoms = personesAficio.map((persona) => persona.nombre);
  let llistaNoms = [];
  for (let i = 0; i < personesAficio.length; i++) {
    llistaNoms.push(personesAficio[i].nombre);
  }
  console.log('llistaNoms -->', llistaNoms);

  document.getElementById('personesFilterHobbie').innerHTML = `${
    personesAficio.length === 0
      ? 'No hi ha persones amb aquesta afició'
      : 'Persones amb aquesta afició: '
  }
    ${llistaNoms.join(',')}`;
}

function comptarTotalHobbies() {
  // Reduce retorna un valor 'total' (acumulador)
  // Sinò retorna un valor buit

  /* let numeroAficions = personas.reduce((total, persona) => total + persona.hobbies.length, 0);
   */

  let numeroAficions = 0;
  for (let i = 0; i < personas.length; i++) {
    numeroAficions += personas[i].hobbies.length;
  }
  console.log('numeroAficions -->', numeroAficions);

  document.getElementById('numeroReduceHobbies').innerHTML =
    "Numero total d'aficions: " + numeroAficions;
}
