

function f11(){

    //Llista de l'agenda sencera
    let llista = "\n\n";
    let llista2 = "";
    let i, j;

    //Llista per cònsola
    for (let i=0; i<agenda.length; i++) {

        llista += agenda[i].categoria+ ":\n\n";
        
        for(j=0; j<agenda[i].contactos.length; j++){

            llista += "Conctacte: " +agenda[i].contactos[j].contacto+ "\n";
            llista += "Telèfon: " +agenda[i].contactos[j].numeroTelefono+ "\n";;
            llista += "web: " +agenda[i].contactos[j].web+ "\n";
            llista += "\n";
        }
    }   

    //Llista per HTML
    for (let i=0; i<agenda.length; i++) {

        llista2 += "<b>" +agenda[i].categoria+ ":</b><br><br><ul>";
        
        for(j=0; j<agenda[i].contactos.length; j++){

            llista2 += "<li><b>Conctacte: </b>" +agenda[i].contactos[j].contacto+ "<br></li>";
            llista2 += "<li><b>Telèfon: </b>" +agenda[i].contactos[j].numeroTelefono+ "<br></li>";;
            llista2 += "<li><b>web: </b>" +agenda[i].contactos[j].web+ "<br>";
            llista2 += "<br></li>";
        }
        llista2 += "</ul>";
    }   
    escriuDada ("resultat",llista2);
    console.table(agenda);
    console.log(llista);

}
//Buscar les dades del contacte 'Emergencia Médicas'
function f12(){

    //A on hem d'arribar per cònsola
    let f12 = agenda[0].contactos[3];
    
    let f121 = "Emergencias Médicas";
    let i, j;
    let llista = "\n\n";
    let llista2 = "";

    //Llista per cònsola
    for (let i=0; i<agenda.length; i++) {

        for(j=0; j<agenda[i].contactos.length; j++){

            if (f121 == agenda[i].contactos[j].contacto){
            llista += "Conctacte: " +agenda[i].contactos[j].contacto+ "\n";
            llista += "Telèfon: " +agenda[i].contactos[j].numeroTelefono+ "\n";
            llista += "web: " +agenda[i].contactos[j].web+ "\n";
            }
        }
    }   

    //Llista per HTML
    for (let i=0; i<agenda.length; i++) {

        for(j=0; j<agenda[i].contactos.length; j++){

            if (f121 == agenda[i].contactos[j].contacto){
            llista2 = "<b>Objecte HTML:</b><br>";
            llista2 += "<ul><li><b>Conctacte: </b>" +agenda[i].contactos[j].contacto+ "<br></li>";
            llista2 += "<li><b>Telèfon: </b>" +agenda[i].contactos[j].numeroTelefono+ "<br></li>";
            llista2 += "<li><b>web: </b>" +agenda[i].contactos[j].web+ "<br>";
            llista2 += "<br></li>";
            }
        }
        llista2 += "</ul>";
    } 
    
    //Amb findIndex + toString()
    let er = agenda.findIndex(agenda => agenda.categoria == "Emergencias");
    let erMed = agenda[er].contactos.find(contactos => contactos.contacto == "Emergencias Médicas");
    let toString = erMed.toString();

    escriuDada ("resultat", llista2 + toString);
    console.table(f12);
    console.log(llista, er, erMed);
}

