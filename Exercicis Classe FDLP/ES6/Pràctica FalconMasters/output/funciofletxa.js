"use strict";

var noms = ["Carles", "Alex", "Manel", "Cèsareo"];
var numero_caract = noms.map(function (nom) {
  return console.log(nom.length);
});
var numero_caract2 = noms.map(function (nom) {
  return "La mida \xE9s: ".concat(nom.length);
});
console.log(numero_caract2);
/* const salutacio = () => alert ("Bon dia!");

salutacio();

const salutacio2 = persona => alert (`Bon dia! ${persona}`);

salutacio2("Pep"); */