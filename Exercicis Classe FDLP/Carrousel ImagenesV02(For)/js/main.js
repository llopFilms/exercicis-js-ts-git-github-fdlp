let posicion = 0;
mostrarImagen();

function mostrarImagen () {
    let imagen = RUTA+imagenes[posicion].imagen;
    let nombre = imagenes[posicion].nombre;
    let titulo = imagenes[posicion].title;
    let descrip = imagenes[posicion].descripcion;
    document.getElementById("imagen").src = imagen;
    document.getElementById("imagen").title = titulo;
    document.getElementById("imagen").alt = nombre;
    document.getElementById("nombreImagen").innerHTML = nombre;
    document.getElementById("descrip").innerHTML = descrip;
}

function avanza () {
    posicion++;
    if (posicion>=imagenes.length){
        posicion = 0;
    }
    mostrarImagen();
}
function retrocede () {
    posicion--;
    if(posicion<0){
        posicion = imagenes.length-1;
    }
    mostrarImagen();
}