function f13(){

    //Localització dades de categoria 'Tarjetas de Crédito
    let f13 = agenda[1];

    //Busquem l'índex a aprtir del nom
    let f131 = agenda.find(f131 => f131.categoria === "Tarjetas de Crédito (cancelación)");
    //indexCancel = 1
    let indexCancel = agenda.indexOf(f131);
    let llista = "";
    let i, j;
            
    //For a HTML, sabent l'índex de la categoria
    for (i=0; i<indexCancel; i++){

        llista += "<b>" +agenda[indexCancel].categoria+ ":</b> (sabent índex categoria)<br><br><ul>";
        
        for(j=0; j<agenda[indexCancel].contactos.length; j++){

            llista += "<li><b>Conctacte: </b>" +agenda[indexCancel].contactos[j].contacto+ "<br></li>";
            llista += "<li><b>Telèfon: </b>" +agenda[indexCancel].contactos[j].numeroTelefono+ "<br></li>";
            llista += "<li><b>web: </b>" +agenda[indexCancel].contactos[j].web+ "<br>";
            llista += "<br></li>";
        }
        llista += "</ul>";
    }   

    //For a HTML, sense saber l'índex de la categoria
    let f231 = "Tarjetas de Crédito (cancelación)";
    let llista2 = "";

    for (i=0; i<agenda.length; i++) {

        if (f231 == agenda[i].categoria) {
            llista2 += "<b>" +agenda[i].categoria+ ":</b> (sense saber índex categoria)<br><br><ul>";

            for(j=0; j<agenda[i].contactos.length; j++){

            llista2 += "<li><b>Conctacte: </b>" +agenda[i].contactos[j].contacto+ "<br></li>";
            llista2 += "<li><b>Telèfon: </b>" +agenda[i].contactos[j].numeroTelefono+ "<br></li>";
            llista2 += "<li><b>web: </b>" +agenda[i].contactos[j].web + "<br>";
            llista2 += "<br></li>";
            }
        llista2 += "</ul>";
        }
    }   

    //Llista per cònsola
    let f331 = "Tarjetas de Crédito (cancelación)";
    let llista3 = "\n\n";

    for (i=0; i<agenda.length; i++) {

        if (f331 == agenda[i].categoria) {
            llista3 += agenda[i].categoria+ ": (sense saber índex)\n\n";

            for(j=0; j<agenda[i].contactos.length; j++){

            llista3 += "Conctacte: " +agenda[i].contactos[j].contacto+ "\n</li>";
            llista3 += "Telèfon: " +agenda[i].contactos[j].numeroTelefono+ "\n</li>";
            llista3 += "web: " +agenda[i].contactos[j].web + "\n";
            llista3 += "\n";
            }
        }
    }   

    escriuDada ("resultat", llista + llista2);
    console.table(f13);
    console.log(f131, indexCancel, llista3);

}

function f21(){

    //Localització "Bomberos"
    console.table(agenda[0].contactos[2].contacto);

    //Busca i treu amb string objecte "Bomberos"

    //While a String
    let f21 = prompt ("Qué buscas?:", "Bomberos");
    let resultat = "";
    let i=0; let j; 

        while (i<agenda.length) {
        j=0;    
            while (j<agenda[i].contactos.length) {
                
                if (f21 == agenda[i].contactos[j].contacto){
                resultat = "Contacte: \n"+agenda[i].contactos[j].contacto+"\nTelèfon: "+agenda[i].contactos[j].numeroTelefono+"\nWeb: "+agenda[i].contactos[j].web;
                }
            j++;
            }
        i++;    
        }


    //For a String
    let f121 = f21;
    let resultat2 = "\n\n";
    
        for (i=0; i<agenda.length; i++) {
        
            for (j=0; j<agenda[i].contactos.length; j++) {
                
                if (f121 == agenda[i].contactos[j].contacto){
                resultat2 = "Contacte: \n"+agenda[i].contactos[j].contacto+"\nTelèfon :"+agenda[i].contactos[j].numeroTelefono+"\nWeb:"+agenda[i].contactos[j].web;
                }
            }

        }

    //While a innerHTML
    let f221 = f121;
    let resultat3 = "";
    i=0; j; 

        while (i<agenda.length) {
        j=0;    
            while (j<agenda[i].contactos.length) {
                
                if (f221 == agenda[i].contactos[j].contacto){
                resultat3 = "<b>Objecte HTML:</b><br><ul>";
                resultat3 += "<li><b>Contacte: </b>"+agenda[i].contactos[j].contacto+ "</li>";
                resultat3 += "<li><b>Telèfon: </b>"+agenda[i].contactos[j].numeroTelefono+ "</li>";
                resultat3 += "<li><b>Web: </b>"+agenda[i].contactos[j].web+ "</li></b>";
                }
                resultat3 += "</ul>";
            j++;
            }
        i++;    
        }

    //Amb findIndex + toString()
    let er = agenda.findIndex(agenda => agenda.categoria == "Emergencias");
    let bombers = agenda[er].contactos.find(contactos => contactos.contacto == f21);
    let toString = bombers.toString();

    escriuDada ("resultat",resultat3 + bombers);
    console.table(bombers);
    console.log(resultat, resultat2);
    
}

