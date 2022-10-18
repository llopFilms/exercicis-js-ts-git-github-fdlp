
function afegir(){

     let imatge = prompt("Escriu els nom de la imatge","") + ".jpg";
     let nom = prompt("Escriu el nom de la foto");
     let titol = prompt("Escriu el titol");
     let descripcio = prompt("Escriu la descripcio");

     let afegit = {

          imatge     : imatge,
          nom        : nom,
          titol      : titol,
          descripcio : descripcio
     }

     bioconstruccio.unshift(afegit);
     alert ("Tot seguit, la teva foto afegida")
     mostrar();
}

function buscar(){

     let nom = prompt("Escriu el nom de la foto");
     let casa = bioconstruccio.find (casa => casa.nom === nom);

     let index = bioconstruccio.indexOf(casa);

     if (index >= 0){

          posicio = index;
          alert ("Tot seguit, la teva foto");
          mostrar();
     }else{

          alert ("La casa " +nom+ ", no existeix");
     }
}

function esborrar(){

     let confirmar = confirm ("Segur que voleu esborrar la casa" +bioconstruccio[posicio].nom+ "?");

     if (confirmar){

          bioconstruccio.splice(posicio, 1);
          alert ("Foto esborrada");
          mostrar();
     }
}

function modificar(){

     let nom = bioconstruccio[posicio].nom;
     let imatge = bioconstruccio[posicio].imatge;
     imatge = imatge.substring(0, bioconstruccio.length -4);
     let titol = bioconstruccio[posicio].titol;
     let descripcio = bioconstruccio[posicio].descripcio;

     imatge = prompt("Nova imatge per " +nom+ "? Sense l'extensió '.jpg'. Ara té l'arxiu " +imatge+ ".jpg");
     imatge += ".jpg";
     nom = prompt("Nou nom per " +nom+ "?. Ara té el nom " +nom);
     titol = prompt("Nou títol per la imatge " +nom+ "?. Ara té el títol " +titol);
     descripcio = prompt("Nova descripcio per la imatge " +nom+ "?. Ara té la descripcio \""+descripcio+"\"");


     let modificat = {

          imatge     : imatge,
          nom        : nom,
          titol      : titol,
          descripcio : descripcio
     }

     bioconstruccio.splice(posicio, 1, modificat);
     alert ("Tot seguit, la teva foto modificada");
     mostrar();

}

function sortir(){

     document.getElementById("nom imatge").innerHTML = "<strong>Gràcies per la teva visita</strong>";
     document.getElementById("descripcio").innerHTML = "A reveure i fins aviat!";

     document.getElementById("imatge").src = RUTA + "índex.jpeg";


}