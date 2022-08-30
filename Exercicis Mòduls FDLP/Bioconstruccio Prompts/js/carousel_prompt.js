
    

    let posicio = 0;
    mostrar();

    function mostrar(){

        let imatge = RUTA + bioconstruccio[posicio].imatge;
        let nom = bioconstruccio[posicio].nom;
        let descripcio = bioconstruccio[posicio].descripcio;
        let titol = bioconstruccio[posicio].descripcio;

        document.getElementById("imatge").src = imatge;
        document.getElementById("imatge").title = nom+ ": " +titol;
        document.getElementById("nom imatge").innerHTML = "<b>"+nom+"</b>";
        document.getElementById("descripcio").innerHTML = descripcio;
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