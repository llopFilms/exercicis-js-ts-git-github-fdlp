
          let posicio = 0;
          mostrar();
          
          function mostrar(){

               let imatge = RUTA + calendari[posicio].imatge;
               let nom = calendari[posicio].nom;
               let descripcio = calendari[posicio].descripcio;
               let titol = calendari[posicio].descripcio;
          
               document.getElementById("imatge").src = imatge;
               document.getElementById("imatge").title = titol;
               document.getElementById("nom imatge").innerHTML = "<strong>" +nom+ "</strong>";
               document.getElementById("descripcio").innerHTML = descripcio;

          }

          //Funcions auxiliars
          function endavant(){

               posicio++;
               if (posicio >= calendari.length){

                    posicio = 0;
               }
               mostrar();
          }

          function enrere(){

               posicio--;
               if (posicio <= 0){

                    posicio = calendari.length-1;
               }
               mostrar();
          }