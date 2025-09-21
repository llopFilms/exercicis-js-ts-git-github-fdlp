console.log('Main carregat');

function crearVol() {
  let nouNumVol = +prompt('Introdueix el numero de vol', '246');
  let nouDistancia = +prompt('Introdueix la distancia', '6300');
  let nouCompanyia = prompt('Introdueix la companyia', 'Air Francisco');
  let nouNumPassatgers = +prompt('Introdueix el numero de passatgers', '280');
  let nouNumMotors = +prompt('Introdueix el numero de motors', '4');

  let nouVol = new Vol(
    nouNumVol,
    nouDistancia,
    nouCompanyia,
    nouNumPassatgers,
    nouNumMotors
  );
  console.log('nouVol -->', nouVol);
  vols.push(nouVol);
  alert(`
    Vol creat correctament i afegit a l'array. Dades del nou vol:
    ${nouVol.toString()}    
    `);
  console.table(vols);
}

function veureVol() {
  let numVolMostrar = prompt('Introdueix el numero de vol', '133');
  let volTrobat = vols.find((vol) => vol.numVol == numVolMostrar);
  console.log('volTrobat -->', volTrobat);

  let volAMostrar;
  if (volTrobat != undefined) {
    console.log(volTrobat.toString());
    volAMostrar = `
      Dades vol:  
      <ul>
        <li>Número de vol: ${volTrobat.getNumVol()}</li>
        <li>Distància: ${volTrobat.getDistancia()}</li>
        <li>Companyia: ${volTrobat.getCompanyia()}</li>
        <li>Nombre de passatgers: ${volTrobat.getNumPassatgers()}</li>
        <li>Nombre de motors: ${volTrobat.getNumMotors()}</li>
        <li>Petjada de carboni: ${volTrobat.calculaPetjadaCarboni()} tones de CO₂</li>      
      </ul>
      `;
    document.getElementById('missatge').innerHTML = volAMostrar;
  } else {
    alert(`Vol ${numVolMostrar} no trobat.`);
    console.log(`Vol ${numVolMostrar} no trobat.`);
  }
}

function modificarVol() {
  let numVolMod = prompt('Introdueix el numero de vol', '133');
  let volTrobat = vols.find((vol) => vol.numVol == numVolMod);
  console.log('volTrobat -->', volTrobat);

  let modificacio;
  if (volTrobat != undefined) {
    modificacio = prompt('Quina dada que vols canviar?', 'Distància');
    switch (modificacio) {
      case 'Distància':
        let novaDistancia = +prompt('Introdueix la nova distància', '6300');
        volTrobat.setDistancia(novaDistancia);
        break;
      case 'Companyia':
        let novaCompanyia = prompt(
          'Introdueix la nova companyia',
          'Air Francisco'
        );
        volTrobat.setCompanyia(novaCompanyia);
        break;
      case 'Nombre de passatgers':
        let nouNumPassatgers = +prompt(
          'Introdueix el numero de passatgers',
          '280'
        );
        volTrobat.setNumPassatgers(nouNumPassatgers);
        break;
      case 'Nombre de motors':
        let nouNumMotors = +prompt('Introdueix el numero de motors', '4');
        volTrobat.setNumMotors(nouNumMotors);
        break;
    }

    alert(`Dades del vol modificades amb èxit: \n${volTrobat.toString()}`);
    console.log('volTrobat -->', volTrobat);
    console.table(vols);
  } else {
    alert(`Vol ${numVolMod} no trobat.`);
    console.log(`Vol ${numVolMod} no trobat.`);
  }
}

function esborrarVols() {
  let numVolBaixa = prompt('Introdueix el numero de vol', '133');
  let indexVolTrobat = vols.findIndex((vol) => vol.numVol == numVolBaixa);
  console.log('indexVolTrobat -->', indexVolTrobat);

  if (indexVolTrobat != -1) {
    let confirmacio = confirm(
      `Segur que vols donar de baixa el vol ${numVolBaixa}?`
    );
    if (confirmacio == true) {
      vols.splice(indexVolTrobat, 1);
      alert(`Vol ${numVolBaixa} donat de baixa correctament.`);
      console.log(`Vol ${numVolBaixa} donat de baixa correctament.`);
      console.table(vols);
    } else {
      alert(`Vol ${numVolBaixa} no donat de baixa.`);
      console.log(`Vol ${numVolBaixa} no donat de baixa.`);
      console.table(vols);
    }
  } else {
    alert(`Vol ${numVolBaixa} no trobat.`);
    console.log(`Vol ${numVolBaixa} no trobat.`);
    console.table(vols);
  }
}
