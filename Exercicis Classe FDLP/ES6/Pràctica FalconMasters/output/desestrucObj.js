"use strict";

var usuari = {
  nom: "Jordi",
  correu: "jordillop@hotmail.com",
  edat: 46,
  pais: "Espanya",
  feina: "Desenvolupador web"
};
var nom = usuari.nom,
    feina = usuari.feina,
    _usuari$antiguitat = usuari.antiguitat,
    antiguitat = _usuari$antiguitat === void 0 ? 0 : _usuari$antiguitat;
console.log("clg: " + nom, feina, antiguitat);

var mostrarInfo = function mostrarInfo(_ref) {
  var nom = _ref.nom,
      feina = _ref.feina,
      _ref$antiguitat = _ref.antiguitat,
      antiguitat = _ref$antiguitat === void 0 ? 0 : _ref$antiguitat;
  return console.log("funció: " + nom, feina, antiguitat = 0);
};

mostrarInfo(usuari);