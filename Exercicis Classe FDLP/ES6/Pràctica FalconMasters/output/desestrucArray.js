"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var persona = ["Jordi", 46, "Espanya", "Desenvolupador web"];
var nom = persona[0],
    edat = persona[1],
    pais = persona[2],
    feina = persona[3];
console.log("persona: " + nom, edat, pais, feina);
var persona2 = ["Pep", 20, "Espanya"];
var nom2 = persona2[0],
    edat2 = persona2[1],
    pais2 = persona2[2],
    _persona2$ = persona2[3],
    feina2 = _persona2$ === void 0 ? "cap" : _persona2$;
console.log("persona 2: " + nom2, edat2, pais2, feina2);
var persona3 = ["Ramon", undefined, "Espanya"];
var nom3 = persona3[0],
    _persona3$ = persona3[1],
    edat3 = _persona3$ === void 0 ? 0 : _persona3$,
    pais3 = persona3[2],
    _persona3$2 = persona3[3],
    feina3 = _persona3$2 === void 0 ? "cap" : _persona3$2;
console.log("persona 3: " + nom3, edat3, pais3, feina3);
var persona4 = ["Ramon",, "Espanya"];
var nom4 = persona4[0],
    pais4 = persona4[2],
    _persona4$ = persona4[3],
    feina4 = _persona4$ === void 0 ? "sense-feina" : _persona4$;
console.log("persona 4: " + nom4, pais4, feina4); //paràmetre al mig 'undefined' o res, paràmetre al final, res

var mostrarInfo = function mostrarInfo(_ref) {
  var _ref2 = _slicedToArray(_ref, 4),
      nom4 = _ref2[0],
      _ref2$ = _ref2[3],
      feina4 = _ref2$ === void 0 ? "sense-feina" : _ref2$;

  return console.log(nom4, feina4);
};

mostrarInfo(persona4); //Agafes els valors desestructurats de nou,de l'array que sigui