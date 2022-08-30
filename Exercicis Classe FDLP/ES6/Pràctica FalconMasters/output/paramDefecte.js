"use strict";

function registrarU(nom) {
  var pais = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Espanya";
  var correu = arguments.length > 2 ? arguments[2] : undefined;
  var telefon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "no especificat";
  return "Nom: ".concat(nom, ", pa\xEDs: ").concat(pais, ", correu: ").concat(correu, ", tel\xE8fon: ").concat(telefon);
}

console.log(registrarU("Jordi", undefined, "jordillop@hotmail.com")); //paràmetre al mig undefined, paràmetre al final, espai buit