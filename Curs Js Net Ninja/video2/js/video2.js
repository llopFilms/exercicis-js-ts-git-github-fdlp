console.log('Entorn de proves');
//consola ------------------------------
console.log('consola ------------------------------');

var nomPersona = 'Joan';
console.log('nomPersona -->', nomPersona);

let edat = 25;
let aniversari = 2019;
console.log('edat -->', edat);
console.log('aniversari -->', aniversari);

edat = 30;
console.log('edat -->', edat);
console.log('aniversari -->', aniversari);

const iva = 21;
console.log('iva -->', iva);
/* iva = 25;
console.log(iva); */

//strings ----------------------------
console.log('strings ------------------------------');

let correuElectronic = 'jordi@prova.cat';
console.log('correuElectronic -->', correuElectronic);

//concatenació de srtings
let nom = 'Pep';
let cognom = 'Perez';
//let nomComplet = nom + ' ' + cognom;
let nomComplet = `${nom} ${cognom}`;
console.log('nomComplet -->', nomComplet);

//recollint caràcters
let perimeraLletra = nomComplet[0];
console.log('perimeraLletra -->', perimeraLletra);

//recollint mida d'un string (propietat)
let longitud = nomComplet.length;
console.log('longitud -->', longitud);

//mètodes de strings
console.log(nomComplet.toUpperCase()); //no altera l'original
let minuscula = nomComplet.toLowerCase();
console.log('minuscula -->', minuscula);
console.log('nomComplet -->', nomComplet);

//index
let index = correuElectronic.indexOf('a');
console.log('index -->', index);
let ultimIndex = correuElectronic.lastIndexOf('a');
console.log('ultimIndex -->', ultimIndex);

//slice
let nomCorreu = correuElectronic.slice(0, 5);
console.log('nomCorreu -->', nomCorreu);
let restaCorreu = correuElectronic.slice(5); // a partir de index 5
console.log('restaCorreu -->', restaCorreu);

//substring
let substring = correuElectronic.substring(0, 9); // a partir de index 0, 5 posicions
console.log('substring -->', substring);

//replace
let canviPrimeraLletra = correuElectronic.replace('a', '4'); //canvia el primer que troba
console.log('canviPrimeraLletra -->', canviPrimeraLletra);
let canviAs = /[a]/g;
let canviTotsAs = correuElectronic.replace(canviAs, '4'); // canvia tots els que hi ha
console.log('canviTotsAs -->', canviTotsAs);

//numbers -----------------------------
console.log('numbers ------------------------------');

let radi = 10;
const pi = 3.1416;
console.log('radi -->', radi);
console.log('pi -->', pi);

// operadors: +, -, *, /, %, **
let suma = 1 + 2;
console.log('suma -->', suma);
let resta = 10 - 5;
console.log('resta -->', resta);
let producte = 2 * 3;
console.log('producte -->', producte);
let divisio = 10 / 2;
console.log('divisio -->', divisio);
let modul = 11 % 3;
console.log('modul -->', modul);

/* ordre operadors --> BIDMAS
ordre:
1. PARENTESIS (parenteses)
2. EXPONENT (index)
3. DIVISIO (division)
4. MULTIPLICACIO (multiplication)
5. MODUL (module)
6. SUMA (addition)
7. RESTA (substraction)
*/
let area = pi * radi ** 2;
console.log('area -->', area);
let calcul = 5 * (10 - 3) ** 2;
console.log('calcul -->', calcul);

let magrada1mes = 10;
//magrada1mes = magrada1mes + 1;
magrada1mes++;
console.log('magrada1mes -->', magrada1mes);

let magrada1menys = 10;
//magrada1menys = magrada1menys - 1;
magrada1menys--;
console.log('magrada1menys -->', magrada1menys);

let magradaInc = 10;
magradaInc += 5;
//magrada = magrada + 5;
console.log('magradaInc -->', magradaInc);

let magradaDec = 10;
magradaDec -= 5;
//magrada = magrada - 5;
console.log('magradaDec -->', magradaDec);

let magradaMult = 10;
magradaMult *= 5;
//magrada = magrada * 5;
console.log('magradaMult -->', magradaMult);

let magradaDiv = 10;
magradaDiv /= 5;
//magrada = magrada / 5;
console.log('magradaDiv -->', magradaDiv);

//NaN - not a number
console.log(10 / 'hola');
console.log(5 * 'adios');

//template strings
const titol = 'Millors lectures del 2022';
const llibre = 'Pepe Gotera el grande';
const magrada = 254;

