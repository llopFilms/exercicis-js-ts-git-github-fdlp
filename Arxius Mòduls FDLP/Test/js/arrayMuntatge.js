

const arrayPreguntes = [];

//Funció per entrar les preguntes
function crearPregunta (enunciat,opcio1,opcio2,opcio3,opcio4,correcta) {

    let novaPregunta = new Pregunta (enunciat,opcio1,opcio2,opcio3,opcio4,correcta);
    arrayPreguntes.push(novaPregunta);

}

//Omplir test
function omplirTest () {

    crearPregunta("Quantes rodes té un cotxe?", "1 roda", "2 rodes", "3 rodes", "4 rodes", "opcio4");
    crearPregunta("Quantes potes té un gall?", "1 pota", "2 potes", "3 potes", "4 potes", "opcio2");
    crearPregunta("Quants metres fa el Tibidado?", "345 metres", "255 metres", "512 metres", "950 metres", "opcio3");
    
    return console.log("Test carregat amb èxit!");
}

const arrayRespostes = [];

//Funció preparar les respostes
function novaResposta(seleccio, textSeleccio, resultat) {

    let novaResposta = new Resposta (seleccio, textSeleccio, resultat);
    arrayRespostes.push(novaResposta);
}

//Funció omplir respostes a 0
function omplirRespostes() {

    novaResposta("","","");
    novaResposta("","","");
    novaResposta("","","");

    return console.log("Respostes carregades amb èxit!");
}

/* //Funcions que volem que es carreguin primer
window.onload = function() {
    
    crearTest();
    console.table(arrayPreguntes);

} */