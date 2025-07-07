console.log('***** carregat index.js *****');

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
console.log('Són iguals? ', persona === personaShallow);

console.log('----- Còpia deep -----');

const personaDeep = JSON.parse(JSON.stringify(persona));
console.log('persona: ', persona);
console.log('personaDeep: ', personaDeep);
console.log('Són iguals? ', persona === personaDeep);

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

for (const propietat in regitreTreballador) {
  console.log(`${propietat}: ${regitreTreballador[propietat]}`);
}

console.log('Número de propietats: ', Object.keys(regitreTreballador).length);

console.log('----- Comprovar claus, valors i parells -----');

const claus = Object.keys(regitreTreballador);
console.log(claus);
const valors = Object.values(regitreTreballador);
console.log(valors);
const parells = Object.entries(regitreTreballador);
console.log(parells);
console.table(parells);

console.log('----- Comrpovar la propietat -----');

const propietat1 = 'telefon';
const propietat2 = 'email';
console.log(
  `Existeix la propietat ${propietat1}?`,propietat1 in regitreTreballador
);
console.log(
  `Existeix la propietat ${propietat2}`, propietat2 in regitreTreballador
);

const propietat3 = "càrrec";
const propietat4 = "amistats";

console.log(
  `Existeix la propietat ${propietat3}?`,
  regitreTreballador.hasOwnProperty(propietat3)
);
console.log(`Esxisteix la propietats ${propietat4}?`,regitreTreballador.hasOwnProperty(propietat4));

