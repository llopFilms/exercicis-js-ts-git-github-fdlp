
/* let nouHotel; */
let posicion = 0;
const hoteles = [];

function crearHotel () {
    
    let nom = prompt("Introdueix el nom del nou Hotel", "BCN Montjuic");
    let habitacions = Number (prompt("Introdueix el nombre d'habitacions", "30"));
    let plantes = Number (prompt("Introdueix el nombre de plantes", "3"));
    let area = Number (prompt("Introdueix la superfícies de l'hotel", "3500"));

    let nouHotel = new Hotel (nom, habitacions, plantes, area);

    hoteles.push(nouHotel);
    alert(`L'hotel ${nouHotel.getNom()} s'ha afegit correctament a la base de dades.`);
    
    console.table(hoteles);    
} 

function donarDeBaixaHotel() {

    let busca = prompt("Introdueix el nom de l'hotel que vols eliminar.", "Casinet");

    //Jo defineixo les vaiables a fora
    let hotelTrobat, indice, trobat = false;

    //For que busca si el nom hi és o no i ho diu amb 'trobat', després confirma amb 'segur' i esborra amb 'indice')

    /* for (let i = 0; i < hoteles.length; i++) {

        if (hoteles[i].getNom() == busca) {  
            hotelTrobat = hoteles[i];
            indice = hoteles.indexOf(hotelTrobat);

            trobat = true;

            console.log("indice: ",indice, "trobat:",trobat);
            console.log("hotel trobat:", hotelTrobat);
        }
            
    }

    let segur;

    if (trobat == true) {

        segur = confirm (`Estàs segur que vols eliminar l'hotel ${busca}?`);

        if (segur == true) {
            console.log("segur:", segur);
            hoteles.splice(indice, 1);
            alert (`L'hotel ${busca} ha estat donat de baixa a l'aplicació.`);
            }

    } else {
    alert (`Operació cancel·lada. No s'ha esborrat l'hotel.`)
    } */


    // funció flexta que troba 'indice' directament a partir de 'busca'. Confirma amb 'segur' i esborra amb 'indice'
    indice = hoteles.findIndex(element => element.nom == busca);
    console.log("indice:", indice);

    if (indice != -1) {

        segur = confirm (`Estàs segur que vols eliminar l'hotel ${busca}?`);

        if (segur == true) {
            console.log("segur:", segur);
            hoteles.splice(indice, 1);
            alert (`L'hotel ${busca} ha estat donat de baixa a l'aplicació.`);
            }

    } else {
    alert (`Operació cancel·lada. No s'ha esborrat l'hotel.`)
    }

    console.table(hoteles);
}

function iniciaHotel() {

    let nouHotel = new Hotel("Palace", 80, 4, 6000);
    hoteles.push(nouHotel);
    nouHotel = new Hotel("Casinet", 40, 3, 4500);
    hoteles.push(nouHotel);
    nouHotel = new Hotel("Masnou", 25, 2, 3000);
    hoteles.push(nouHotel);
}

    window.onload = function () {
    iniciaHotel();
    console.table(hoteles);
}