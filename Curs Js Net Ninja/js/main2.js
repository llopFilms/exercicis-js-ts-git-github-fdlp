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

//invocació sense arguments
bonDia2();
