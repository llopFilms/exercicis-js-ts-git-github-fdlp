

import { missatgeAlerta, salutacio } from "./moduls/missatgeAlerta.js";

import Persona from "./moduls/persona.js";

missatgeAlerta("Benviguts tots!");
salutacio();

const carles = new Persona ("Carles", 54);
carles.mostrarInfo();