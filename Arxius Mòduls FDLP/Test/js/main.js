
omplirTest();
omplirRespostes()
console.table(arrayPreguntes);
console.table(arrayRespostes);

let posicio = 0;
mostrarPregunta();

function netejarRadio() {

    document.getElementById("opcio1").checked = false;
    document.getElementById("opcio2").checked = false;
    document.getElementById("opcio3").checked = false;
    document.getElementById("opcio4").checked = false;
}

function inhabilitaRadio() {

    document.getElementById("opcio1").disabled = true;
    document.getElementById("opcio2").disabled = true;
    document.getElementById("opcio3").disabled = true;
    document.getElementById("opcio4").disabled = true;
}

function habilitaRadio() {

    document.getElementById("opcio1").disabled = false;
    document.getElementById("opcio2").disabled = false;
    document.getElementById("opcio3").disabled = false;
    document.getElementById("opcio4").disabled = false;
}

function mostrarPregunta() {

    netejarRadio();
    (arrayRespostes[posicio].getSeleccio() !="") ? inhabilitaRadio() : habilitaRadio();
    escriuDada("avis", "<b>"+arrayRespostes[posicio].getResultat()+ " "+ arrayRespostes[posicio].getTextSeleccio()+"</b>");

    let numPregunta = posicio+1;
    escriuDada("numPregunta", numPregunta);
    escriuDada("enunciat", arrayPreguntes[posicio].getEnunciat());
    escriuDada("opcio01", arrayPreguntes[posicio].getOpcio1());
    escriuDada("opcio02", arrayPreguntes[posicio].getOpcio2());
    escriuDada("opcio03", arrayPreguntes[posicio].getOpcio3());
    escriuDada("opcio04", arrayPreguntes[posicio].getOpcio4());   
}

function finalTest() {

    let i; mida = arrayRespostes.length, encerts = 0;

    let final = "<b>Final del test:</b><br><ul>";
    for (i=0; i<mida; i++) {

        final += "<b>Pregunta " +(i+1)+ ": </b><br><br>";
        final += "<li>Selecció: " +arrayRespostes[i].getSeleccio()+ "</li>";
        final += "<li>Resposta: " +arrayRespostes[i].getTextSeleccio()+ "</li>";
        final += "<li>Resultat: " +arrayRespostes[i].getResultat()+ "</li>";
        final += "<br>";

        if (arrayRespostes[i].getResultat() == "Resposta correcta!") encerts++;
    }
    final += "</ul>";

    let percentatge = (encerts/mida*100).toFixed(2);
    final += "Percentatge d'encerts: <b>"+percentatge+"%</b>";

    escriuDada("finalTest", final);

}

function resposta() {

    console.log("resposta: "+posicio);

    let seleccio = document.querySelector("input[name='seleccio']:checked").value;
    let textSeleccio;

    switch(seleccio) {

        case "opcio1" : textSeleccio = arrayPreguntes[posicio].getOpcio1(); break;
        case "opcio2" : textSeleccio = arrayPreguntes[posicio].getOpcio2(); break;
        case "opcio3" : textSeleccio = arrayPreguntes[posicio].getOpcio3(); break;
        case "opcio4" : textSeleccio = arrayPreguntes[posicio].getOpcio4(); break;
    }

    let correcta = arrayPreguntes[posicio].getCorrecta();
    let textCorrecta;

    switch(correcta) {

        case "opcio1" : textCorrecta = arrayPreguntes[posicio].getOpcio1(); break;
        case "opcio2" : textCorrecta = arrayPreguntes[posicio].getOpcio2(); break;
        case "opcio3" : textCorrecta = arrayPreguntes[posicio].getOpcio3(); break;
        case "opcio4" : textCorrecta = arrayPreguntes[posicio].getOpcio4(); break;
    }

    let resultat;
    if (seleccio == correcta) {
        
        resultat = "Resposta correcta!";
        escriuDada("avis","<b>" +resultat+ ". " +textCorrecta+"</b>");
        
    }else{
        resultat = "Resposta incorrecta!";
        escriuDada("avis","<b>" +resultat+ ". " +textSeleccio+"</b>");
    }
    
    let respostaOmplir = arrayRespostes[posicio];
    respostaOmplir.setSeleccio(seleccio);
    respostaOmplir.setTextSeleccio(textSeleccio);
    respostaOmplir.setResultat(resultat);
    console.table(arrayRespostes);

    if (arrayRespostes.every(element => element.seleccio != "")) finalTest();

}

function seguent(){

    posicio++;
    
    if (posicio >= arrayPreguntes.length)
    posicio = 0;
    
    mostrarPregunta();
    console.log("posicio :"+posicio);
}

function anterior(){

    posicio--;
    
    if (posicio <0)
    posicio = arrayPreguntes.length-1;

    mostrarPregunta();
    console.log("posicio :"+posicio);
}

