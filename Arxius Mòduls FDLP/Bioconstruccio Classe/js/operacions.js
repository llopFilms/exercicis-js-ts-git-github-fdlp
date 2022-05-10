
    //Programa operacions
    function replegarDivs() {

        replegarDiv("dadesBuscar");
        replegarDiv("dadesAfegir");
        replegarDiv("dadesModificar");
    }

    function buscar(){

        let nom = llegeixDada("nomBuscar");
        let casa = casaBio.find (casa => casa.nom === nom);
        let index = casaBio.indexOf(casa);

        if (index >= 0 ){

            posicio = index;
            mostrar();
        }else{

            alert ("La casa " +nom+ ", no existeix");
        }
        replegarDivs();
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

        let imatgeRuta = llegeixDada("buscador");
        let imatge = imatgeRuta.substring(imatgeRuta.length-9);

        //let imatge = imatgeRuta.substring(imatgeRuta.lastIndexOf('/')+1);
        console.log(imatge);

        let nom = llegeixDada("1");
        let titol = llegeixDada("2");
        let descripcio = llegeixDada("3");
        
        let afegit = new Bioconstruccio(imatge, nom, titol, descripcio);
        casaBio.splice((posicio+1), 0, afegit);
        posicio += 1;

        replegarDivs();
        mostrar();
    }

    function validacioAfegir(){

        //Esborrar pantalla
        escriuDada ("avís","");

        //Validació
        let validacio = true;
        
        //Validar dades id d'1 a 4
        for (i=1; i<=3; i++){

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

        let imatge = casaBio[posicio].imatge;
        imatge = imatge.substring(0, casaBio.length-4);
        let nom = casaBio[posicio].nom;
        let titol = casaBio[posicio].titol;
        let descripcio = casaBio[posicio].descripcio;

        let imatgeRuta = llegeixDada("buscador2");
        imatge = imatgeRuta.substring(imatgeRuta.length-9);

        //let imatge = imatgeRuta.substring(imatgeRuta.lastIndexOf('/')+1);
        console.log(imatge);

        nom = llegeixDada("4");
        titol = llegeixDada("5");
        descripcio = llegeixDada("6");
        
        let modificat = new Bioconstruccio(imatge, nom, titol, descripcio);
        casaBio.splice(posicio, 1, modificat);
            
        replegarDivs();
        mostrar();

    }

    function validacioModificar(){

        //Esborrar pantalla
        escriuDada ("avís","");

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


        let confirmar = confirm ("Segur que voleu esborrar la casa" +casaBio[posicio].nom+ "?");

        if (confirmar){

            casaBio.splice(posicio, 1);
            mostrar();
        }

        posicio = indexEsborrar-1;
        replegarDivs();
        mostrar();

    }

    function sortir(){

        document.getElementById("nomImatge").innerHTML = "<strong>Gràcies per la teva visita</strong>";
        document.getElementById("descripcio").innerHTML = "A reveure i fins aviat!";
        document.getElementById("imatge").src = RUTA + "índex.jpeg";
        document.getElementById("stop").style.display = "none";
        document.getElementById("play").style.display = "none";
        document.getElementById("endavant").style.display = "none";
        document.getElementById("enrere").style.display = "none";
        document.getElementById("buscarBoto").style.display = "none";
        document.getElementById("afegirBoto").style.display = "none";
        document.getElementById("modificarBoto").style.display = "none";
        document.getElementById("esborrarBoto").style.display = "none";
        document.getElementById("sortirBoto").style.display = "none";
        clearInterval(interval);
    }

    //Reproductor
    const INTERVAL_MS = 1600;

    function play(){

        interval = setInterval(endavant, INTERVAL_MS);
        /* document.getElementById("play").style.display = "none";
        document.getElementById("stop").style.display = "inline"; */
        document.getElementById("play").disabled = true;
        document.getElementById("stop").disabled = false;
        document.getElementById("endavant").disabled = true;
        document.getElementById("enrere").disabled = true;
        document.getElementById("buscarBoto").style.display = "none";
        document.getElementById("afegirBoto").style.display = "none";
        document.getElementById("modificarBoto").style.display = "none";
        document.getElementById("esborrarBoto").style.display = "none";
        document.getElementById("fotosDisponibles").style.display = "none";
    }

    function estop(){

        clearInterval(interval);
        /* document.getElementById("stop").style.display = "none";
        document.getElementById("play").style.display = "inline"; */
        document.getElementById("stop").disabled = true;
        document.getElementById("play").disabled = false;
        document.getElementById("endavant").disabled = false;
        document.getElementById("enrere").disabled = false;
        document.getElementById("buscarBoto").style.display = "inline";
        document.getElementById("afegirBoto").style.display = "inline";
        document.getElementById("modificarBoto").style.display = "inline";
        document.getElementById("esborrarBoto").style.display = "inline";
        document.getElementById("fotosDisponibles").style.display = "block";

    }

    