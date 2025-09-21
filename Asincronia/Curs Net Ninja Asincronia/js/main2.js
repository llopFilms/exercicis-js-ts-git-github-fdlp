console.log('---------------- main2.js -----------------');

const rebreToDos = (callback, id) => {
  // HTTP request
  const peticio = new XMLHttpRequest();
  // Estats de la peticio: 0, 1, 2, 3, 4 --> readystate
  peticio.readyState === 0 &&
    console.log('readyState = 0 --> Peticio no iniciada. No hem cridat open()');

  peticio.addEventListener('readystatechange', () => {
    switch (peticio.readyState) {
      case 1:
        console.log('readyState = 1 --> Peticio iniciada. Hem cridat open()');
        break;
      case 2:
        console.log(
          'readyState = 2 --> Peticio recollida. Hem cridat send(). Headers i status, disponibles'
        );
        break;
      case 3:
        console.log(
          "readyState = 3 --> Peticio procesada. Rebent dades a 'responseText'"
        );
        break;
      case 4:
        console.log(
          'readyState = 4 --> Peticio finalitzada. Hem cridat onload()'
        );
        break;
    }
  });

  // Codis de resposta --> status codes
  // 200 --> OK --> responseText --> {...contingut...}
  // 404 --> NOT FOUND --> responseText --> {}

  peticio.open('GET', `https://jsonplaceholder.typicode.com/todos/${id}`);
  // petició configurada
  peticio.send(); // petició iniciada amb una cruda asíncrona
  peticio.onload = () => {
    // petició finalitzada
    if (peticio.status === 200 && peticio.readyState === 4) {
      const resposta = JSON.parse(peticio.response);
      console.log('resposta de onload()-->', resposta);
      callback(undefined, resposta);
      /*
        console.log('status -->', peticio.status, 'Tenim recollides les dades');
        console.log('responseText -->', peticio.responseText);
        */
    } else {
      callback('No podem recollir les dades', undefined);
      /*
        console.log('responseText -->', peticio.responseText);
        console.log('status -->', peticio.status, 'No podem recollir les dades');
       */
    }
  };
};

/* rebreToDos((error, dades) => {
  console.log('Callback cridat');
  error ? console.log(error) : console.log('dades -->', dades);
}, 1); */

const callback = (error, dades) => {
  console.log('Callback cridat');
  if (error) {
    console.log('error de callback()-->', error);
  } else {
    console.log('dades de callback()-->', dades);
  }
};
console.log('-------- Crida a rebreToDos(callback, 2) -------');
rebreToDos(callback, 2);

setTimeout(() => {
  const rebreToDosLocal = () => {
    console.log('-------- Crida a rebreToDosLocal() -------');
    fetch('json/todos.json')
      .then((response) => response.json()) // separa la part JSON de la resposta
      .then((dades) => {
        console.log('Resposta Fetch todos.json local -->', dades);
        const dadesAJSON = JSON.stringify(dades);
        console.log('dadesAJSON -->', dadesAJSON);
      });
  };
  rebreToDosLocal();
}, 250);
