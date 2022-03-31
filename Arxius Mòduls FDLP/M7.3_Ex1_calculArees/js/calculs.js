
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
    let areaQ = costat**2; console.log("area "+areaQ);
    escriuDada("resultat1", "L'àrea del quadrat és de: <b>"+areaQ);
        
    }

//Funció Triangle
function areaTriangle(){

    desplegarDiv("areaTriangle");
    let baseT = Number(llegeixDada("baseT"));
    let alturaT = Number(llegeixDada("alturaT"));
    let areaT = baseT * alturaT / 2;
    escriuDada("resultat2", "L'àrea del triangle és de: <b>"+areaT);    }

//Funció Rectangle
function areaRectangle(){

    desplegarDiv("areaRectangle");
    let baseR = Number(llegeixDada("baseR"));
    let alturaR = Number(llegeixDada("alturaR"))
    let areaR = baseR * alturaR;
    escriuDada("resultat3", "L'àrea del rectangle és de: <b>"+areaR);
    }

//Funció Cercle
function areaCercle(){

    desplegarDiv("areaCercle");
    let radi = Number(llegeixDada("radi"));
    let areaC = (Math.PI * radi**2).toFixed(2);
    escriuDada("resultat4", "L'àrea del cercle és de: <b>"+areaC);
    }