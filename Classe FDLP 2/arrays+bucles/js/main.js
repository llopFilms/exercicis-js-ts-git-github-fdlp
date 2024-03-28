console.log('Avís --> Main carregat correctament');

function resoldreEx1() {
  let arr0a50 = [];
  let missatgeArr0a50 = '<p>Llista 0 a 49:</p><ul class="llista0a50">';
  let arr50a0 = [];
  let missatgeArr50a0 = '<p>Llista 49 a 0:</p><ul class="llista50a0">';

  for (let i = 0; i < 50; i++) {
    arr0a50.push(i);
    missatgeArr0a50 += `<li>El numero de la llista ${i + 1} és el ${i}</li>`;

    arr50a0.push(49 - i);
    missatgeArr50a0 += `<li>El número de la llista ${i + 1} és el ${
      49 - i
    }</li>`;
  }

  missatgeArr0a50 += '</ul>';
  missatgeArr50a0 += '</ul>';

  /* for (let i = 0; i <= 49; i++) {
    arr0a50.push(i);
    missatgeArr0a50 += `<ul>    
    <li>El numero de la llista ${i + 1} és el ${i}</li>    
    </ul>`;
  }

  for (let i = 49; i >= 0; i--) {
    arr50a0.push(i);
    missatgeArr50a0 += `<ul>
    <li>El número de la llista ${i + 1} és el ${i}</li>
    </ul>
    `;
  } */

  console.log('arr0a50 -->', arr0a50);
  console.log('arr50a0 -->', arr50a0);

  document.getElementById('llista0a50').innerHTML = missatgeArr0a50;
  document.getElementById('llista50a0').innerHTML = missatgeArr50a0;

  return [arr0a50, arr50a0];
}

function resoldreEx2() {
  let arr0a50 = resoldreEx1()[0];
  let arr50a0 = resoldreEx1()[1];

  console.log('arr0a50 -->', arr0a50);
  console.log('arr50a0 -->', arr50a0);

  let arr50 = [];
  let elementSuma;

  for (let i = 0; i < arr0a50.length; i++) {
    elementSuma = arr0a50[i] + arr50a0[i] + 1;
    arr50.push(elementSuma);
  }

  let comptador = 0;

  for (numero of arr50) {
    comptador++;
  }

  console.log('arr50 -->', arr50);
  console.log('comptador -->', comptador);

  let resposta = `<ul>
  Resultats:
  <li>Array d'elements sumats: [${arr50.join(', ')}]</li>
  <li>El recompte d'elements sumats: ${comptador}</li>
  <li>Mida de l'array d'elements sumats: ${arr50.length}</li> 
  </ul>`;

  document.getElementById('resposta2').innerHTML = resposta;
}

function resoldreEx3() {
  let arr50a0 = resoldreEx1()[1];
  console.log('arr50a0 -->', arr50a0);
  let multiplesDe3 = [];
  let apUltimMultipleDe3, posicioApultimMultipleDe3, i;

  for (i = 0; i < arr50a0.length; i++) {
    if (arr50a0[i] % 3 == 0 && arr50a0[i] != 6 && arr50a0[i] != 9) {
      multiplesDe3.push(arr50a0[i]);
    }
  }
  apUltimMultipleDe3 = multiplesDe3[multiplesDe3.length - 3];
  posicioApultimMultipleDe3 = arr50a0.indexOf(apUltimMultipleDe3);

  let multipleDe4;
  let trobat = false;
  let j = 5;
  while (j < arr50a0.length && !trobat) {
    if (arr50a0[j] % 4 == 0) {
      multipleDe4 = arr50a0[j];
      trobat = true;
    }
    j++;
  }

  if (!trobat) {
    multipleDe4 = 'No trobat';
  }

  let resposta = `<ul>
  Resultats:
  <li>Array de múltiples de 3: [${multiplesDe3.join(', ')}]</li>
  <li>Antepenúltim element de l'array de múltiples de 3: ${apUltimMultipleDe3}</li>
  <li>Posició de l'antepenúltim element múltiple de 3 a l'array inicial: ${posicioApultimMultipleDe3}</li>
  <li>El mprimer múltiple de 4 a l'array inicial: ${multipleDe4}</li>
  </ul>`;

  document.getElementById('resposta3').innerHTML = resposta;
}

function resoldreEx4() {
  const arrInputs = document.querySelectorAll('.grid-botons input');
  const arrNoms = [];
  let valorInput, valorSwitch, incial;
  const a = /^[AÀÁ]/;
  let arrNomsA = [];
  let arrNomsD = [];
  let arrNomsF = [];
  let arrNomsX = [];
  //const a = /^(A|À|Á)/;
  for (input of arrInputs) {
    valorInput = input.value;
    incial = valorInput.charAt(0);
    if (a.test(valorInput)) {
      valorSwitch = valorInput.replace(a, 'A');
      incial = valorSwitch.charAt(0);
    }
    arrNoms.push(valorInput);
    switch (incial) {
      case 'A':
        arrNomsA.push(valorInput);
        break;
      case 'D':
        arrNomsD.push(valorInput);
        break;
      case 'F':
        arrNomsF.push(valorInput);
        break;
      case 'X':
        arrNomsX.push(valorInput);
        break;
    }
  }
  console.log('arrNoms -->', arrNoms);
  console.log('arrNomsA -->', arrNomsA);
  console.log('arrNomsD -->', arrNomsD);
  console.log('arrNomsF -->', arrNomsF);
  console.log('arrNomsX -->', arrNomsX);

  document.getElementById('resposta4').innerHTML = `<ul>
  Resultats:
  <li>Noms amb A: hi ha ${
    arrNomsA.length
  } noms, i són els següets: ${arrNomsA.join(', ')}.</li>
  <li>Noms amb D: hi ha ${
    arrNomsD.length
  } noms, i són els següets: ${arrNomsD.join(', ')}.</li>
  <li>Noms amb F: hi ha ${
    arrNomsF.length
  } noms, i són els següets: ${arrNomsF.join(', ')}.</li>
  <li>Noms amb X: hi ha ${
    arrNomsX.length
  } noms, i són els següets: ${arrNomsX.join(', ')}.</li>
  </ul>`;

  return arrNomsA;
}

function resoldreEx5() {
  let arrNomsA = resoldreEx4();
  console.log('arrNomsA -->', arrNomsA);
  let arrObjNomsA = [];
  let as = /[Aaàá]/g;
  let numAs = 0;
  for (nomA of arrNomsA) {
    numAs = nomA.match(as).length;
    arrObjNomsA.push({ nom: nomA, numAs: numAs });
  }
  console.log('arrObjNomsA -->', arrObjNomsA);

  let resposta = '<ul>Resultats:';
  for (objNomA in arrObjNomsA) {
    resposta += `
    <li>El nom ${arrObjNomsA[objNomA].nom} te ${arrObjNomsA[objNomA].numAs} 'A'</li>
    `;
  }
  resposta += '</ul>';
  document.getElementById('resposta5').innerHTML = resposta;
}
