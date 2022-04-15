

//Variables globals
let ordinador1 = new Ordinador();
let ordinador2 = new Ordinador();

//Funció creació objecte ordinador + validació
function creaObjOrdinador(num, tipMarca, tipModel, tipProcessador, tipMemoria, tipDiscDur) {
    
    let continuar = false;

    let marca = prompt("Introdueix la marca de l'ordinador "+num+": ", tipMarca);
    continuar = validacioIndPr(marca);
    while (continuar == false){
        marca = prompt ("Les dades són incorrectes. Torna a introduir-les");
    
        if (validacioIndPr(marca) == true) {
        continuar = true;
        }
    }

    let model = prompt("Introdueix el model de l'ordinador "+num+": ", tipModel);
    continuar = validacioIndPr(model);
    while (continuar == false){
        model = prompt ("Les dades són incorrectes. Torna a introduir-les");
    
        if (validacioIndPr(model) == true) {
        continuar = true;
        }
    }

    let processador = prompt("Introdueix el processador de l'ordinador "+num+": ",tipProcessador);
    continuar = validacioIndPr(processador);
    while (continuar == false){
        processador = prompt ("Les dades són incorrectes. Torna a introduir-les");
    
        if (validacioIndPr(processador) == true) {
        continuar = true;
        }
    }
    
    let memoria = prompt("Introdueix la capacitat de memòria de l'ordinador "+num+" :", tipMemoria);
    continuar = validacioIndPr(memoria);
    while (continuar == false){
        memoria = prompt ("Les dades són incorrectes. Torna a introduir-les");
    
        if (validacioIndPr(memoria) == true) {
        continuar = true;
        }
    }


    let discDur = prompt("Introdueix la capacitat de Disc Dur de l'ordinador "+num+" : ", tipDiscDur);
    continuar = validacioIndPr(discDur);
    while (continuar == false){
        discDur = prompt ("Les dades són incorrectes. Torna a introduir-les");
    
        if (validacioIndPr(discDur) == true) {
        continuar = true;
        }
    }

    let nouOrdinador = new Ordinador(marca, model, processador, memoria, discDur);

    return nouOrdinador;
    
}

//Funció llistar ordindador
function llistaOrdinador(num, ordinador) {

    escriuDada("marca" +num, ordinador.getMarca());
    escriuDada("model" +num, ordinador.getModel());
    escriuDada("processador" +num, ordinador.getProcessador());
    escriuDada("memoria" +num, ordinador.getMemoria());
    escriuDada("discDur" +num, ordinador.getDiscDur());

}

//Funcions de creació d'ordinadors amb prompts i text suggerit
function creaOrdinador1() {

    ordinador1 = creaObjOrdinador(1,"Toshiba", "Avalon", "Intel Core i8", "32GB", "1TB");
    llistaOrdinador(1, ordinador1);
    alert ("S'ha creat l'ordinador número 1: " +ordinador1.toString());

}

function creaOrdinador2() {

    ordinador2 = creaObjOrdinador(2, "Asus", "Volator", "Intel Core i7", "64GB", "750GB" );
    llistaOrdinador(2, ordinador2);
    alert ("S'ha creat l'ordinador número 2: " +ordinador2.toString());

}

function creaOrdinadors() {

    creaOrdinador1();
    creaOrdinador2();

}

//Funcions de canvi d'atributs amb els getters i setters
function canviarProcessador(num, ordinador) {

    let tipProcessador = ordinador.getProcessador();
    let nouProcessador = prompt ("Introdueix nou processador: ", tipProcessador);
    ordinador.setProcessador(nouProcessador);
    escriuDada("processador" +num, ordinador.getProcessador());

}

function canviarMemoria(num, ordinador) {
    
    let tipMemoria = ordinador.getMemoria();
    let nouMemoria = prompt ("Introdueix nova dada memòria: ", tipMemoria);
    ordinador.setMemoria(nouMemoria);
    escriuDada("memoria" +num, ordinador.getMemoria());

}

function canviarDiscDur(num, ordinador) {

    let tipDiscDur = ordinador.getDiscDur();
    let nouDiscDur = prompt ("Introdueix nova dada de Disc Dur: ", tipDiscDur);
    ordinador.setDiscDur(nouDiscDur);
    escriuDada("discDur" +num, ordinador.getDiscDur());

}

//Funció d'execució de programa extern amb prompt i suggeriment de text
function execPrograma(num, ordinador) {

    let parPrograma = "Visual Code Studio"
    let programa = prompt ("quin programa voleu executar a l'ordinador "+num+"?", parPrograma);
    escriuDada("programa" +num, ordinador.execPrograma(programa));

}