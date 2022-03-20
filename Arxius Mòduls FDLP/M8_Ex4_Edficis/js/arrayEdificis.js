

const arrayEdificis = [];

//Funció per afegir Hotel
function afegirHotel(nom, numPlantes, superficie, numHabitacions) {

    let nouHotel = new Hotel (nom, numPlantes, superficie, numHabitacions);
    arrayEdificis.push(nouHotel);
        
}
//Funció per afegir Cinema
function afegirCinema(nom, numPlantes, superficie, aforament) {

    let nouCinema = new Cinema (nom, numPlantes, superficie, aforament);
    arrayEdificis.push(nouCinema);
        
}
//Funció per afegir Hospital
function afegirHospital(nom, numPlantes, superficie, numPacients) {

    let nouHospital = new Hospital (nom, numPlantes, superficie, numPacients);
    arrayEdificis.push(nouHospital);
        
}

function omplirEdificis() {

    //Entrades d'edificis
    afegirHotel ("Hotel Melià Cervantes", 12, 14000, 125);
    afegirHospital ("Hospital Central Fleming", 16, 62000, 350);
    afegirHotel ("Hotel Melià Goya", 10, 14000, 85);
    afegirCinema ("Cinema Renoir Hitchcock", 2, 12000, 225);
    afegirHotel ("Hotel Melià Lorca", 22, 44000, 225);
    afegirHospital ("Hospital Central Servet", 10, 29000, 150);
    afegirCinema ("Cinema Renoir Spielberg", 4, 32000, 850);
    afegirHospital ("Hospital Central Pasteur", 12, 42000, 225);
    afegirCinema ("Cinema Renoir Lynch", 3, 16000, 320);

    //Return per avisar que hem acabat
    return "Dades dels edifics carregats amb èxit!";

}

//Funcions que volem que es carreguin primer
window.onload = function() {
    
    console.log(omplirEdificis());
    llistaEdificis();
}