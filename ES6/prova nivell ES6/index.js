const productes = [
  {
    id: 1,
    nom: "sabates",
    estoc: 234,
    preu: 25,
  },
  {
    id: 2,
    nom: "pantalons",
    estoc: 325,
    preu: 45,
  },
  {
    id: 3,
    nom: "samarretes",
    estoc: 110,
    preu: 35,
  },
  {
    id: 4,
    nom: "gorra",
    estoc: 334,
    preu: 35,
  },
];

console.log(productes);

const arrayEstoc = productes.filter((producte) => producte.estoc > 200);
console.log(arrayEstoc);

const arrayPreuEntre = productes.filter(
  (producte) => producte.preu > 30 && producte.preu < 50
);
console.log(arrayPreuEntre);

const productesOrdrePreu = productes.sort((a, b) => a.preu - b.preu);
console.log(productesOrdrePreu);

const productesOrdreNom = productes.sort((a, b) => a.nom.localeCompare(b.nom));
console.log(productesOrdreNom);

const productesOrdreNom2 = productes.sort((a, b) => (a.nom > b.nom ? 1 : -1));
console.log(productesOrdreNom2);

const prouctesOrdrePreu2 = productes.sort((a, b) => {
  if (a.preu > b.preu) return 1;
  if (a.preu - b.preu === 0) {
    if (a.nom < b.nom) return -1;
    else return 1;
  }
  if (a.preu - b.preu < 0) return -1;
});
console.log(prouctesOrdrePreu2);

const sumaEstoc = productes.reduce((acum, prev) => acum + prev.estoc, 0);
console.log(sumaEstoc);

const productesIVA = productes.map((producte) => ({ ...producte, preu: +((producte.preu * 1.21).toFixed(2)) }));
console.log(productesIVA);

const llista = productes.map(producte => `Nom: ${producte.nom} --> Preu: ${producte.preu}`);
console.log(llista);

