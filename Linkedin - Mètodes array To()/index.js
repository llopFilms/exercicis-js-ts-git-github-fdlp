console.log('***** carregat index.js *****');

console.log('----- findLast() -----');

const ordinals = [
  'Primer inici',
  'Segon inici',
  'Tercer',
  'Segon final',
  'Primer final',
  'Quart',
];

const ultimOrdinals = ordinals.findLast((element) =>
  element.includes('Primer')
);
console.table('ultimOrdinals -->', ultimOrdinals);

console.log('----- findLastIndex() -----');

const ultimOrdinalsIndex = ordinals.findLastIndex((element) =>
  element.includes('Primer')
);
console.log('ultimOrdinalsIndex -->', ultimOrdinalsIndex);

console.log('----- toReversed() -----');

const setmana = [
  'Dilluns',
  'Dimarts',
  'Dimecres',
  'Dijous',
  'Divendres',
  'Dissabte',
  'Diumenge',
];
const setmanaReversed = setmana.toReversed();
console.table('setmana -->', setmana);
console.table('setmanaReversed -->', setmanaReversed);

console.log('----- toSorted() -----');

const lletres = ['a', 'f', 't', 'd', 'u'];
const lletresSorted = lletres.toSorted();
console.table('lletres -->', lletres);
console.table('lletresSorted -->', lletresSorted);

const nums = [1, 33, 55, 23, 123, 13, 57, 2, 6];

const numsSortedUp = nums.toSorted((a, b) => a > b);
const numsSortedDown = nums.toSorted((a, b) => a < b);
console.log('nums -->', nums);
console.log('numsSortedUPp -->', numsSortedUp);
console.log('numsSortedDown -->', numsSortedDown);

console.log('----- toSpliced() -----');

const noms = ['Pere', 'Maria', 'Jordi', 'Mercè', 'Joana'];
const nomsEliminats = noms.toSpliced(1, 2);
const nomsSuibstituits = noms.toSpliced(1, 2, 'Ramon', 'Margarida');
const nomsInserits = noms.toSpliced(1, 0, 'Ramon', 'Albert');
console.log('noms -->', noms);
console.log('nomsEliminats -->', nomsEliminats);
console.log('nomsSuibstituits -->', nomsSuibstituits);
console.log('nomsInserits -->', nomsInserits);

console.log('----- with() -----');

const fruites = ["poma", "pera", "plàtan", "préssec"];
const fruitesWith = fruites.with(2, 'síndria');
console.log('fruites -->', fruites);
console.log('fruitesWith -->', fruitesWith);
