console.log('---------------- main3.js -----------------');

const rebreUsuari = (usuariJSON, callback) => {
  const peticio = new XMLHttpRequest();
  peticio.open('GET', usuariJSON);
  peticio.send();
  peticio.onload = () => {
    if (peticio.status === 200 && peticio.readyState === 4) {
      const usuari = JSON.parse(peticio.response);
      callback(undefined, usuari);
    } else callback('No podem recollir les dades', undefined);
  };
};

const rebreUsuaris = () => {
  console.log('--------- callback hell -------');
  console.log('-------- Crida a rebreUsuaris() -------');
  rebreUsuari('json/josep.json', (error, dades) => {
    console.log('Callback cridat');
    error ? console.log(error) : console.log('dades -->', dades);
    rebreUsuari('json/anna.json', (error, dades) => {
      console.log('Callback cridat');
      error ? console.log(error) : console.log('dades -->', dades);
      rebreUsuari('json/maria.json', (error, dades) => {
        console.log('Callback cridat');
        error ? console.log(error) : console.log('dades -->', dades);
      });
    });
  });
};
rebreUsuaris();

setTimeout(() => {
  const basicPromesa = () => {
    console.log('--------- Promeses --------');
    //return new Prmoise((resolve, reject) => {
    return new Promise((resol, rebutja) => {
      // rebre dades...
      const dades = 'ok';
      if (dades === 'ok')
        //resolve(dades);
        resol('Hem rebut dades ok');
      // rebre error...
      //reject(error);
      else rebutja('Hem rebut un error');
    });
  };

  basicPromesa()
    .then((dades) => {
      // then recull resol/resolve
      console.log('dades basicPromesa -->', dades);
    })
    .catch((error) => {
      // catch recull rebutja/reject
      console.log('error basicPromesa -->', error);
    });
}, 200);

const rebreTodos = (recurs) =>
  new Promise((resolve, reject) => {
    const peticio = new XMLHttpRequest();
    peticio.open('GET', recurs);
    peticio.send();
    peticio.onload = () => {
      if (peticio.status === 200 && peticio.readyState === 4) {
        const dades = JSON.parse(peticio.response);
        resolve(dades);
      } else reject('No podem recollir les dades');
    };
  });

setTimeout(() => {
  console.log('-------- Petició simple -------');
  rebreTodos('json/josep.json')
    .then((dades) => {
      console.log('Promesa resolta amb dades de rebreTodos -->', dades);
    })
    .catch((error) => {
      console.log('Promesa rebitjada amb error de rebreTodos -->', error);
    });
}, 250);

setTimeout(() => {
  console.log('------- Petició múltiple -------');
  rebreTodos('json/josep.json')
    .then((dades) => {
      console.log('Promesa 1 resolta amb dades de rebreTodos -->', dades);
      return rebreTodos('json/anna.json');
    })
    .then((data) => {
      console.log('Promesa 2 resolta amb dades de rebreTodos -->', data);
      return rebreTodos('json/maria.json');
    })
    .then((data) => {
      console.log('Promesa 3 resolta amb dades de rebreTodos -->', data);
    })
    .catch((error) => {
      console.log('Promesa rebutjada amb error de rebreTodos -->', error);
    });
}, 300)



