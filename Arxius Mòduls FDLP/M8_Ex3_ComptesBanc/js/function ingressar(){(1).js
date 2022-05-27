function ingressar(){

    escriuDada("avis","");
    let registrat = arrayClients[posicio];
    
    let quantitatIn = prompt("Quina quantitat vols ingressar?");
    registrat.comptes[0].ingres(quantitatIn);
    
    escriuDada("avis", "La quantitat <b>" +quantitatIn+ " €</b> s'ha ingressat satisfactòriament. El saldo disponble és de<b>€ </b>");

    console.table(registrat.comptes);
    llistaBanc();
    posicio = posicio;

}

function retirar(){

    escriuDada("avis","");
    let registrat = arrayClients[posicio];
    console.table(registrat.comptes);
    
    let quantitatOut = prompt("Quina quantitat vols retirar?");
    registrat.comptes[0].retirada(quantitatOut);

    escriuDada("avis", "La quantitat <b>" +quantitatOut+ " €</b> s'ha retirat satisfactòriament. El saldo disponble és de<b> € </b>");
 
    console.table(registrat.comptes);
    llistaBanc();
    posicio = posicio;

}