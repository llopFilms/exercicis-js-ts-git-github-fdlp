console.log('---------------- main4.js -----------------');

//Seleccionar elements del DOM
//query només el primer que troba si n'hi ha més d'un
const primerP = document.querySelector('p');
console.log('primer paragraf -->', primerP.innerHTML);

const errorP = document.querySelector('.error');
console.log('errorP -->', errorP.innerHTML);

const errordiv = document.querySelector('div.error');
console.log('errordiv -->', errordiv.innerHTML);

//querySelectorAll retorna una nodeList, es pot fer servir forEach i [index] pillat per tag o classe
const totsElsP = document.querySelectorAll('p');
console.log('totsElsP -->', totsElsP);
totsElsP.forEach((para, index) => {
  console.log(`para ${index} -->`, para.innerHTML);
});

const totsElsError = document.querySelectorAll('.error');
console.log('totsElsError -->', totsElsError);
totsElsError.forEach((para, index) => {
  console.log(`para ${index} -->`, para.innerHTML);
});

//getElementsByTagName retorna una HTMLCollection, no es pot fer servir forEach però sí [index]
const totsElsPperTag = document.getElementsByTagName('p');
console.log('totsElsPperTag -->', totsElsPperTag);
console.log('totsElsPperTag[0] -->', totsElsPperTag[0].innerHTML);
console.log('totsElsPperTag[1] -->', totsElsPperTag[1].innerHTML);

//getElementsByClassName retorna una HTMLCollection, no es pot fer servir forEach però sí [index]
const totsElsError2 = document.getElementsByClassName('error');
console.log('totsElsError2 -->', totsElsError2);
console.log('totsElsError2[0] -->', totsElsError2[0].innerHTML);
console.log('totsElsError2[1] -->', totsElsError2[1].innerHTML);

let titol = document.getElementById('titol-de-pagina');
console.log('titol-de-pagina -->', titol.innerHTML);

//Modificar elements del DOM
//Canvi de text --> innerText
const primerPBis = document.querySelector('p');
primerPBis.innerText = 'Canviat el text de primerPBis';
console.log('primerP -->', primerPBis.innerHTML);

//Afegir text --> innerText +=
const totsElsPBis = document.querySelectorAll('p');
totsElsPBis.forEach((para, index) => {
  para.innerText += ` Afegint text una miqueta, al paràgraf ${index + 1}`;
  console.log(`para + text ${index} -->`, para.innerHTML);
});

//Canviar HTML --> innerHMTL
//sobrescriure element
const contingutCanvair = document.querySelector('.contingut');
contingutCanvair.innerHTML = '<h2>Això passa a ser un subtítol</h2>';
console.log('contingutCanvair -->', contingutCanvair.innerHTML);

//Afegir HTML --> innerHTML +=
//afegir elements a un element existent
const contingutAfegir = document.querySelector('.contingut');
contingutAfegir.innerHTML += '<p>Afegint HTML una miqueta</p>';
console.log('contingutAfegir -->', contingutAfegir.innerHTML);

const nomsDeGent = ['Pep', 'Maria', 'Joan'];
let htmlGent = '<ul>';
nomsDeGent.forEach((nom, index) => {
  htmlGent += `<li>Nom ${index + 1}: ${nom}</li>`;
});
htmlGent += '</ul>';
contingutAfegir.innerHTML += htmlGent;
console.log('contingutAfegir -->', contingutAfegir.innerHTML);

//Crear atributs
const errorPBis = document.querySelector('p.error');
errorPBis.setAttribute('style', 'color:red');
console.log('afegeix estils errorPBis -->', errorPBis.getAttribute('style'));

//Canviar valor a atributs
const enllaç = document.querySelector('a');
console.log('adreça enllaç -->', enllaç.getAttribute('href'));
enllaç.setAttribute('href', 'https://www.humancta.org');
enllaç.innerText = 'Enllaç a Human CTA';
console.log('nova adreça enllaç -->', enllaç.getAttribute('href'));

console.log('classe errorPBis -->', errorPBis.getAttribute('class'));
errorPBis.setAttribute('class', 'errorP');
console.log(
  'substitueix classe errorPBis -->',
  errorPBis.getAttribute('class')
);

//Afegir valors a atributs
const titolBis = document.querySelector('h1');
titolBis.style.textDecoration = 'underline';
console.log('titolBis -->', titolBis.getAttribute('style'));

//Eliminar atributs
const errorPBis2 = document.querySelector('p.errorP');
errorPBis2.removeAttribute('style');
console.log('errorPBis2 -->', errorPBis2.getAttribute('style'));

//Gestió de les classes
const missatge = document.querySelector('#missatge');
console.log('Classes missatge -->', missatge.classList);

function canviarColor() {
  if (missatge.classList.contains('be')) {
    //conté la classe
    missatge.innerText = 'Anem malament';
    missatge.classList.remove('be'); //treure classe
    missatge.classList.add('avis'); //afegir classe
  } else {
    missatge.innerText = 'Anem bé';
    missatge.classList.remove('avis');
    missatge.classList.add('be');
  }
}

const divIpsums = document.querySelectorAll('#ipsums > div');
console.log('divIpsums -->', divIpsums);

function canviarIpsums() {
  divIpsums.forEach((ipsum) => {
    //if (ipsum.innerText.includes('noError')) {
    if (ipsum.textContent.includes('noError')) {
      ipsum.classList.remove('noError');
      ipsum.classList.add('siError');
    } else {
      ipsum.classList.remove('siError');
      ipsum.classList.add('noError');
    }
  });
}

function invertirIpsums() {
  divIpsums.forEach((ipsum) => {
    //if (ipsum.innerText.includes('noError')) {
    if (ipsum.textContent.includes('noError')) {
      ipsum.classList.toggle('noError');
      ipsum.classList.toggle('siError');
    } else {
      ipsum.classList.toggle('siError');
      ipsum.classList.toggle('noError');
    }
  });
}

function revertirIpsums() {
  divIpsums.forEach((ipsum) => {
    //if (ipsum.innerText.includes('noError')) {
    if (ipsum.textContent.includes('noError')) {
      ipsum.classList.remove('noError');
      ipsum.classList.remove('siError');
    } else {
      ipsum.classList.remove('siError');
      ipsum.classList.remove('noError');
    }
  });
}
