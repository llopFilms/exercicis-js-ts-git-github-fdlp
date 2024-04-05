console.log('---------------- main3.js -----------------');

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
  afegirAficioRondinaire(aficio) {
    this.aficions.push(aficio);
  },
  llistarAficionsRondinaire() {
    console.log('Aficions barrufet rondinaire');
    console.table(this.aficions);
  },
  toStringRondinaire() {
    console.log('Objecte barrufet rondinaire');
    console.table(this);
  },
};
console.log('barrufetRondinaire');
console.table(barrufetRondinaire);

//afegir mètodes
barrufetRondinaire.forEachAficionsRondinaire = function () {
  this.aficions.forEach((aficio) => {
    console.log(`No em barrufa ${aficio}!`);
  });
};

//des d'una variable
const queixar_seRondinaire = () => {
  console.log('No em barrufa tot en general!');
};
barrufetRondinaire.queixar_seRondinaire = queixar_seRondinaire;
console.log('barrufetRondinaire');
console.table(barrufetRondinaire);

//invocació mètodes
barrufetRondinaire.queixar_seRondinaire();
barrufetRondinaire.afegirAficioRondinaire('protestar');
barrufetRondinaire.llistarAficionsRondinaire();
barrufetRondinaire.toStringRondinaire();
barrufetRondinaire.forEachAficionsRondinaire();

//array d'objectes a dins d'objectes
const barrufetPresumit = {
  nom: 'Presumit',
  edat: 427,
  correu: 'presumit@barrufets.cat',
  aficions: [
    {
      nom: 'presumir',
      enCompanyia: true,
      copsAlDia: 10,
    },
    {
      nom: 'mirar-se al mirall',
      enCompanyia: false,
      copsAlDia: 15,
    },
    {
      nom: 'pentinar-se',
      enCompanyia: false,
      copsAlDia: 3,
    },
  ],
  afegirAficioPresumit(aficio) {
    this.aficions.push(aficio);
  },
  llistarAficionsPresumit() {
    console.log('Aficions barrufet presumit');
    console.table(this.aficions);
  },
  forEachPresumit() {
    console.log('forEach aficions barrufet presumit');
    this.aficions.forEach((aficio) => {
      console.log(`
      Afició: ${aficio.nom}
      En companyia: ${aficio.enCompanyia}
      Cops al dia: ${aficio.copsAlDia}
      `);
    });
  },
  toStringPresumit() {
    console.log('Objecte barrufet presumit');
    console.table(this);
  },
};

//invocar mètodes
barrufetPresumit.afegirAficioPresumit({
  nom: 'maquillar-se',
  enCompanyia: false,
  copsAlDia: 1,
});
barrufetPresumit.llistarAficionsPresumit();
barrufetPresumit.forEachPresumit();
barrufetPresumit.toStringPresumit();

//objecte Math

//constants de Math
console.log('Math.PI -->', Math.PI);

//aproximació de números
const area = 7.7;

console.log('Math.round -->', Math.round(area)); //arrodoniment
console.log('Math.ceil -->', Math.ceil(area)); //arrodoniment per sobre
console.log('Math.floor -->', Math.floor(area)); //arrodoniment per sota
console.log('Math.trunc -->', Math.trunc(area)); //retorna part entera
console.log('Math.sign -->', Math.sign(area)); //1 per positiu, -1 per negatiu, 0 per 0

//números aleatoris
const aleatori = Math.random(); //aleatori entre 0 i 1, excloent l'1
console.log('Math.random -->', aleatori);

//generar un nombre aleatori entre 0 i 2
const aleatori2 = Math.round(Math.random() * 2);
console.log('Math.round(Math.random() * 2) -->', aleatori2);

//generar un nombre aleatori entre 1 i 3
const aleatori3 = Math.ceil(Math.random() * 3);
console.log('Math.ceil(Math.random() * 3) -->', aleatori3);

//generar un nombre aleatori entre un rang Max i Min
//Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
//aleatori entre 0 i 5
const aleatori4 = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
console.log('Math.floor(Math.random() * (5 - 0 + 1)) + 0 -->', aleatori4);

