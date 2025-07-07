



	let posicio = 0;
    mostrar();

    function mostrar(){

        let imatge = RUTA + casaBio[posicio].imatge;
        let nom = casaBio[posicio].nom;
        let titol = casaBio[posicio].titol;
        let descripcio = casaBio[posicio].descripcio;

		document.getElementById("imatge").src = imatge;
        document.getElementById("imatge").title = nom+ ": " +titol;
        escriuDada("nomImatge","<b>"+nom+"</b>");
        escriuDada("descripcio",descripcio);

    }

    //Funcions auxiliars
    function endavant(){

        posicio++;
        if (posicio >= casaBio.length){

            posicio = 0;
        }
        mostrar();
    }

    function enrere(){

        posicio--;
        if (posicio < 0){

            posicio = casaBio.length-1;
        }
        mostrar();
    }