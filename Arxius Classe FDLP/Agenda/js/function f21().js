function f21(){

    //Localització "Bomberos"
    console.log(agenda[0].contactos[2].contacto);

    //Busca i treu amb string objecte "Bomberos": primer que s'ha de fer és iterar les categories i després cadascun de l'array 'contactos' i amb l'if trobar el nom 'Bomberos'. En acabat, es concatena la resposta a 'resultat'. El prompt proporciona la paraula 'Bomberos'

    //While a String: quan troba 'bomberos' para
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

    console.log(f21);

    //For a String: itera fins que s'acaba l'agenda
    let f121 = f21;
    let resultat2 = "";
    
        for (i=0; i<agenda.length; i++) {
        
            for (j=0; j<agenda[i].contactos.length; j++) {
                
                if (f121 == agenda[i].contactos[j].contacto){
                resultat2 = "Contacte: \n"+agenda[i].contactos[j].contacto+"\nTelèfon :"+agenda[i].contactos[j].numeroTelefono+"\nWeb:"+agenda[i].contactos[j].web;
                }
            }

        }

    console.log(f121);    

    //While a innerHTML: quan ho troba concatena una llista per sortir per HTML
    let f221 = f21;
    let resultat3 = "";
    i=0; j; 
             
        while (i<agenda.length) {
        j=0;    
            while (j<agenda[i].contactos.length) {
                
                if (f221 == agenda[i].contactos[j].contacto){
                resultat3 = "<ul><b>Contacte: </b><br><li>"+agenda[i].contactos[j].contacto+"</li><li>Telèfon: "+agenda[i].contactos[j].numeroTelefono+"</li><li>Web: "+agenda[i].contactos[j].web+ "</li></ul>"
                }
            j++;
            }
        i++;    
        }
    
    document.getElementById("resultat").innerHTML = resultat3;

    //Amb findIndex + toString(), però aquí se li ha d'indicar el nom de la categoria
    let er = agenda.findIndex(agenda => agenda.categoria == "Emergencias");
    let bombers = agenda[er].contactos.find(contactos => contactos.contacto == f21);
    let toString = bombers.toString();

    document.getElementById("resultat").innerHTML = toString;
    escriuDada ("resultat",resultat3 + bombers);
    console.table(bombers);
    cnosole.log(resultat, resultat2);
    
    
}