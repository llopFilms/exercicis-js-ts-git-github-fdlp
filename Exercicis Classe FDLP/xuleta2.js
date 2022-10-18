/*
COMMENTS
*/ 

// DECLARE VARIABLES
let local;
let x, y, z;
let boolean; // true o false

var global;
const constant;
const array_void = [];
const array = [a,b,c];

let string = "1234"
let number = Number(string);
let integer = parseInt(string);
let float = parseFloat(string);

// STRING AND ARRAY METHODS
float.toFixed(2); // 2 decimals

string = array.toString(); // elements d'un array separats per comes
string = array.join(" "); // elements d'un array separats per espais (o el que posi el argument)
array = string.split(" ") // fa un array separant elements per espai  (o el que posi el argument)

str.length; // longitud del string o array
str.slice(start_index,end_index); // extreu una part dels caracters d'un string o elements d'un array

str.replace("original","new");
str.replace(/original/gi,"new"); // reemplaçar buscant (g)lobalment i (i)nsensible a majuscules/minuscules (expresions regulars)
str.toUpperCase();
str.toLowerCase();
str.chartAt(index) = str[0]; // retorna caracter d'una possició
array.reverse(); // string o array a l'inreves

str.indexOf("locate"); // retorna index de posició de la primera aparició de locate
str.lastIndexOf("locate"); // retorna index de posició de la darrera aparició de locate

// REGULAR EXPRESSIONS
let dni = "12345678Q"
const pattern = /[0-9]{8}[a-zA-Z]{1}/; //expressió regular. Exemple amb validació DNI 8 digits mes 1 lletra min o maj
boolean = Boolean(dni.match(pattern));
low = Boolean(string.match(/[a-z]/g)); // string amb nomes minuscules
cap = Boolean(string.match(/[A-Z]/g)); // string amb nomes majuscules

// OBJECT PROPERTIES
const obj = {property1 : "value1", property2 : "value2"};
obj.property1;
obj["property1"];

// OBJECT WITH METHODS
obj = {
    property1:"value1", 
    property2: "value2", 
    method1 : function () {
        ...;
        return exp;
    }
};

object.method1();

// INPUT
arg = prompt("Message?","default value"); // Introdueix dades
confirm("Message") // Acepta o Cancel·la

string = document.getElementById("demo").value; // input type="text"
boolean = document.getElementById("demo").checked; // input type="checkbox"

//  OUTPUT
alert("Message"); 

console.table(array);
console.log(arg);
console.clear;

document.getElementById("demo").innerHTML = message; //escriu contigut en un element de HTML amb id=demo
document.getElementById("demo").style.fontSize = "35px"; // canvia estils
document.getElementById("demo").style.display = "none"; // oculta o mostra (block) elements 

// CONDITIONALS. 
// Logical operators && (and),||(or), == (equal), === (equal and same type), <, <=, >, >=
if (condition1){
    true1_expressions;
} else if (condition2){
    true2_expressions;
} else {
    false1and2_expressions;
}

result = (condition) ? true_value : false_value ;

// SWITCH
switch(value){
    case "1": exp1; break;
    case "2": exp2; break;
    default: exp3;
}

// LOOPS
for (let i=0; i_condition; i_expression){
    expressions;
}

while (condition){ // s'evalua a l'inici
    expressions;
}

do {    
    expressions;
} while (condition) // s'evalua al final de manera que com a minim s'executa una vegada

// EXTERNAL SCRIPTS FILES
<script src="myScript.js"></script>

// FUNCTIONS
function nameFunc(arg){return expression;} // Standard functions

let nameFunc = arg => expression; // Arrow functions
let nameFunc = (arg1,arg2) => expression;

// EVENTS onclick, onchange, onload, onmouseover, onmouseout, onkeydown
document.getElementById("demo").onclick = function(){expressions} //funció anonima
document.getElementById("demo").addEventListener("input",function(){expressions}); //es com un onchange pero sense donar al Enter (tal com escrius executa)

// ARRAYS OF OBJECTS
const arrayobj = []; //declaració com una constant

arrayobj.unshift(obj); //afegir un objecte al principi de l'array
arrayobj.shift(obj); //esborrar el primer element de l'array

arrayobj.push(obj); //afegir un objecte al final de l'array
arrayobj.pop(obj); //esborrar l'últim element de l'array

arrayobj.splice(pos_ins, 0, newobj); //inserció d'un objecte a una posició concreta (els índex es reordenen)
arrayobj.splice(pos_sub, 1, newobj); //substitució d'un objecte en una posició concreta
arrayobj.splice(pos_del, n); //esborrar n objectes des d'una posició concreta

// METHODS FOR ARRAY OF OBJECTS
index = arrayobj.indexOf(nameobj); //índex d'un objecte

index = arrayobj.findIndex(el => el.attr == value); //recerca d'un índex d'un objecte pel valor d'un atribut
obj = arrayobj.find(el => el.attr === value); //recerca d'un sol objecte pel valor d'un atribut

arrayobj_filt = arrayobj.filter(el => el.attr === value); //recerca de tots el objectes pel valor d'un atribut
arrayobj_sort = arrayobj.sort(el => el.attr === value); //ordena una array per ordre alfabètic per un valor d'atribut

boolean = arrayobj.some(el => el.attr === value); //consulta si ALGUN objecte té el valor de l'atribut (OR)
boolean = arrayobj.every(el => el.attr === value); //consulta de si TOTS els objcetes tenen el valor de l'atribut (AND)

newarray = arrayobj.map(functionName); // retorna un nou array on cada element es el resultat d'aplicar la funció a cada element/objecte de l'array original
result = array.forEach(functionName);// retorna resultat després de recorrer tots els elemnts del array (no tinc clar la diferencia amb map)

// ESTRUCTURA DE CLASSES constructor + getter + setter + mètodes + toString()
class Nomclasse {
    constructor (attr1, attr2) {
        this.attr1 = attr1;
        this.attr2 = attr2;
    }

    //Getters
    getAttr() { return this.attr; } //al programa es crida objecte.getAtribut()
    get getAttr() { return this.attr; } //al programa es crida objecte.getAtribut

    //Setters
    setAttr(attr) { this.attr = attr; } //al programa es crida objecte.setAtribut()
    set setAttr(attr) { this.attr = attr; } //al programa es crida objecte.setAtribut

    //Methods
    methName(args) { //sense 'function'
        expressions;
        return value;
    }

    //toString() descripció de l'objecte en un format determinat. Es crida al programa: objecte.toString() o només amb el nom de l'objecte
    toString() {
        let llista = this.prop1+","+this.prop2 ;
        return llista;
    }
}

// Create OBJECT with CLASS
obj = new NameClass (attr1, attr2);

// Create ARRAY of OBJECTS with CLASSES
arrayobj = [];
for (let i=0; i<n; i++){
    let attr=prompt("Attribute");
    expressions;
    arrayobj[i] = new ClassName (attr);
}

arrayobj = [
    new ClassName (attr1, attr2),
    new ClassName (attr1, attr2);
];