//interpolació
const textInterpolat = titol + ' de ' + llibre + ' (' + magrada + " m'agrada)";
console.log('textInterpolat -->', textInterpolat);

//template strings
const textTemplate = `${titol} de ${llibre} (${magrada} m'agrada)`;
console.log('textTemplate -->', textTemplate);

//html template strings
const html = `
  <h2>${titol}</h2>
  <p>${llibre}</p>
  <p>${magrada} m'agrada</p>
`;
console.log('html -->', html);
document.getElementById('respostaHtml').innerHTML = html;

// booleans -----------------------------
console.log('booleans ------------------------------');

let variableTrue = true;
let variableFalse = false;
console.log('variableTrue -->', variableTrue);
console.log('variableFalse -->', variableFalse);

//mètodes que retornen booleans
let correuElectronic2 = 'jordi@prova.cat';
console.log('correuElectronic2 -->', correuElectronic2);
let conteArroba = correuElectronic2.includes('@');
console.log('conteArroba -->', conteArroba);

let barrufets2 = ['rondinaire', 'forçut', 'presumit'];
console.log('barrufets2 -->', barrufets2);
let conteRondinaire = barrufets2.includes('rondinaire');
console.log('conteRondinaire -->', conteRondinaire);

//oprados de comparació
const edatAmic = 45;
console.log('edatAmic == 45 -->', edatAmic == 45); //true
console.log('edatAmic == 50 -->', edatAmic == 50); //false
console.log('edatAmic != 45-->', edatAmic != 45); //false
console.log('edatAmic != 50-->', edatAmic != 50); //true
console.log('edatAmic > 45 -->', edatAmic > 45); //false
console.log('edatAmic < 45 -->', edatAmic < 45); //false
console.log('edatAmic >= 45 -->', edatAmic >= 45); //true
console.log('edatAmic <= 45 -->', edatAmic <= 45); //true

const nomAmic = 'Joan';
console.log("nomAmic és 'Joan' -->", nomAmic == 'Joan'); //true
console.log("nomAmic no és 'joan' -->", nomAmic == 'joan'); //false perquè Js és sensible a les majúscules/minúscules
console.log("nomAmic no és 'Joan' -->", nomAmic != 'Joan'); //false

//comparació ambigua
console.log('edatAmic és 45 (loose) -->', edatAmic == 45); //true
console.log("edatAmic és '45' (loose) -->", edatAmic == '45'); //true
console.log('edatAmic no és 45 (loose) -->', edatAmic != 45); //false
console.log("edatAmic no és '45' (loose) -->", edatAmic != '45'); //false

//comparació estricta
console.log('edatAmic és 45 (strict) -->', edatAmic === 45); //true
console.log("edatAmic és '45' (strict) -->", edatAmic === '45'); //false
console.log('edatAmic no és 45 (strict) -->', edatAmic !== 45); //false
console.log("edatAmic no és '45' (strict) -->", edatAmic !== '45'); //true

//conversió de tipus
//Number()
let puntuacio = 100;
console.log('puntuació + 1 -->', puntuacio + 1); //101 type number
let puntuacioString = '100';
console.log(
  'puntuacioString + 1 -->',
  puntuacioString + 1,
  typeof puntuacioString
); //1001 type string
let conversioPuntuacio = Number(puntuacioString);
console.log(
  'conversioPuntuacio + 1 -->',
  conversioPuntuacio + 1,
  typeof conversioPuntuacio
); //101 type number
let varNoDefinida;
console.log(
  'varNoDefinida + 1 -->',
  Number(varNoDefinida),
  typeof Number(varNoDefinida)
); //NaN type number
let varNula = null;
console.log('varNula + 1 -->', Number(varNula), typeof Number(varNula)); //0 type number
let varCert = true;
console.log('varCert -->', Number(varCert), typeof Number(varCert)); //1 type number
let varFals = false;
console.log('varFals -->', Number(varFals), typeof Number(varFals)); //0 type number

//String()
let puntuacio2 = 200;
console.log('puntuacio2 -->', String(puntuacio2), typeof String(puntuacio2)); //200 type string

