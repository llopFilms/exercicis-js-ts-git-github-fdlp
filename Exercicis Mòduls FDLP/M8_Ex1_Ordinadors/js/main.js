

//Variables globals
let ordinador1;
let ordinador2;

//Funció creació objecte ordinador + validació
function creaObjOrdinador(num, tipMarca, tipModel, tipProcessador, tipMemoria, tipDiscDur) {
    
    let marca = prompt("Introdueix la marca de l'ordinador "+num+": ", tipMarca);
    
    while (validacioIndPr(marca) == false){
        marca = prompt ("Les dades són incorrectes. Torna a introduir-les");
    }

    let model = prompt("Introdueix el model de l'ordinador "+num+": ", tipModel);
    
    while (validacioIndPr(model) == false){
        model = prompt ("Les dades són incorrectes. Torna a introduir-les");
    }

    let processador = prompt("Introdueix el processador de l'ordinador "+num+": ",tipProcessador);
    
    while (validacioIndPr(processador) == false){
        processador = prompt ("Les dades són incorrectes. Torna a introduir-les");
    }
    
    let memoria = prompt("Introdueix la capacitat de memòria de l'ordinador "+num+" :", tipMemoria);
    
    while (validacioIndPr(memoria) == false){
        memoria = prompt ("Les dades són incorrectes. Torna a introduir-les");
    }

    let discDur = prompt("Introdueix la capacitat de Disc Dur de l'ordinador "+num+" : ", tipDiscDur);
    
    while (validacioIndPr(discDur) == false){
        discDur = prompt ("Les dades són incorrectes. Torna a introduir-les");
    }

    let nouOrdinador = new Ordinador(marca, model, processador, memoria, discDur);

    return nouOrdinador;
}

//Funció llistar ordindador
function llistaOrdinador(num, ordinador) {

    escriuDada("marca" +num, ordinador.marca);
    escriuDada("model" +num, ordinador.model);
    escriuDada("processador" +num, ordinador.processador);
    escriuDada("memoria" +num, ordinador.memoria);
    escriuDada("discDur" +num, ordinador.discDur);

}

//Funcions de creació d'ordinadors amb prompts i text suggerit
function creaOrdinador1() {

    ordinador1 = creaObjOrdinador(1,"Toshiba", "Avalon", "Intel Core i8", "32GB", "1TB");
    llistaOrdinador(1, ordinador1);
    alert ("S'ha creat l'ordinador número 1: " +ordinador1);

}

function creaOrdinador2() {

    ordinador2 = creaObjOrdinador(2, "Asus", "Volator", "Intel Core i7", "64GB", "750GB" );
    llistaOrdinador(2, ordinador2);
    alert ("S'ha creat l'ordinador número 2: " +ordinador2);

}

function creaOrdinadors() {

    creaOrdinador1();
    creaOrdinador2();

}

//Funcions de canvi d'atributs amb els getters i setters
function canviarProcessador(num, ordinador) {

    let tipProcessador = ordinador.processador;
    let nouProcessador = prompt ("Introdueix nou processador: ", tipProcessador);
    ordinador.processador = nouProcessador;
    escriuDada("processador" +num, ordinador.processador);

}

function canviarMemoria(num, ordinador) {
    
    let tipMemoria = ordinador.memoria;
    let nouMemoria = prompt ("Introdueix nova dada memòria: ", tipMemoria);
    ordinador.memoria = nouMemoria;
    escriuDada("memoria" +num, ordinador.memoria);

}

function canviarDiscDur(num, ordinador) {

    let tipDiscDur = ordinador.discDur;
    let nouDiscDur = prompt ("Introdueix nova dada de Disc Dur: ", tipDiscDur);
    ordinador.discDur = nouDiscDur;
    escriuDada("discDur" +num, ordinador.discDur);

}

//Funció d'execució de programa extern amb prompt i suggeriment de text
function execPrograma(num, ordinador) {

    let parPrograma = "Visual Code Studio"
    let programa = prompt ("quin programa voleu executar a l'ordinador "+num+"?", parPrograma);
    escriuDada("programa" +num, ordinador.programaExec(programa));

}