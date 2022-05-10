
     //Funcions auxiliars Llibreria

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

     //Funció recollir div i restablir Botó
     function recollirDivBoto(idDiv,quiDemana,valueBoto) {

          document.getElementById(idDiv).style.display = "none";
          document.getElementById(quiDemana).value = valueBoto;

     }

     //Funció recollir div
     function recollir(idDiv) {

          document.getElementById(idDiv).style.display = "none";

     }

     //Funció habilitar botó
     function estatBoto(id, estat) {

          document.getElementById(id).disabled = estat;
     }

     //Funció Validació inidividual
     function validacionumIndNum(num, id){

          let validacioInd = false;
                              
          if (num =="" || isNaN(num) || num <=0) {
               validacioInd;
               document.getElementById(id).style.backgroundColor = "#E6B0AA"; 
               

          }else{
               validacioInd = true;
               document.getElementById(id).style.backgroundColor = "white";
               document.getElementById(id).value = num;
          }
          return validacioInd;
     }

     //Funció Validació inidividual prompt
     function validacioIndPrompt(dada, id){

          let validacioInd = false;
                              
          if (dada =="") {
               validacioInd;
               document.getElementById(id).style.backgroundColor = "#E6B0AA"; 
                         
          }else{
               validacioInd = true;
               document.getElementById(id).style.backgroundColor = "white";
               document.getElementById(id).value = dada;
          }
          return validacioInd;

     }
