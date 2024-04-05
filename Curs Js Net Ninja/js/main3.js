console.log('---------------- main2.js -----------------');

//objectes literals
const barrufetDeLesUlleres = {
  nom: 'De les ulleres',
  edat: 325,
  correu: 'delerulleres@barrufets.cat',
  aficions: ['llegir', 'inspeccionar', 'investigar'],
};

//accés a l'objecte
console.log('barrufetDeLesUlleres');
console.table(barrufetDeLesUlleres);

//accés a les propietats
console.log('Nom barrufet -->', barrufetDeLesUlleres.nom);
console.log('Nom barrufet -->', barrufetDeLesUlleres['nom']);
//des d'una variable
const propietatCorreuBarrufet = 'correu';
console.log(
  'Correu barrufet --> ',
  barrufetDeLesUlleres[propietatCorreuBarrufet]
);
const propietatsBarrufets = ['nom', 'edat', 'correu', 'aficions'];
console.log('Edat barrufet --> ', barrufetDeLesUlleres[propietatsBarrufets[1]]);

//canvi de valor propietats
barrufetDeLesUlleres.edat = 627;
console.log('Nova edat barrufet -->', barrufetDeLesUlleres.edat);

//creació nova propietat
barrufetDeLesUlleres.color = 'blau';
console.log('barrufetDeLesUlleres');
console.table(barrufetDeLesUlleres);
//des d'una variable
const colorVestit = 'blanc';
barrufetDeLesUlleres.vestit = colorVestit;
console.log('barrufetDeLesUlleres');
console.table(barrufetDeLesUlleres);

//nètodes
const barrufetRondinaire = {
  nom: 'Rondinaire',
  edat: 427,
  correu: 'rondinaire@barrufets.cat',
  aficions: ['queixar-se', 'posar morros', 'grunyir'],
  afegirAficio(aficio) {
    this.aficions.push(aficio);
  },
  llistarAficions() {
    console.table(this.aficions);
  },
  toString() {
    console.table(this);
  },
};
console.log('barrufetRondinaire');
console.table(barrufetRondinaire);

//afegir mètodes
barrufetRondinaire.rondinarAficions = function () {
  this.aficions.forEach((aficio) => {
    console.log(`No em barrufa ${aficio}!`);
  });
};

//des d'una variable
const queixar_se = () => {
  console.log('No em barrufa!');
};
barrufetRondinaire.queixar_se = queixar_se;
console.log('barrufetRondinaire');
console.table(barrufetRondinaire);

//invocació mètodes
barrufetRondinaire.queixar_se();
barrufetRondinaire.afegirAficio('protestar');
console.log('barrufetRondinaire');
barrufetRondinaire.llistarAficions();
barrufetRondinaire.toString();
barrufetRondinaire.rondinarAficions();
