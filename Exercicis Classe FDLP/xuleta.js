
XULETA

CONSOLE
console.table(arrayObjectes);
console.log(variables);
console.clear;

AJUST DECIMALS
variable.toFixed(2);

AFEGIR ARXIUS
<script>"use strict"</script>
<script src = "./js/funcionsAuxiliars.js"></script>

MÈTODES SENSE VARIABLE
//afegir un objecte al principi de l'array
arrayobjectes.unshift(nomobjecte);

//afegir un objecte al final de l'array
arrayobjectes.push(nomobjecte);

//inserció d'un objecte a una posició concreta (els índex es reordenen)
arrayobjectes.splice(#posició inici inserció, 0, nounomobjecte a inserir); 

//substitució d'un objecte en una posició concreta
arrayobjectes.splice(#posició substituir, 1, nounomobjecte a substituir);

//esborrar un objecte en una posició concreta
arrayobjectes.splice(#posició a esborrar, 1); 

//esborrar el primer element (NO estic segur si val PER OBJECTES) de l'array
arrayobjectes.shift(nomobjecte);

//esborrar l'últim element (NO estic segur si val PER OBJECTES) de l'array
arrayobjectes.pop(nomobjecte);

MÈTODES AMB VARIABLE
//índex d'un objecte
let index = arrayobjectes.indexOf(nomobjecte);
retorna un índex

//recerca d'un índex d'un objecte pel valor d'un atribut
let index = arrayobjectes.findIndex(element => element.atribut == valor atribut);
retorna un índex

//recerca d'un sol objecte pel valor d'un atribut
let objecte = arrayobjectes.find(element => element.atribut === valor atribut); 
retorna un objecte

//recerca de tots objecte pel valor d'un atribut
let arrayobjectesnou = arrayobjectes.filter(element => element.atribut === valor atribut);
retorna un arrayobjectes

//ordena una array per ordre alfabètic per un valor d'atribut
let array = arrayobjectesnou = arrayobjectes.sort(element => element.atribut === valor atribut);
retorna un arrayobjectes

//consulta de si ALGUN objcete té el valor de l'atribut
let boolea = arrayobjectes.some(element => element.numCompte === valor atribut);
retorna un boolea

//consulta de si TOTS els objcetes tenen el valor de l'atribut
let boolea = arrayobjectes.every(element => element.numCompte === valor atribut);
retorna un boolea

//mètodes map() i forEach() encara No controlo

LOOPS DE RECERCA
//Per recórrer COMPLERT un array 2 ficat dins d'un array 1, concatenat a una variable i treure una llista
//FOR a llista
    let i, j;
    for (i=0; i<array1.length; i++) {

        for(j=0; j<array1[i].array2.length; j++){

            llista2 += . . . . 
        }

//Per recórrer PER BUSCAR UN ELEMENT en un array 2 ficat dins d'un array 1, concatenat a una variable
//FOR a llista (recorre tot l'array)
    let i, j;
    for (i=0; i<array1.length; i++) {
            
        for (j=0; j<array1[i].array2.length; j++) {
            
            if (valor atribut == array1[i].array2[j].atribut){

            resultat += . . . . 
            }
        }
    }

//Per recórrer PER BUSCAR UN ELEMENT en un array 2 ficat dins d'un array 1, concatenat a una variable
//WHILE a llista (es para quan ho troba)
    let i=0; let j; 
    while (i<array1.length) {
    j=0;    
        while (j<array1[i].array2.length) {
            
            if (valor atribut == array1[i].array2[j].atribut){

            resultat += . . . . 
            }
        j++;
        }
    i++;    
    }

ESTRUCTURA DE CLASSES
//Classe amb getters, setters, mètodes i toString(). Si hi ha un array a un atribut de la classe NO es posa al constructor).

//Classes principals = constructor + getter + setter + mètodes + toString()
//Classes secundàries = constructor + mètodes + toString()

Class Nomclasse {

    constructor (atribut1, atribut2, ...) {
        this.atribut1 = atribut1;
        this.atribut2 = atribut2;
        ...
        this.atribut = [];
    }

    //Getters
    getAtribut() { return this.atribut; } //al programa es crida objecte.getAtribut()
    get getAtribut() { return this.atribut; } //al programa es crida objecte.getAtribut

    //setters
    setAtribut(atribut) { this.atribut = atribut; } //al programa es crida objecte.setAtribut()
    set setAtribut(atribut) { this.atribut = atribut; } //al programa es crida objecte.setAtribut

    //mpetodes normals
    metode(atribut1, ...) { //sense 'function'
        let .... ;
        ........ ;
        return valor;
    }

    //mètode to String() (descripció de l'objecte en una llista). Es crida al programa: objecte.toString() o només amb el nom de l'objecte
    toString() {
        let llista += .... ;
        return llista;
    }
}

//Per crear objectes nous a partir d'una classe fora de l'array
let objecteNou = new Nomclasse (atribut1, atribut2, ...);

//i per ficar-lo a l'array
const arrayObjectes = [];
arrayObjectes.push(objecteNou);

//Per crear objectes a partir de la classe dins del propi array d'objcetes
const arrayObjectes = [

    new Nomclasse (atribut1, atribut2, ...);
    ... ;
];

//Per crear objectes sense classe
let objecteNou = {
        atribut1: valor1,
        atribut2: valor2,
        ...
        };

//o bé
let objecteNou = {atribut1: valor1, atribut2: valor2, ...};

//classe principal i mètodes
class Classeprincipal {
    constructor (atribut1) {
      this.atribut1 = atribut1;
      this.atribut2 = [];
    }
    //crea nous objectes a atribut2 i els hi fica dins
    omplirArrayAtribut2 (atribut2.1, atribut2.2) {       
        let objecteNou = new Classesecundaria (atribut2.1, atribut2.2);
        this.atribut2.push(objecteNou);
        return objecteNou;
    }
}
//classe secundària i mètodes
class Classesecundaria {
    constructor (atribut2.1, atribut2.2) {
        this.atribut2.1 = atribut2.1;
        this.atribut2.2 = atribut2.2;
    }

    toString() {
        let missatge += ...;
        return missatge
    }
}
 
//Funció per omplir arrayObjectes del tirón
function totPlegat() {

    //creem element amb valor 'atribut1' i atribut2 buit (és un array)
    let totPlegat = new Classeprincipal ('atribut1');

    //crea elements que van creats i introduïts directament a array d'atribut2
    totPLegat.omplirArrayAtribut2 ('atribut2.1', 'atribut2.2');
    totPLegat.omplirArrayAtribut2 ('atribut2.1', 'atribut2.2');
    ...;

    //fica tot l'element creat dins de arrayObjectes, creant arrayObjectes[0]
    arrayObjectes.push(totPlegat);

    //i així consecutivament...

    //missatge al final
    return "arrayObjectes completat!";
}

//fucions que es carreguen al principi de la pàgina
window.onload = function() {

    //veiem per cònsola que tot s'ha omplert i el missatge de totPLegat
    console.log(totPLegat());
    console.table(arrayObjectes);
}

//aparença arrayObjectes i localització
const arrayObjectes = [  

    { //creat amb Classe1
     atribut1: 'valor1',  //arrayObjectes[0].atribut1
     atribut2:            //arrayObjectes[0].atribut2
           [ //creat amb Classe2          
           {atribut2.1: 'valor2.1',   //arrayObjectes[0].atribut2[0].atribut2.1
            atribut2.2: 'valor2.2'},  //arrayObjectes[0].atribut2[0].atribut2.2
           {atribut2.1: 'valor2.1',   //arrayObjectes[0].atribut2[1].atribut2.1
            atribut2.2: 'valor2.2'}   //arrayObjectes[0].atribut2[1].atribut2.2
           ]
   },
   {
     atribut1: 'valor1', // arrayObjectes[1].atribut1
     atribut2:           // arrayObjectes[1].atribut2
           [
            {atribut2.1: 'valor2.1',   //arrayObjectes[1].atribut2[0].atribut2.1
             atribut2.2: 'valor2.2'},  //arrayObjectes[1].atribut2[0].atribut2.2
            {atribut2.1: 'valor2.1',   //arrayObjectes[1].atribut2[1].atribut2.1
             atribut2.2: 'valor2.2'}   //arrayObjectes[1].atribut2[1].atribut2.2
           ]
   }
] 

//Exemple
const agenda = [

    {  //agenda[0]
    categoria: 'Emergencias',//agenda[0].categoria = "Emergencias"
    contactos:
        [ 
            { //agenda[0].contactos[0]
            contacto: 'Emergencias todo tipo', //agenda[0].contactos[0].contacto = "Emergencias todo tipo"
            numeroTelefono: '112',             //agenda[0].contactos[0].numeroTelefono ='112'
            web: 'http://www.112.es/'          //agenda[0].contactos[0].web ='http://www.112.es/'
            }, 
            { //agenda[0].contactos[1]
            contacto: 'Policía',              //agenda[0].comntactos[1]...
            numeroTelefono: '091',            //agenda[0].comntactos[1]...
            web: 'http://www.policia.es/'     //agenda[0].comntactos[1]...
            }
        ]
    },

    { //agenda[1]  
      categoria: 'Tarjetas de Crédito',     //agenda[1].categoria = "Tarjetas...
      contactos:
        [  
            {  //agenda[1].contactos[0]
            contacto: 'Visa',               //agenda[1].contactos[0]...
            numeroTelefono: '900 991 124',                   
            web: 'https://www.visa.es/' 
            },  
            {  //agenda[1].contactos[1]
            contacto: 'American Express',   //agenda[1].contactos[1]...
            numeroTelefono: '900 814 500',
            web: 'https://www.americanexpress.com/es-es/'
            } 
        ]
    } 
]