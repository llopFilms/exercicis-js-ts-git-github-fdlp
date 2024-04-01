console.log('Entorn de proves');

//bucles ------------------------------
console.log('bucles ------------------------------');

//for
for (let i = 0; i < 5; i++) {
  console.log(`Valor de i a la volta ${i + 1} -->`, i);
}
console.log('Bucle acabat');

const noms = ['Carles', 'Àlex', 'Manel'];
let html = `<p>Llista de noms:</p>`;

for (let i = 0; i < noms.length; i++) {
  console.log(`Nom ${i + 1} -->`, noms[i]);
  html += `<div>${noms[i]}</div>`;
}
document.getElementById('respostaHtml').innerHTML = html;
console.log('Bucle acabat');

//while
let j = 0;
while (j < noms.length) {
  console.log(`Valor de nom a la volta ${j + 1} -->`, noms[j]);
  j++;
}
console.log('Bucle acabat');

//do while
let k = 0;
do {
  console.log(`Valor de nom a la volta ${k + 1} -->`, noms[k]);
  k++;
} while (k < noms.length);
console.log('Bucle acabat');

//cnodicionals ------------------------------
console.log('cnodicionals ------------------------');

//if
const edat = 20;

if (edat > 18) {
  console.log("Major d'edat");
}

if (noms.length > 2) {
  console.log('Múltiples noms');
}

const contrasenya = 'passaparaula';
if (contrasenya.length > 8) {
  console.log('Contrasenya llarga');
}

//if else
const contrasenya2 = 'curtet';
if (contrasenya2.length >= 8) {
  console.log('Contrasenya llarga');
} else {
  console.log('Contrasenya massa curta');
}

//if else if else
const contrasenya3 = 'barrufa';
if (contrasenya3.length >= 8) {
  console.log('Contrasenya llarga');
} else if (contrasenya3.length >= 6) {
  console.log('Contrasenya mitjana');
} else {
  console.log('Contrasenya massa curta');
}

//operadors lògics ------------------------------
//|| --> OR o bé, && --> AND
//! --> NOT
console.log('operadors lògics ------------------------');

//const minuscules = /[a-z]/;
const majuscules = /[A-Z]/;
const numeros = /[0-9]/;
const simbols = /[!@#$%^&*()_+-=\[\]{}\;'"\\|,.<>\/?]/;

const contrasenya4 = 'demaSera un altreDia4!!@';

if (
  !majuscules.test(contrasenya4) &&
  !numeros.test(contrasenya4) &&
  !simbols.test(contrasenya4) // retorna true o false
) {
  console.log(`
  Constrasenya poc segura. No inclou:
  majúscules, números ni símbols
  `);
} else if (
  contrasenya4.match(numeros) === null ||
  contrasenya4.match(simbols) === null //retorna un array o null
) {
  console.log(contrasenya4.match(numeros), contrasenya4.match(simbols));
  console.log(`
  Constrasenya poc segura. No inclou:
  números o bé símbols
  `);
} else if (!contrasenya4.includes('@')) {
  console.log(`
  Constrasenya ha d'incloure '@' `);
} else {
  console.log('Contrasenya segura');
}
contrasenya4.match(numeros) === null || contrasenya4.match(simbols) === null;


let usuari = false;

if (!usuari) { //!!usuari converteix a Booleà
  console.log('Usuari no autenticat');
} else {
  console.log('Usuari autenticat');
}

//break i continue
const puntuacions = [16, 277, 38, 0, 488, 58, 10, 699, 70, 8, 1000, 110];

for (let puntuacio in puntuacions) {
  if (puntuacions[puntuacio] <=10) { //es salta les menors de 10 i no fa res
    continue;
  }
  if (puntuacions[puntuacio] === 1000) { //para qua veu 1000
    console.log('Has arribat a 1000 punts! Màxima puntuació');
    break;
  }
  console.log("puntuacio", puntuacio, "és --> ", puntuacions[puntuacio]);
}

//switch
const nota = 3;
switch (nota) {
  case 1:
    console.log('nota 1');
    break;
  case 2:
    console.log('nota 2');
    break;
  case 3:
    console.log('nota 3');
    break;
  case 4:
    console.log('nota 4');
    break;
  case 5:
    console.log('nota 5');
    break;
  default:
    console.log('nota no reconeguda');
    break;
};

//àmbit variables
const edatAmbit = 30;

if (edat) {
  const edatAmbit = 40;
  console.log(`Edat és ${edatAmbit}`);

  if (edat) {
    const edatAmbit = 50;
    console.log(`Edat és ${edatAmbit} ara`);
  }
}
console.log("edatAmbit -->",edatAmbit);






