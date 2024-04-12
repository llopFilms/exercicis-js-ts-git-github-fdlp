
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

     //Funció desplegar div
     function desplegar(idDiv,quiDemana,valueBoto){

          let valueId = document.getElementById(quiDemana).value;   
          
          if (valueId == valueBoto){
               document.getElementById(idDiv).style.display = "block";
               document.getElementById(quiDemana).value = "-";  
               escriuDada("avis","");

          }else{
               document.getElementById(idDiv).style.display = "none";
               document.getElementById(quiDemana).value = valueBoto;
          }
     }

     //Funció recollir idDi
     function recollir(idDiv,quiDemana,valueBoto){

          document.getElementById(idDiv).style.display = "none";
          document.getElementById(quiDemana).value = valueBoto;

     }

     //Funció habilitar botó
     function estatBoto(id, estat) {

          document.getElementById(id).disabled = estat;
     }


     //Funció Validació inidividual
     function validacioInd(dada, id){

          let validacioInd = false;
                              
          if (dada =="" || isNaN(dada) || dada <=0 ) {
               validacioInd;
               document.getElementById(id).style.backgroundColor = "#E6B0AA"; 
               document.getElementById(id).value = "";

          }else{
               validacioInd = true;
               document.getElementById(id).style.backgroundColor = "white";
          
          }
          return validacioInd;
     }

     //Funció Validació inidividual prompt
     function validacioIndPr(dada){

          let validacioInd = false;
                              
          if (dada =="") {
               validacioInd;
          
          }else{
               validacioInd = true;
          }
          return validacioInd;

     }