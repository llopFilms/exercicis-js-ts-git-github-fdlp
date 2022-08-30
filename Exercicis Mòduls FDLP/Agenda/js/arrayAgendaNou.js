
const agenda = [];

//Funció per omplir l'array automàticmanent. Retona un string de confirmació
function omplirAgenda() {

    let novaCat;

    //Establim categoria nova
    novaCat = new Categoria("Emergencias");

    //Hi fiquem els contactes a la classe categoria
    novaCat.afegirContacte('Emergencias todo tipo', '112', 'http://www.112.es/');
    novaCat.afegirContacte('Policía', '091', 'http://www.policia.es/');
    novaCat.afegirContacte('Bomberos', '934027000', 'https://ajuntament.barcelona.cat/bombers/es');
    novaCat.afegirContacte('Emergencias Médicas', '061', 'https://sem.gencat.cat/ca/061-salut-respon/');
    novaCat.afegirContacte('Cruz Roja', '901 222 222', 'http://www.cruzroja.es/portada/');

    //Push d'array inferior a array superior
    agenda.push(novaCat);

    //I repetim...
    novaCat = new Categoria("Tarjetas de Crédito (cancelación)");

    novaCat.afegirContacte('Visa', '900 991 124', 'https://www.visa.es/');
    novaCat.afegirContacte('American Express', '900 814 500', 'https://www.americanexpress.com/es-es/');
    novaCat.afegirContacte('Mastercard', '900 971 231', 'https://www.mastercard.es/es-es.html');

    agenda.push(novaCat);

    //I afegim els taxis amb un contacte inventat
    novaCat = new Categoria("Taxis");
    novaCat.afegirContacte('Taxis BCN', '935695285', 'www.taxisBCN.cat');
    agenda.push(novaCat);

    //Return per avisar que hem acabat
    return "Agenda omplerta de contactes amb èxit!";

}

//Funcions que volem que es carreguin primer
window.onload = function() {

    
    console.log(omplirAgenda());
    console.table(agenda);
    
}