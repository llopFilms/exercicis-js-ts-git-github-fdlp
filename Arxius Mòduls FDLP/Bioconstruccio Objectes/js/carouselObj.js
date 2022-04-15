
     //Funcions auxiliarsLlibreria

     //Funció llegeix dada
     function llegeixDada(id){

          let dada = document.getElementById(id).value;
          return dada;
     }

     //Funció escriu dada valor
     function escriuDadaValue(id,dada){        

          document.getElementById(id).value = dada;
     }

     //Funció escriu dada en HMTL
     function escriuDada(id,dada){        

          document.getElementById(id).innerHTML = dada;
     }

     //Funció dada bona
     function dadaBona(id){

          document.getElementById(id).style.background = "white";
     }

     //Funció dada dolenta
     function dadaDolenta(id){

          document.getElementById(id).style.background = "#E6B0AA";
     }     

     function desplegar(idDiv,quiDemana,valueBoto){

          let valueId = document.getElementById(quiDemana).value;   
          
          if (valueId == valueBoto){
               document.getElementById(idDiv).style.display = "block";
               document.getElementById(quiDemana).value = "-";  

          }else{
               document.getElementById(idDiv).style.display = "none";
               document.getElementById(quiDemana).value = valueBoto;
          }
     }

     //Programa
     
     let posicio = 0;
     mostrar();

     function mostrar(){

          let imatge = RUTA + bioconstruccio[posicio].imatge;
          let nom = bioconstruccio[posicio].nom;
          let descripcio = bioconstruccio[posicio].descripcio;
          let titol = bioconstruccio[posicio].descripcio;
     
          document.getElementById("imatge").src = imatge;
          document.getElementById("imatge").title = nom+ ": " +titol;
          escriuDada("nom imatge","<strong>"+nom+"</strong>");
          escriuDada("descripcio",descripcio);
     }
     
     //Funcions auxiliars
     function endavant(){

          posicio++;
          if (posicio >= bioconstruccio.length){

               posicio = 0;
          }
          mostrar();
     }

     function enrere(){

          posicio--;
          if (posicio < 0){

               posicio = bioconstruccio.length-1;
          }
          mostrar();
     }