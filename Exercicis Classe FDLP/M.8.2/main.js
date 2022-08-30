const hotel = []       // array amb els objectes hotels
let posicioActual;    // nomes s'empra en les funcions relacionades amb el menu modificar
 

// funcio quan es tria ALTA en el menu

function botoAltaHotel() {

  netejaPantalla ();
  mostra ("divNouHotel");

 }

 // funcio quan hem escrit un nou hotel i volem que procedeixi
 
 function botoNouHotel() {

   let nom = obte("caixaNouHotel");
   let nCambres = prompt("Nombre de cambres del nou hotel: ");
   let nPlantes = prompt("Nombre de plantes del nou hotel: ");
   let superficie = prompt("Superfície del nou hotel: ");

   let hotelNou = new Hotel (nom, nCambres, nPlantes, superficie);

   hotel.push (hotelNou);         // afegeix el nou objecte hotel a l'array

   let missatge = "Aquestes són les dades del nou hotel: <br>" + hotelNou.toString();
   escriu("divMissatges", missatge);

 }

 // quan prems el boto del menu principal per VEURE HOTEL

 function botoVeureHotel() {

  netejaPantalla ();
  mostra ("divVeureHotel");

 }


 // s'executa quan tries el nom de l'hotel que vols veure

 function botoVeureH() {

  let nomHotel=obte("caixaVeureHotel");
  let hotelTrobat = hotel.find (hotelTrobat => hotelTrobat.nom === nomHotel);

  if (hotelTrobat!=undefined) { 
    let posicioTrobada = hotel.indexOf (hotelTrobat);
    let missatge = hotel[posicioTrobada].toString() + "<br>" + hotel[posicioTrobada].calcularManteniment();
    escriu ("divMissatges", missatge);
  }
  else {alert ("Aquest hotel no està registrat");}

 }

 // funcio que s'executa quan es pren el boto ELIMINAR HOTEL del menu de navegacio

 function botoEliminarHotel() {

  netejaPantalla ();
  mostra ("divEliminarHotel");

 }

 // funcio que s'executa dins la pantalla d'eliminar per executar l'eliminacio de l'hotel

 function botoEliminaH() {

  let nomHotel = obte("caixaEliminarHotel");
  let hotelTrobat= hotel.find (hotelTrobat => hotelTrobat.nom === nomHotel);
  
  if (hotelTrobat!=undefined) {
    let posicioTrobada = hotel.indexOf (hotelTrobat);
    if (confirm ("Segur que vols esborrar aquest hotel? " )==true) { 
      hotel.splice (posicioTrobada, 1);
      alert("L'hotel "+ nomHotel+ " ha estat esborrat");
    }
  }
  else {alert ("Aquest hotel no està registrat");}

}

// funcio que s'executa quan el prem el boto de MODIFICAR DADES HOTEL del menu de navegacio

function  botoModificarHotel() {

  netejaPantalla ();
  mostra ("divModificarHotel");

}

// funcio que s'executa quan s'ha triat l'hotel que es vol modificar

function botoModificaH() {

  let nomHotel = obte("caixaModificarHotel");
  let hotelTrobat= hotel.find (hotelTrobat => hotelTrobat.nom === nomHotel);

  if (hotelTrobat!=undefined) {
    posicioActual= hotel.indexOf (hotelTrobat);     // posicio de l'hotel que volem modificar
    mostra ("divControlsModificar");                //posa els controls per poder modificar
    escriu("spanNom", hotel[posicioActual].nom);
    escriu("spanNCambres", hotel[posicioActual].nCambres);
    escriu("spanNPlantes", hotel[posicioActual].nPlantes);
    escriu("spanSuperficie", hotel[posicioActual].superficie);
  }
  else {
    alert ("Aquest hotel no està registrat");
  }

}

// funcions per modificar individualment els valors de l'hotel

function modificarCambres () {

  let nouValorCambres = prompt("Introdueix el nou valor per al nombre de cambres: ");
  hotel[posicioActual].setNCambres (nouValorCambres);
  escriu("spanNCambres", hotel[posicioActual].nCambres);
  alert ("Dades introduides amb exit");

}

function modificarPlantes () {

  let nouValorPlantes = prompt("Introdueix el nou valor per al nombre de plantes: ");
  hotel[posicioActual].setNPlantes (nouValorPlantes);
  escriu("spanNPlantes", hotel[posicioActual].nPlantes);
  alert ("Dades introduides amb exit");

}

function modificarSuperficie() {

  let nouValorSuperficie = prompt("Introdueix el nou valor per a la superfície: ");
  hotel[posicioActual].setSuperficie (nouValorSuperficie);
  escriu("spanSuperficie", hotel[posicioActual].superficie);
  alert ("Dades introduides amb exit");

}


// Funcio del boto deL menu de navegacio LLISTA D'HOTELS

function botoLlista() {

  netejaPantalla ();
  let missatge="<br>";
  let midaArray=hotel.length;
  for (let i=0; i<midaArray; i++) {
    missatge +=  hotel[i].toString() + "<br><br>";
  }
  escriu("divMissatges", missatge);

}


// funcio per netejar dades de pantalla i que no es barregin

function netejaPantalla () {
  oculta("divNomHotel");
  oculta ("divNouHotel");
  oculta ("divVeureHotel");
  oculta ("divEliminarHotel");
  oculta("divModificarHotel");
  oculta ("divControlsModificar");
  escriu ("divMissatges","");
}


// botó del menu on es mostra el COMENTARI del programador

function botoComentari () {

  netejaPantalla();
  let missatge=
  "CONTROL D'HOTELS" +
 "<br>Temes interessants:" +
  "<ul><li>Array d'objectes</li><li>Creació, visualització, modificació, recerca i eliminació de registres en forma d'objecte.</li></ul>" ;
  
  escriu ("divMissatges", missatge);

}

// funcio del menu SORTIR 

function botoSortir() {

  netejaPantalla();
  oculta ("divMenu");
  escriu ("divMissatges", "<h3>A reveure!</h3>");

}




