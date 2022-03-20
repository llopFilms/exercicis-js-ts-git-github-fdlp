

function cercles() {

    let x1 = Number(llegeixDada("x1"));
    let y1 = Number(llegeixDada("y1"));
    let radi1 = Number(llegeixDada("radi1"));
    
    let x2 = Number(llegeixDada("x2"));
    let y2 = Number(llegeixDada("y2"));
    let radi2 = Number(llegeixDada("radi2"));
    
    console.log(x1, x2, y1, y2, radi1, radi2);
    let centre1 = new Punt (x1, y1);
    let centre2 = new Punt (x2, y2);
    
    let cercle = new Cercle(centre1, radi1);
    let altreCercle = new Cercle(centre2, radi2);

    let resultat = "<b>Resultats dels càlculs:</b><ul><br>";
    resultat += "<li>" +cercle.distanciaCentres(altreCercle)+ "</li><br>";
    resultat += "<li>" +cercle.iguals(altreCercle)+ "</li><br>";
    resultat += "<li>" +cercle.concentrics(altreCercle)+ "</li><br>";
    resultat += "<li>" +cercle.igualRadi(altreCercle)+ "</li><br>";
    resultat += "<li>" +cercle.tangents(altreCercle)+ "</li><br>";
    resultat += "<li>" +cercle.secants(altreCercle)+ "</li><br>";
    resultat += "<li>" +cercle.noEsToquen(altreCercle)+ "</li></ul>";
    
    escriuDada("avis", resultat);
}

