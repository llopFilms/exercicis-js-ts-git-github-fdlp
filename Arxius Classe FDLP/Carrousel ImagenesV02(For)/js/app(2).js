function agregar() {
    let img = prompt("Indica el nombre de la imagen")+".jpg";
    let nombrePelicula = prompt("Indica el título de la película");
    let titulo = prompt("Introduce el nombre del director");
    let desc = prompt("Introduce la sinopsis de la película");

    let pelicula = {
        imagen: img,
        nombre: nombrePelicula,
        title: titulo,
        descripcion: desc
    }
    imagenes.push(pelicula);
    posicion = imagenes.length-1;
    mostrarImagen();
}

function buscar() {
    let input = prompt("Introduce el titulo de la película.");
    let longitud = imagenes.length, encontrado = false;
    for (let i = 0; i < longitud; i++) {

        if (imagenes[i].nombre == input) {
            posicion = i;
            i = longitud;
            encontrado = true;

        }    
    }

    if (!encontrado) {
    alert("El nombre introducido"+" "+input+" "+"no coincide con las imagenes.");
    }
    mostrarImagen();
}

function eliminar() {
    let eliminarPelicula = prompt("Introduce el título de la película que deseas eliminar.");
    let encontrado = false;
    let posicionImagen = 0;

    while (posicionImagen < imagenes.length && !encontrado){
        encontrado = (eliminarPelicula == imagenes[posicionImagen].nombre);
        if(!encontrado) {
            posicionImagen++
        }
    }
    if (encontrado) {
        imagenes.splice(posicionImagen, 1);
        mostrarImagen(); 
    }
}

function editar() {
    let editarPelicula = prompt("Introduce el título de la película que quieres editar");
    let encontrado = false;
    let posicionImagen = 0;
    let resultado = "";
    while (posicionImagen < imagenes.length && !encontrado){
        encontrado = (editarPelicula == imagenes[posicionImagen].nombre);
        if(!encontrado) {
            posicionImagen++
        }
    }
    if (encontrado) {
        agregar();
        
    }
}