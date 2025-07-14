console.log('***** carregat index.js *****');
console.log('***** doc1 *****');

console.log('----- Verificar objectes buits -----');
const calaixosCuina = [
  { contingut: 'forquilles' },
  { contingut: 'ganivets' },
  { contingut: 'culleres' },
  {},
  { contingut: 'estovalles' },
  { contingut: 'tovallons' },
  {},
  {},
];

for (const [index, calaix] of calaixosCuina.entries()) {
  Object.keys(calaix).length === 0
    ? console.log(`Calaix ${index + 1}: buit`)
    : console.log(`Calaix ${index + 1}: ${calaix.contingut}`);
}

console.log('----- Unir objectes -----');

const animal = {
  especie: 'Border collie',
  edat: 2,
  color: 'negre i blanc',
};

const caracter = {
  energia: true,
  docilitat: true,
  sociable: true,
};

const sanitat = {
  puces: false,
  leshmania: false,
};

const alimentacio = {
  racionsPerDia: 2,
  quantitat: '250gr',
  tipus: ['salmó', 'carn', 'arròs'],
};

const gos = {
  ...animal,
  ...caracter,
  ...sanitat,
  ...alimentacio,
};
console.table(gos);

console.log('----- Còpia shallow -----');

const persona = {
  nom: 'Ramon',
  cognom1: 'Rovira',
  cognom2: 'Ribalta',
};

const personaShallow = { ...persona };
console.log('persona: ', persona);
console.log('personaShallow: ', personaShallow);
console.log('És el mateix objecte? ', persona === personaShallow);

console.log('----- Còpia deep -----');

const personaDeep = JSON.parse(JSON.stringify(persona));
console.log('persona: ', persona);
console.log('personaDeep: ', personaDeep);
console.log('És el mateix objecte? ', persona === personaDeep);

console.log('----- Comptar propietats -----');

const regitreTreballador = {
  nom: 'Ramon',
  cognom1: 'Rovira',
  cognom2: 'Ribalta',
  carrec: 'Ingenier',
  departament: 'IT',
  telefon: '605297518',
  email: 'bLQ5d@exemple.cat',
};
console.log('Número de propietats: ', Object.keys(regitreTreballador).length);

console.log('----- Comprovar claus, valors i parells -----');

const claus = Object.keys(regitreTreballador);
console.log(claus);
const valors = Object.values(regitreTreballador);
console.log(valors);
const parells = Object.entries(regitreTreballador);
console.log(parells);
console.table(parells);

console.log('----- Comprovar la propietat concreta -----');

const propietat1 = 'telefon';
const propietat2 = 'email';
console.log(
  `Existeix la propietat ${propietat1}?`,
  propietat1 in regitreTreballador
);
console.log(
  `Existeix la propietat ${propietat2}?`,
  propietat2 in regitreTreballador
);

const propietat3 = 'càrrec';
const propietat4 = 'amistats';
console.log(
  `Existeix la propietat ${propietat3}`,
  regitreTreballador.hasOwnProperty(propietat3)
);
console.log(
  `Esxisteix la propietats ${propietat4}`,
  regitreTreballador.hasOwnProperty(propietat4)
);

console.log('------ Comprovar mètodes -----');

const amic = {
  nom: 'David',
  cognom: 'Espelt',
  telefon: '605297518',
  email: 'fr52d@exemple.cat',
  bonDia() {
    return 'Bon dia a tothom';
  },
  bonaNit() {
    return 'Bona nit tinguem';
  },
};

const metodesAmic = [];
for (const propietat in amic) {
  if (typeof amic[propietat] === 'function') {
    metodesAmic.push(propietat);
  }
}
console.log(metodesAmic);

const metodesAmic2 = Object.keys(amic).filter(
  (propietat) => typeof amic[propietat] === 'function'
);
console.log(metodesAmic2);

console.log('***** doc2 *****');
console.log('----- Clonar objectes -----');

const llibre = {
  titol: 'El senyor dels anells',
  autor: 'JRR Tolkien',
  any: 1954,
  pagines: 1216,
};

console.log('--- Incorrecte ---');
const llibreClon1 = llibre;
console.log('És el mateix objecte?', llibre === llibreClon1);

console.log('--- Correcte: shallow clon---');
const llibreClon2 = { ...llibre };
console.log('És el mateix objecte?', llibre === llibreClon2);

console.log('--- Correcte: deep clon---');
const llibreClon3 = JSON.parse(JSON.stringify(llibre));
console.log('És el mateix objecte?', llibre === llibreClon3);

console.log('----- Actualització objecte al mateix objecte-----');

const llibreActualitzat = {
  editorial: 'Panini',
  tapa: 'dura',
  preu: 45,
};
console.log('llibre -->', llibre);

const llibre2 = {
  ...llibre,
  ...llibreActualitzat,
};
console.log('llibreActualitzat2 -->', llibre2);

Object.assign(llibre, llibreActualitzat);
console.log('llibre -->', llibre);

console.log('----- Actualitació/unió objecte al objecte nou -----');

const llibreNou = {
  ...llibre,
  ...llibreActualitzat,
};
console.log('llibreNou -->', llibreNou);

console.log('----- Treure valors cridant la clau -----');

const cotxe = {
  marca: 'Mercedes',
  model: 'A 200',
  anyFabricacio: 2010,
  color: 'negre',
  preu: 40000,
};

const afegirParell = (key, value) => {
  cotxe[key] = value;
};

afegirParell('motor', 'Diesel');
afegirParell('velocitatMax', 180);
console.groupCollapsed('--- Vista for in ---');
for (const clau in cotxe) {
  console.log(`${clau}: ${cotxe[clau]}`);
}
console.groupEnd();

console.groupCollapsed('--- Vista for of ---');
for (const [clau, valor] of Object.entries(cotxe)) {
  console.log(`${clau}: ${valor}`);
}
console.groupEnd();

console.log('----- Eliminar propietats buides -----');

cotxe.rodaRecanvi = '';
cotxe.canvi = null;
cotxe.ratllades = undefined;
console.log('cotxe -->', cotxe);

const cotxeNet = Object.fromEntries(
  Object.entries(cotxe).filter(([key, value]) => Boolean(value))
);
console.log('cotxeNet -->', cotxeNet);

const cotxeNet2 = {};
for (const propietat in cotxe) {
  if (cotxe[propietat]) {
    cotxeNet2[propietat] = cotxe[propietat];
  }
}
console.log('cotxeNet2 -->', cotxeNet2);

console.log('----- Convertir objecte de paràmetres en queryParamters -----');

const url = 'www.llibreria.cat';
const peticio = {
  tipus: 'llibres',
  limit: 25,
};

const peticioQuery = Object.entries(peticio)
  .map(([key, value]) => `${key}=${value}`)
  .join('&');
const urlPeticio = `${url}?${peticioQuery}`;
console.log("urlPeticio -->",urlPeticio);

const peticioQuery2 = new URLSearchParams(peticio).toString();
const urlPeticio2 = `${url}?${peticioQuery2}`;
console.log("urlPeticio2 -->",urlPeticio2);
