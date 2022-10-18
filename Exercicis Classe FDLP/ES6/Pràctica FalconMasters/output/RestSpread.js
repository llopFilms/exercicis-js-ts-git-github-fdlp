"use strict";

var mostrarDades = function mostrarDades(nom, edat, correu) {
  return console.log(nom, edat, correu);
};

mostrarDades("Pep", 57, "pep@oeo.com");

var mostrarDades2 = function mostrarDades2() {
  for (var _len = arguments.length, dades = new Array(_len), _key = 0; _key < _len; _key++) {
    dades[_key] = arguments[_key];
  }

  return console.log(dades);
};

mostrarDades2("Victor", 44, "victor@oeo.com");

var mostrarDades3 = function mostrarDades3() {
  for (var _len2 = arguments.length, dades = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    dades[_key2] = arguments[_key2];
  }

  return console.log(dades);
};

var arrayDades = ["Dani", 37, "dani@oeo.com"];
mostrarDades3.apply(void 0, arrayDades);