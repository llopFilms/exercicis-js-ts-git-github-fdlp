"use strict";

var crearObj = function crearObj(nom, edat) {
  return {
    nom: nom,
    edat: edat
  };
};

console.log(crearObj("Ramon", 55));

var crearObj2 = function crearObj2(nom, edat) {
  return {
    nom: nom,
    edat: edat,
    mostrarInfo: function mostrarInfo() {
      return "".concat(nom, " t\xE9 ").concat(edat, " anys");
    } //mostrarInfo2: () => `${nom} té ${edat} anys`

  };
};

var obj2 = crearObj2("Pep", 47);
console.log(obj2);
console.log(obj2.mostrarInfo()); //console.log(obj2.mostrarInfo2());