//aleatori entre 1 i 6
const aleatori5 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log('Math.floor(Math.random() * (6 - 1 + 1)) + 1 -->', aleatori5);

//còpies d'objectes
//còpies de valors primitius (string, number i booleà), fa còpia del valor
//còpia i variació valor primitiu
const puntuacio1 = 50;
let puntuacio2 = puntuacio1;
puntuacio2 = 51;
console.log('puntuacio1 -->', puntuacio1);
console.log('puntuacio2 -->', puntuacio2);

//còpies de valors de referència (objectes, arrays), fa una còpia de l'apuntador a la refereència, però no de l'objecte. Una modificació de l'objecte, modifica els dos apuntadors (original i còpia)
//còpia i variació valor de referència
const persona1 = {
  nom: 'Joan',
  cognom: 'Perez',
  edat: 25,
};
const persona2 = persona1;
persona2.edat = 26;
console.log('persona1 -->', persona1);
console.log('persona2 -->', persona2);

//shallow copy
//objectes sense niuar --> spread operator i còpia ok
const persona3 = {
  nom: 'Maria',
  cognom: 'Giménez',
  edat: 37,
};
const persona4 = { ...persona3 };
persona4.edat = 38;
console.log('person3 -->', persona3);
console.log('persona4 -->', persona4);

//objectes niuats, shallow copy no funciona
const programaA = {
  nom: 'arxivador v.1.0',
  extraInfo: { versio: 1, zip: true, publicat: '24/3/23' },
};
const programaAShallowCopia = { ...programaA };
programaAShallowCopia.nom = 'arxivador v.2.0';
programaAShallowCopia.extraInfo.versio = 2;
programaAShallowCopia.extraInfo.zip = false;
programaAShallowCopia.extraInfo.publicat = '25/3/23';
console.log(programaA);
console.table(programaA);
console.log(programaAShallowCopia);
console.table(programaAShallowCopia);

//deep copy per objectes niuats
const programaB = {
  nom: 'compilador v.3.0',
  extraInfo: { versio: 3, zip: true, publicat: '10/4/22' },
};
const programaBDeepCopia = JSON.parse(JSON.stringify(programaB));
programaBDeepCopia.nom = 'compilador v.4.0';
programaBDeepCopia.extraInfo.versio = 4;
programaBDeepCopia.extraInfo.zip = false;
programaBDeepCopia.extraInfo.publicat = '11/4/22';
console.log(programaB);
console.table(programaB);
console.log(programaBDeepCopia);
console.table(programaBDeepCopia);

//còpies arrays
//arrays de valors
const barrufetsSerie = ['de les ulleres', 'rondinaire', 'presumit'];
const còpiaBarryfetsSerie = [...barrufetsSerie];
còpiaBarryfetsSerie[0] = 'gran barufet';
console.log(barrufetsSerie);
console.table(barrufetsSerie);
console.log(còpiaBarryfetsSerie);
console.table(còpiaBarryfetsSerie);

//arrays d'objectes shallow copy a un nivell amb spread operator no funciona
const barufetsSerieObj = [
  {
    nom: 'de les ulleres',
    edat: 325,
    correu: 'delerulleres@barrufets.cat',
    aficions: ['llegir', 'inspeccionar', 'investigar'],
  },
  {
    nom: 'rondinaire',
    edat: 325,
    correu: 'derondinaire@barrufets.cat',
    aficions: ['protestar', 'grunyir', 'queixar-se'],
  },
  {
    nom: 'presumit',
    edat: 365,
    correu: 'presumit@barrufets.cat',
    aficions: ['pentinar-se', 'maquillatge', 'perruqueria'],
  },
];
const copiaShallowBarrufetsSerieObj = [...barufetsSerieObj];
copiaShallowBarrufetsSerieObj[0].nom = 'gran barufet';
copiaShallowBarrufetsSerieObj[0].edat = 627;
copiaShallowBarrufetsSerieObj[0].correu = 'granbarufet@barrufets.cat';
copiaShallowBarrufetsSerieObj[0].aficions[0] = 'manar molt';
console.log('barufetsSerieObj');
console.table(barufetsSerieObj);
console.log('copiaShallowBarrufetsSerieObj');
console.table(copiaShallowBarrufetsSerieObj);