function f22(){

    //Localització "Creu Roja.web"
    console.table(agenda[0].contactos[4].web);
    
    //Busca i treu amb string web de "Creu Roja"

    //While a String
    let web = prompt ("Qué buscas?:", "Pàgina web de la Cruz Roja")
    let f22 = 'Cruz Roja';
    let resultat = "";
    let i=0; let j; 

        while (i<agenda.length) {
        j=0;    
            while (j<agenda[i].contactos.length) {
                
                if (f22 == agenda[i].contactos[j].contacto){
                resultat = "Pàgina Web Creu Roja: "+agenda[i].contactos[j].web;
                }
            j++;
            }
        i++;    
        }


    //For a String
    let f122 = 'Cruz Roja';
    let resultat2 = "\n\n";

        for (i=0; i<agenda.length; i++) {
        
            for (j=0; j<agenda[i].contactos.length; j++) {
                
                if (f122 == agenda[i].contactos[j].contacto){
                resultat2 = "Pàgina Web Creu Roja: "+agenda[i].contactos[j].web;
                }
            }

        }

    //While a innerHTML
    let f222 = 'Cruz Roja';
    let resultat3 = "";
    i=0; j; 

        while (i<agenda.length) {
        j=0;
            while (j<agenda[i].contactos.length) {
                
                if (f222 == agenda[i].contactos[j].contacto){
                resultat3 = "<ul><b>Creu Roja: </b><br><li>Pàgina web : "+agenda[i].contactos[j].web+ "</li></ul>";
                }
            j++;
            }
        i++;    
        }

    //Find a objecte
    i=0;    
    let webCreuRoja = agenda[i].contactos.find(webCreuRoja => webCreuRoja.web === 'http://www.cruzroja.es/portada/');

    escriuDada ("resultat",resultat3);
    console.table(resultat, resultat2, webCreuRoja);

}

function f23(){

    //Localització "Mastercard telèfon i web"
    console.table(agenda[1].contactos[2].numeroTelefono, agenda[1].contactos[2].web);
    
    //Busca i treu amb string web de "Creu Roja"

    //While a String
    let webTel = prompt ("Qué buscas?:", "Teléfono y web de Mastercard")
    let f23 = 'Mastercard';
    let resultat = "";
    let i=0; let j; 

        while (i<agenda.length) {
        j=0;   
            while (j<agenda[i].contactos.length) {
                
                if (f23 == agenda[i].contactos[j].contacto){
                resultat = "Mastercard:\nTelèfon: "+agenda[i].contactos[j].numeroTelefono+ "\nPàgina Web: "+agenda[i].contactos[j].web;
                }
                j++;
            }
        i++;    
        }


    //For a String
    let f123 = 'Mastercard';
    let resultat2 = "\n\n";
    

        for (i=0; i<agenda.length; i++) {
        
            for (j=0; j<agenda[i].contactos.length; j++) {
                
                if (f123 == agenda[i].contactos[j].contacto){
                resultat2 = "Mastercard:\nTelèfon: "+agenda[i].contactos[j].numeroTelefono+ "\nPàgina Web: "+agenda[i].contactos[j].web;
                }
            }

        }

    //While a innerHTML
    let f223 = 'Mastercard';
    let resultat3 = "";
    i=0;

        while (i<agenda.length) {
        j=0;    
            while (j<agenda[i].contactos.length) {
                
                if (f223 == agenda[i].contactos[j].contacto){
                resultat3 = "<ul><b>Mastercard: </b><li>Telèfon: "+agenda[i].contactos[j].numeroTelefono+"</li><li>Web: "+agenda[i].contactos[j].web+ "</li></ul>"
                }
            j++;
            }
        i++;    
        }

    //Find a objecte
    i=0;    
    let masterCard = agenda[i].contactos.find(webCreuRoja => webCreuRoja.web === 'http://www.cruzroja.es/portada/');

    escriuDada ("resultat",resultat3);
    console.table(masterCard);
    console.log(resultat, resultat2);

}

