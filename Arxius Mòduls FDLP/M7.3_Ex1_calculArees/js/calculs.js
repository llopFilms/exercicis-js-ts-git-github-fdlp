
//Replegar divs
function replegarEsbDivs(){

    replegarDiv("areaQuadrat");
    replegarDiv("areaTriangle");
    replegarDiv("areaRectangle");
    replegarDiv("areaCercle");
    escriuDadaValue("costat","");
    escriuDada("resultat1","");
    escriuDadaValue("baseT","");
    escriuDadaValue("alturaT","");
    escriuDada("resultat2","");
    escriuDadaValue("baseR","");
    escriuDadaValue("alturaR","");
    escriuDada("resultat3","");
    escriuDadaValue("radi","");
    escriuDada("resultat4","");

}

//Funció Quadrat
function areaQuadrat(){

    let costat = Number(llegeixDada("costat"));

    while (validacionumInd(costat,"costat") == false){

        costat = prompt ("La dada és incorrecta. Introdueix la mida del costat del quadrat.");
    }

    let areaQ = costat**2;
    escriuDada("resultat1", "L'àrea del quadrat és de: <b>"+areaQ);
        
}

//Funció Triangle
function areaTriangle(){

    desplegarDiv("areaTriangle");
    let baseT = Number(llegeixDada("baseT"));
    let alturaT = Number(llegeixDada("alturaT"));

    while (validacionumInd(baseT,"baseT") == false){

        baseT = prompt ("La dada és incorrecta. Introdueix la mida de la base del triangle.");
    }

    while (validacionumInd(alturaT,"alturaT") == false){

        alturaT = prompt ("La dada és incorrecta. Introdueix la mida de l'altura del triangle.");
    }

    let areaT = baseT * alturaT / 2;
    escriuDada("resultat2", "L'àrea del triangle és de: <b>"+areaT);

}

//Funció Rectangle
function areaRectangle(){

    desplegarDiv("areaRectangle");
    let baseR = Number(llegeixDada("baseR"));
    let alturaR = Number(llegeixDada("alturaR"))

    while (validacionumInd(baseR,"baseR") == false){

        baseR = prompt ("La dada és incorrecta. Introdueix la mida de la base del rectangle.");
    }

    while (validacionumInd(alturaR,"alturaR") == false){

        alturaR = prompt ("La dada és incorrecta. Introdueix la mida de l'altura del rectangle.");
    }

    let areaR = baseR * alturaR;
    escriuDada("resultat3", "L'àrea del rectangle és de: <b>"+areaR);

}

//Funció Cercle
function areaCercle(){

    desplegarDiv("areaCercle");
    let radi = Number(llegeixDada("radi"));
    
    while (validacionumInd(radi,"radi") == false){

        radi = prompt ("La dada és incorrecta. Introdueix la mida del radi del cercle.");
    }

    let areaC = (Math.PI * radi**2).toFixed(2);
    escriuDada("resultat4", "L'àrea del cercle és de: <b>"+areaC);
    }