//arrays d'objectes deep copy a un nivell amb JSON.parse i JSON.stringify sí que  funciona
const barufetsSerieObjBis = [
  {
    nom: 'de les ulleres',
    edat: 325,
    correu: 'delerulleres@barrufets.cat',
    aficions: ['llegir', 'inspeccionar', 'investigar'],
  },
  {
    nom: 'rondinaire',
        enCompanyia: false,
        copsAlDia: 15,
    edat: 325,
    correu: 'derondinaire@barrufets.cat',
    aficions: ['protestar', 'grunyir', 'queixar-se'],
  },
  {
    nom: 'presumit',
    edat: 365,
    correu: 'presumit@barrufets.cat',
    aficions: ['pentinar-se', 'maquillatge', 'perruqueria'],
  },
];

const copiaDeepBarrufetsSerieObjBis = JSON.parse(
  JSON.stringify(barufetsSerieObjBis)
);
copiaDeepBarrufetsSerieObjBis[0].nom = 'gran barufet';
copiaDeepBarrufetsSerieObjBis[0].edat = 627;
copiaDeepBarrufetsSerieObjBis[0].correu = 'granbarufet@barrufets.cat';
copiaDeepBarrufetsSerieObjBis[0].aficions[0] = 'manar molt';
console.log('barufetsSerieObjBis');
console.table(barufetsSerieObjBis);
console.log('copiaDeepBarrufetsSerieObjBis');
console.table(copiaDeepBarrufetsSerieObjBis);

//arrays d'objectes deep copy a més d'un nivell amb JSON.parse i JSON.stringify sí que  funciona
const barufetsSerieObjTris = [
  {
    nom: 'de les ulleres',
    edat: 325,
    correu: 'delerulleres@barrufets.cat',
    aficions: [
      {
        nom: 'llegir',
        enCompanyia: false,
        copsAlDia: 4,
      },
      {
        nom: 'inspeccionar',
        enCompanyia: false,
        copsAlDia: 6,
      },
      {
        nom: 'estudiar',
        enCompanyia: false,
        copsAlDia: 2,
      },
    ],
  },
  {
    nom: 'rondinaire',
    edat: 325,
    correu: 'derondinaire@barrufets.cat',
    aficions: [
      {
        nom: 'protestar',
        enCompanyia: true,
        copsAlDia: 10,
      },
      {
        nom: 'grunyir',
        enCompanyia: false,
        copsAlDia: 5,
      },
      {
        nom: 'queixar-se',
        enCompanyia: true,
        copsAlDia: 25,
      },
    ],
  },
  {
    nom: 'presumit',
    edat: 365,
    correu: 'presumit@barrufets.cat',
    aficions: [
      {
        nom: 'pentinar-se',
        enCompanyia: false,
        copsAlDia: 3,
      },
      {
        nom: 'mirar-se al mirall',
        enCompanyia: true,
        copsAlDia: 15,
      },
      {
        nom: 'perruqueria',
        enCompanyia: false,
        copsAlDia: 3,
      },
    ],
  },
];

const copiaDeepBarrufetsSerieObjTris = JSON.parse(
  JSON.stringify(barufetsSerieObjTris)
);
copiaDeepBarrufetsSerieObjTris[0].nom = 'gran barufet';
copiaDeepBarrufetsSerieObjTris[0].edat = 627;
copiaDeepBarrufetsSerieObjTris[0].correu = 'granbarufet@barrufets.cat';
copiaDeepBarrufetsSerieObjTris[0].aficions[0] = {
  nom: 'manar molt',
  enCompanyia: true,
  copsAlDia: 30,
}  ;
console.log('barufetsSerieObjTris');
console.table(barufetsSerieObjTris);
console.log("barufetsSerieObjTris[0] -->",barufetsSerieObjTris[0]);
console.log('copiaDeepBarrufetsSerieObjTris');
console.table(copiaDeepBarrufetsSerieObjTris);
console.log('copiaDeepBarrufetsSerieObjTris[0] -->', copiaDeepBarrufetsSerieObjTris[0]);

