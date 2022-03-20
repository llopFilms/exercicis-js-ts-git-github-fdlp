

const arrayClients = [];
const arrayComptes = [22, 14, 54, 81];

//Funció per afegir clients
function afegirClient(dni,nom,cognom) {

    let nouClient = new Client (dni, nom, cognom);
    arrayClients.push(nouClient);
        
}

//Funció per adjudicar compte i saldo inicial
function adjudicarDades(numCompte,saldo,i) {
        
    let nouCompte = new Compte (numCompte, saldo);
    arrayClients[i].comptes.push(nouCompte);
      
}

function omplirBanc() {

    //Entrades de clients
    afegirClient('43697671V', 'Jordi', 'Llop');
    afegirClient('45986582Z', 'Jacint', 'Verdaguer');
    afegirClient('89541237Y', 'Mercè', 'Rodoreda');
    afegirClient('12459832L', 'Pere', 'Calders');

    
    //Introduïm números de compte i saldos
    adjudicarDades(arrayComptes[0], 0, 0);
    adjudicarDades(arrayComptes[1], 0, 1);
    adjudicarDades(arrayComptes[2], 0, 2);
    adjudicarDades(arrayComptes[3], 0, 3);

    //Return per avisar que hem acabat
    return "Dades dels clients del banc carregats amb èxit!"

}

//Funcions que volem que es carreguin primer
window.onload = function() {
    
    console.log(omplirBanc());
    llistaBanc();
    
}