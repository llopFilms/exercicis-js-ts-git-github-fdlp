console.log('Main caregat');

function trobarPerDNI() {
  let dniR = document.getElementById('dniU').value;
  // Find retorna el primer objecte de l'array que compleix la condició
  // Si no el troba retorna 'undefined'
  let personaTrobada = personas.find((persona) => persona.dni == dniR);
  console.log('personaTrobada -->', personaTrobada);
  let mostrarPersonaTrobada = `
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
  let indexTrobat = personas.findIndex((persona) => persona.dni == dniR);
  console.log('indexTrobat -->', indexTrobat);

  document.getElementById('personaFindIndex').innerHTML = `Posició persona amb número de DNI ${dniR} és ${indexTrobat}`;
}

function trobarPersonesPerHobbie() {
  // Filter retorna un array amb els objectes que compleixen la condició
  // Sinó retorna un array buit
  let aficio = document.getElementById('aficioU').value;
  let personesAficio = personas.filter((persona) => persona.hobbies.includes(aficio));
  console.table(personesAficio);
  let llistaPersonesAficio = "";
  for (let i = 0; i < personesAficio.length; i++) {
    personesAficio[i] = `
    <ul>
        <li>Nom: ${personesAficio[i].nombre}</li>
        <li>Edat: ${personesAficio[i].dni}</li>
        <li>Aficions: ${personesAficio[i].hobbies.join(', ')}</li>
    </ul>`;
    llistaPersonesAficio += personesAficio[i];
  }

  document.getElementById('personesFilterHobbie').innerHTML =
    llistaPersonesAficio;
}

function comptarTotalHobbies() {
  // Reduce retorna un valor 'total' (acumulador)
  // Sinò retorna un valor buit  
  let numeroAficions = personas.reduce((total, persona) => total + persona.hobbies.length, 0);
  console.log('numeroAficions -->', numeroAficions);

  document.getElementById('numeroReduceHobbies').innerHTML = 'Numero total d\'aficions: ' + numeroAficions;
}
