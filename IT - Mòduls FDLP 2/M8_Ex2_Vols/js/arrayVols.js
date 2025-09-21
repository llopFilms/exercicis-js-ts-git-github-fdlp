console.log("Vols carregat");
let vols = [];

let vol1 = new Vol(133, 2000, 'Marron Airways', 100, 2);
let vol2 = new Vol(126, 7500, 'Simple Airways', 125, 4);

vols = [vol1, vol2];
console.log("Dades de vols carregades");
console.table(vols);

