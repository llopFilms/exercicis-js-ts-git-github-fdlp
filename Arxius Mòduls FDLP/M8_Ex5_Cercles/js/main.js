

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
    
    let cercle1 = new Cercle(centre1, radi1);
    let cercle2 = new Cercle(centre2, radi2);

    let resultat = "<b>Resultats dels càlculs:<ul><br>";
    resultat += "<li>La distància entre el cercle actual i el rebut és de </b>" +cercle1.distanciaCentres(cercle2)+ "</li><br>";
    resultat += "<li>" +cercle1.iguals(cercle2)+ "</li><br>";
    resultat += "<li>" +cercle1.concentrics(cercle2)+ "</li><br>";
    resultat += "<li>" +cercle1.igualRadi(cercle2)+ "</li><br>";
    resultat += "<li>" +cercle1.tangents(cercle2)+ "</li><br>";
    resultat += "<li>" +cercle1.secants(cercle2)+ "</li><br>";
    resultat += "<li>" +cercle1.noEsToquen(cercle2)+ "</li></ul>";
    
    escriuDada("avis", resultat);
}

