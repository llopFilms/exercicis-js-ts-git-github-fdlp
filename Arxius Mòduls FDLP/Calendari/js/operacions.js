
function afegir(){

     let imatge = prompt("Escriu els nom de la imatge","") + ".jpg";
     let nom = prompt("Escriu el nom de la foto");
     let titol = prompt("Escriu el titol");
     let descripcio = prompt("Escriu el descripcio");

     let afegit = {

          imatge: imatge,
          nom: nom,
          titol: titol,
          descripcio: descripcio
     }

     calendari.push(afegit);
}
