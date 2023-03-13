


   //Funcions auxiliarsLlibreria

     //Funció llegeix dada
    function llegeixDada(id){

        let dada = document.getElementById(id).value;
        return dada;
    }

   //Funció escriu dada
    function escriuDada(id, dada){        

        document.getElementById(id).innerHTML = dada;
    }
    
   //Funció escriu dada valor
    function escriuDadaValue(id,dada){        

        document.getElementById(id).value = dada;
    }

   //Funció dada bona
    function dadaBona(id){
        
        document.getElementById(id).style.background = "white";
    }

   //Funció dada dolenta
    function dadaDolenta(id){
    
        document.getElementById(id).style.background = "#E6B0AA";
    }
