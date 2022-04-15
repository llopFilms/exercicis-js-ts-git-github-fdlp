
    //Programa operacions

    function buscar(){

        let nom = llegeixDada("nomBuscar");
        let casa = bioconstruccio.find (casa => casa.nom === nom);

        let index = bioconstruccio.indexOf(casa);

        if (index >= 0 ){

            posicio = index;
            mostrar();
        }else{

            alert ("La casa " +nom+ ", no existeix");
        }
        mostrar();
    }

    function validacioBuscar(){

        //Esborrar pantalla
        escriuDada ("avís","");

        let nom = llegeixDada("nomBuscar");

        //Validació
        let validacio = true;
        dadaBona("nomBuscar");
                    
        if (nom == "" ){

            validacio = false;
            dadaDolenta("nomBuscar");
            escriuDadaValue("nomBuscar", "");
            escriuDada("avís","<strong>Escriviu les dades correctament</strong>");

        }else{  
            buscar();
        } 
    }

    function afegir(){

        let imatge = llegeixDada("1") +".jpg";
        let nom = llegeixDada("2");
        let titol = llegeixDada("3");
        let descripcio = llegeixDada("4");
        
        let afegit = {

            imatge: imatge,
            nom: nom,
            titol: titol,
            descripcio: descripcio
        }

        bioconstruccio.splice((posicio+1), 0, afegit);
        posicio += 1;
        mostrar();
    }

    function validacioAfegir(){

        //Esborrar pantalla
        escriuDada ("avís","");

        let imatge = llegeixDada("1") + ".jpg";
        let nom = llegeixDada("2");
        let titol = llegeixDada("3");
        let descripcio = llegeixDada("4");

        //Validació
        let validacio = true;
        
        //Validar dades id d'1 a 4
        for (i=1; i<=4; i++){

            dadaBona(i);
            contingut = llegeixDada(i);
            
            if (contingut == "" ){

                validacio = false;
                dadaDolenta(i);
                escriuDadaValue(i, "");
                
            }
        }
    
        if (validacio == false){
            escriuDada("avís","<strong>Escriviu les dades correctament</strong>");

        }else{  
            afegir();
        } 
    }

    function modificar(){

        let imatge = bioconstruccio[posicio].imatge;
        imatge = imatge.substring(0, bioconstruccio.length -4);
        let nom = bioconstruccio[posicio].nom;
        let titol = bioconstruccio[posicio].titol;
        let descripcio = bioconstruccio[posicio].descripcio;

        imatge = llegeixDada("5");
        imatge += ".jpg";
        nom = llegeixDada("6");
        titol = llegeixDada("7");
        descripcio = llegeixDada("8");
        (console.log(bioconstruccio));

        let modificat = {

            imatge     : imatge,
            nom        : nom,
            titol      : titol,
            descripcio : descripcio
        }

        bioconstruccio.splice(posicio, 1, modificat);
        mostrar();

    }

    function validacioModificar(){

        //Esborrar pantalla
        escriuDada ("avís","");

        let imatge = llegeixDada("5") + ".jpg";
        let nom = llegeixDada("6");
        let titol = llegeixDada("7");
        let descripcio = llegeixDada("8");

        //Validació
        let validacio = true;
        
        //Validar dades id de 5 a 8
        for (i=5; i<=8; i++){

            dadaBona(i);
            contingut = llegeixDada(i);
            
            if (contingut == "" ){

                validacio1 = false;
                dadaDolenta(i);
                escriuDadaValue(i, "");
            }
        }

        if (validacio == false){
            escriuDada("avís","<strong>Escriviu les dades correctament</strong>");

        }else{  
            modificar();
        } 
    }

    function esborrar(){


        let confirmar = confirm ("Segur que voleu esborrar la casa" +bioconstruccio[posicio].nom+ "?");

        if (confirmar){

            bioconstruccio.splice(posicio, 1);
            mostrar();
        }

        posicio = indexEsborrar-1;
        mostrar();
    }

    function sortir(){

        document.getElementById("nom imatge").innerHTML = "<strong>Gràcies per la teva visita</strong>";
        document.getElementById("descripcio").innerHTML = "A reveure i fins aviat!";

        document.getElementById("imatge").src = RUTA + "índex.jpeg";
    }


