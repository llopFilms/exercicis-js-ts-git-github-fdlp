console.log('---------------- main4.js -----------------');

// Crida a una petició asíncrona amb fetch

console.log('-------- fetch --------');
fetch('json/josep.json')
  .then((resposta) => {
    console.log('Resposta de rebreUsuari() amb fetch -->', resposta);
    return resposta.json();
  })
  .then((dades) => {
    const dadesRebudes = dades;
    console.log('Dades rebudes de rebreUsuari() amb fetch -->', dadesRebudes);
  })
  .catch((error) => {
    console.log(
      'Promesa rebitjada amb error de rebreUsuari() amb fetch -->',
      error
    );
  });

// Crida a una petició asíncrona amb async/await
setTimeout(() => {
  console.log('------- async/await -------');
  const rebreUsuari = async () => {
    try {
      const resposta = await fetch('json/josep.json');
      console.log('Resposta de rebreUsuari() amb async/await -->', resposta);
      const dadesRebudes = await resposta.json();
      console.log(
        'Dades rebudes de rebreUsuari() amb async/await -->',
        dadesRebudes
      );
    } catch (error) {
      console.log(
        'Promesa rebitjada amb error de rebreUsuari() amb async/await -->',
        error
      );
    }
  };
  console.log(rebreUsuari); // retorna una promesa
  rebreUsuari();
}, 150);

// Múltiple petició asíncrona amb async/await amb gestió d'errors
let dadesUsuaris = [];
setTimeout(() => {
  console.log('------- async/await múltiple -------');
  const rebreUsuaris = async () => {
    try {
      const respostaUsuari1 = await fetch('json/josep.json');
      if (respostaUsuari1.status !== 200) {
        throw Error(respostaUsuari1.statusText);
      }
      const dadesRebudesUsuari1 = await respostaUsuari1.json();

      const respostaUsuari2 = await fetch('json/anna.json');
      if (respostaUsuari2.status !== 200) {
        throw Error(respostaUsuari2.statusText);
      }
      const dadesRebudesUsuari2 = await respostaUsuari2.json();

      const respostaUsuari3 = await fetch('json/maria.json');
      if (respostaUsuari3.status !== 200) {
        throw Error(respostaUsuari3.statusText);
      }
      const dadesRebudesUsuari3 = await respostaUsuari3.json();

      const dadesUsuaris = [
        dadesRebudesUsuari1,
        dadesRebudesUsuari2,
        dadesRebudesUsuari3,
      ];
      return dadesUsuaris;
    } catch (error) {
      console.log(
        'Promesa rebutjada amb error de rebreUsuaris() amb async/await -->',
        error.message
      );
    } finally {
      console.log('Promesa mútliple finalitzada amb async/await');
    }
  };
  console.log(rebreUsuaris); // retorna una promesa
  rebreUsuaris().then((dades) => (dadesUsuaris = dades));
}, 300);

setTimeout(() => {
  console.log('dadesUsuaris -->', dadesUsuaris);
}, 450);