//Boolean()
let nomNou = 'Joan';
console.log('nomNou "Joan" -->', Boolean(nomNou), typeof Boolean(nomNou)); //true type boolean
let puntuacio3 = 300;
console.log(
  'puntuacio3 300 -->',
  Boolean(puntuacio3),
  typeof Boolean(puntuacio3)
);
//true type boolean
let puntuacio4 = 0;
console.log(
  'puntuacio4 0 -->',
  Boolean(puntuacio4),
  typeof Boolean(puntuacio4)
);
//false type boolean
let puntuacio5 = '';
console.log(
  'puntuacio5 "" -->',
  Boolean(puntuacio5),
  typeof Boolean(puntuacio5)
);
//false type boolean
let puntuacio6;
console.log(
  'puntuacio6 undefined -->',
  Boolean(puntuacio6),
  typeof Boolean(puntuacio6)
);
//false type boolean
let puntuacio7 = null;
console.log(
  'puntuacio7 null -->',
  Boolean(puntuacio7),
  typeof Boolean(puntuacio7)
);
//false type boolean

//arrays -----------------------------
console.log('arrays ------------------------------');

let barrufets = ['rondinaire', 'forçut', 'presumit'];
console.log('barrufets -->', barrufets);

//mida de l'array
const midaBarrufets = barrufets.length;
console.log('midaBarrufets -->', midaBarrufets);

//veure un element
console.log('barrufet 1 -->', barrufets[1]);

//canviar un element
barrufets[2] = 'pintor';
console.log('barrufet 2 -->', barrufets[2]);
console.log('barrufets -->', barrufets);

//mostrar un array
let mostrar = barrufets.join(', ');
console.log('mostrar -->', mostrar);

//buscar element dins l'array
const indexPintor = barrufets.indexOf('pintor');
console.log('indexPintor -->', indexPintor);

//Ajuntar arrays
const barrufetsExtra = ['músic', 'inventor'];

//concat
const barrufetsConcat = barrufets.concat(barrufetsExtra);
console.log('barrufetsConcat -->', barrufetsConcat);

//spread operator
const barrufetsSpreadOp = [...barrufets, ...barrufetsExtra];
console.log('barrufetsSpreadOp -->', barrufetsSpreadOp);

//afegir nou element
let barrufetsPush = barrufetsSpreadOp.push('pallasso');
console.log('barrufetsPush -->', barrufetsPush); //retorna la mida
console.log('barrufetsSpreadOp -->', barrufetsSpreadOp);

//treure un element
let barrufetPop = barrufetsSpreadOp.pop(); //retorna element extret
console.log('barrufetPop -->', barrufetPop);
console.log('barrufetsSpreadOp -->', barrufetsSpreadOp);

//esborrar un element determinat --> splice(index inici, quantitat)
let barrufetsSplicetEsborrats = barrufetsSpreadOp.splice(2, 2); //retorna array dels elements eliminats
console.log('barrufetsSplicetEsborrats -->', barrufetsSplicetEsborrats);
console.log('barrufetsSpreadOp -->', barrufetsSpreadOp);

//substituir un element --> splice(index inici, quantitat a esborrar, element/s a afegir)
let barrufetsSpliceSubstituïts = barrufetsSpreadOp.splice(
  1,
  1,
  'pallasso',
  'poeta',
  'escriptor'
); //retorna array amb elements eliminats
console.log('barrufetsSpliceSubstituïts -->', barrufetsSpliceSubstituïts);
console.log('barrufetsSpreadOp -->', barrufetsSpreadOp);

//inserir un element --> splice(index inici, quantitat a esborrar, element/s a afegir)
let barrufetsSpliceInserits = barrufetsSpreadOp.splice(4, 0, 'científic'); //retorna array amb elements eliminats
console.log('barrufetsSpliceInserits -->', barrufetsSpliceInserits);
console.log('barrufetsSpreadOp -->', barrufetsSpreadOp);

//valor undefined --> Variable declarada però no assignat cap valor
let variableNoDefinida;
console.log('variableNoDefinida -->', variableNoDefinida);
let variableNoDefinida2 = variableNoDefinida + 3;
console.log('variableNoDefinida2 -->', variableNoDefinida2); // undefined + number = NaN
let variableNoDefinida3 = `M'agrada la variable ${variableNoDefinida}`;
console.log('variableNoDefinida3 -->', variableNoDefinida3); // undefined dins de l'string

//valor null --> Variable declarada i assignada sense cap valor
let variableNull = null;
console.log('variableNull -->', variableNull);
let variableNull2 = variableNull + 3;
console.log('variableNull2 -->', variableNull2); // null + number = 0 + number
let variableNull3 = `M'agrada la variable ${variableNull}`;
console.log('variableNull3 -->', variableNull3); // null dins de l'string
