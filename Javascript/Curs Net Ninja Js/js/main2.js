console.log('---------------- main2.js -----------------');

//declaració de funcions --> no van a una variable
function saludar() {
  console.log('Funció saludar() --> Saludar');
}

//invocació
saludar();

//expressió de funcions --> sí que van a una variable
const parlar = function () {
  console.log('Funció parlar() --> Parlar');
};

//invocació
parlar();

//paràmetre
const bonDia = function (nom, hora) {
  console.log(`Funció bonDia() --> Bon dia ${nom}, hora ${hora}`);
};

//invocació amb arguments
bonDia('Pep', '9:00');

//paràmetres per defecte
const bonDia2 = function (nom = 'Ramon', hora = '11:00') {
  console.log(`Funció bonDia2() --> Bon dia ${nom}, hora ${hora}`);
};

//invocació amb valors per defecte (sense arguments)
bonDia2();
//invocació amb valors per defecte (amb arguments)
bonDia2('Pep', '9:00');

//retornant valors
const pi = 3.1416;
const calcArea = function (radi) {
  let area = pi * radi ** 2;
  let area2dec = Math.round(area * 100) / 100;
  return area2dec;
};
let areaCalculada = calcArea(10);
console.log('Àrea calculada-- > ', areaCalculada);

function factura(productes, iva) {
  let total = 0;
  for (let i = 0; i < productes.length; i++) {
    total += productes[i] + (productes[i] * iva) / 100;
  }
  return total;
}
const totalFactura = factura([10, 20, 30], 21);
console.log('Total factura --> ', totalFactura);

//fucions fletxa
const calcVolumFletxa = (radi, altura) => {
  let volum = pi * radi ** 2 * altura;
  let volum2dec = Math.round(volum * 100) / 100;
  return volum2dec;
};
const volumCalculat = calcVolumFletxa(10, 14);
console.log('Volum calculat --> ', volumCalculat);

const totalFacturaFLetxa = (productes, iva) => {
  let total = 0;
  for (let i = 0; i < productes.length; i++) {
    total += productes[i] + (productes[i] * iva) / 100;
  }
  return total;
};
console.log('Total factura 2 --> ', totalFacturaFLetxa([10, 20, 30], 21));

//funció fletxa resumida
const calcVolum2 = (radi, altura) =>
  Math.round(pi * radi ** 2 * altura * 100) / 100;
const volumCalculat2 = calcVolum2(10, 14);
console.log('Volum calculat 2 --> ', volumCalculat2);

//funció fletxa sense return
const dirHola = (nom) => {
  console.log(`Hola + ${nom}`);
};
console.log("dirHola -->", dirHola('Ramon Maria'));

//funcions vs mètodes
//funció
const saludar2 = (nom) => `Saludo a en ${nom}`;
const saludarPepet = saludar2('Pepet');
console.log('saludarPepet -->', saludarPepet);

//mètode --> fucions aplicades a un objecte o a un tipus de dada (nadiu de JS)
const nom = 'Pepet';
const nomMaj = nom.toUpperCase();
console.log('nomMaj -->', nomMaj);

//callbacks
const diu5 = (callback) => {
  for (let i = 0; i < 5; i++) {
    callback(i);
  }
};

//invocació
diu5(function (i) {
  console.log(`Hola ${i + 1}`);
});
//invocació en fletxa
diu5((i) => console.log(`Hola ${i + 1}`));

//forEach
const amics = ['Pep', 'Maria', 'Joan'];
const amics2 = [];
let salutacio;
/* amics.forEach(function(amic) {
  salutacio = `Hola ${amic}`;
  amics2.push(salutacio);
}); */
amics.forEach((amic) => {
  salutacio = `Hola ${amic}`;
  amics2.push(salutacio);
});
console.log("amics -->",amics);
console.log("amics2 -->",amics2);
