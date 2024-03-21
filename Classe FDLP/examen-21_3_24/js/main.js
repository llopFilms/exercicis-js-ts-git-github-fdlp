console.log('Càrrega main');
console.table(pacients);

function generarNumeros() {
  let numsAleatoris = [];
  let numUsuari = +document.getElementById('numU').value;
  console.log('numUsuari -->', numUsuari);

  while (numUsuari < 10 || numUsuari > 30) {
    numUsuari = +prompt('Introdueix un valor entre 10 i 30, sisplau');
  }

  let numAleatori;
  let rang1 = 0,
    rang2 = 0,
    rang3 = 0;

  for (let i = 0; i < numUsuari; i++) {
    numAleatori = Math.floor(Math.random() * 60) + 1;
    numsAleatoris.push(numAleatori);

    if (numAleatori >= 1 && numAleatori <= 20) {
      rang1++;
    } else if (numAleatori >= 21 && numAleatori <= 40) {
      rang2++;
    } else if (numAleatori >= 41 && numAleatori <= 60) {
      rang3++;
    }
  }

  console.log('numsAleatoris -->', numsAleatoris);
  let midaArray = numsAleatoris.length;
  console.log('midaArray -->', midaArray);

  let percRang1 = rang1 / midaArray;
  let percRang2 = rang2 / midaArray;
  let percRang3 = rang3 / midaArray;

  document.getElementById('resposta').innerHTML = ` 
  <ul>
  Grandària de l'array: ${midaArray}
  <br><br>
  <li>% de números entre 1 i 20: ${rang1} = ${percRang1}%</li>
  <li>% de números entre 21 i 40: ${rang2} = ${percRang2}%</li>
  <li>% de números entre 41 i 60: ${rang3} = ${percRang3}%</li>
  </ul>  
  `;
}

function buscarPacient() {
  let dni = prompt('Introdueix el DNI del pacient', '43697671V');
  return pacients.findIndex((pacient) => pacient.dni == dni);
}

function mostraPacient() {
  let indexPacient = buscarPacient();
  console.log(indexPacient);

  if (indexPacient == -1) {
    alert('Pacient no trobat');
    return;
  } else {
    let pacient = pacients[indexPacient];
    if (pacient instanceof Home) {
      alert(`
        Les dades el pacient són:
        ${pacient.toString()}
        Cliqueu 'Dacord' per tornar al menú principal
      `);
    } else {
      alert(`
        Les dades el pacient són:
        ${pacient.toString()}
        Cliqueu 'Dacord' per tornar al menú principal
      `);
    }
  }
}

function arrodonirNum(num) {
  return Math.round(num * 100) / 100;
}

function calcIMC(pes, estatura) {
  let imc = pes / (estatura / 100) ** 2;
  return imc;
}

function mostraImc_CatPes() {
  let indexPacient = buscarPacient();
  console.log(indexPacient);

  if (indexPacient == -1) {
    alert('Pacient no trobat');
    return;
  } else {
    let pacient = pacients[indexPacient];
    let imcPacient = calcIMC(pacient.pes, pacient.estatura);
    let imcrrodonit = arrodonirNum(imcPacient);

    let catPes;
    if (imcrrodonit < 18.5) catPes = 'Pes insuficient';
    else if (imcrrodonit >= 18.5 && imcrrodonit <= 24.09) catPes = 'Pes normal';
    else if (imcrrodonit >= 25 && imcrrodonit <= 29.9) catPes = 'Sobrepès';
    else catPes = 'Obesitat';

    alert(`
      L'IMC del pacient ${pacient.nomComplet} és: ${imcrrodonit}
      La seva categoría de pes es: ${catPes}
      
      Cliqueu 'Dacord' per tornar al menú principal
    `);
  }
}

function mostraIndexGreix() {
  let indexPacient = buscarPacient();
  console.log(indexPacient);

  if (indexPacient == -1) {
    alert('Pacient no trobat');
    return;
  } else {
    let pacient = pacients[indexPacient];
    let incHome = (pacient instanceof Home) ? 0 : -5.4;
    let ig =
      1.2 * calcIMC(pacient.pes, pacient.estatura + 0.23 * pacient.edat) +
      incHome;

    alert(`
      L'Índex de Greix del pacient ${pacient.nomComplet} és: ${arrodonirNum(ig)}

      Cliqueu 'Dacord' per tornar al menú principal.
    `);
  }
}

function mostraRCC() {
  let indexPacient = buscarPacient();
  console.log(indexPacient);

  if (indexPacient == -1) {
    alert('Pacient no trobat');
    return;
  } else {
    let pacient = pacients[indexPacient];
    let rcc = pacient.cintura / pacient.maluc;

    alert(`
      L'Índex de RCC del pacient ${pacient.nomComplet} és: ${arrodonirNum(rcc)}

      Cliqueu 'Dacord' per tornar al menú principal.
    `);
  }
}

function sortir() {
  alert('Gràcies per la vostra visita');
}

function programaPacients() {
  let seleccio;
  do {
    seleccio = +prompt(`
    PROGRAMA DE PACIENTS:
    ------------------------------------------
    
    Introdueix la teva selecció:
    
    \t1. Dades des pacient
    \t2. Índex de Massa Coroporal (IMC) + categoria de pes
    \t3. Índex de Greix (IG)
    \t4. Relació cintura-maluc (RCC)
    \t5. Sortir
    
    `);

    while (seleccio < 1 || seleccio > 5) {
      seleccio = +prompt(`
      (Escollir l'opció correcta)
      PROGRAMA DE PACIENTS:
      ------------------------------------------
      
      Introdueix la teva selecció:
      
      \t1. Dades des pacient
      \t2. Índex de Massa Coroporal (IMC) + categoria de pes
      \t3. Índex de Greix (IG)
      \t4. Relació cintura-maluc (RCC)
      \t5. Sortir
      
      `);
    }
    console.log('seleccio -->', seleccio);

    switch (seleccio) {
      case 1:
        mostraPacient();
        break;
      case 2:
        mostraImc_CatPes();
        break;
      case 3:
        mostraIndexGreix();
        break;
      case 4:
        mostraRCC();
        break;
    }
  } while (seleccio >= 1 && seleccio <= 4);

  sortir();
}
