function pregunta1() {
    let array1 = [];
    let array2 = [];
    let respostaArray1 = document.getElementById("array1");
    let respostaArray2 = document.getElementById("array2");

    for (let i = 100; i > 0 ; i-= 5) {
        array1.push(i);
        if(i % 3 == 0) {
            array2.push(i);
        }
    }

    array2.reverse();
    respostaArray1.innerHTML = array1.join();
    respostaArray2.innerHTML = array2.join();

}

function pregunta2B() {
    let nom = document.getElementById("nom1");
    let cognoms = document.getElementById("cognoms1");
    let carrec = document.getElementById("carrec1");
    let trasllat = document.getElementById("trasllat1");
    let persona = treballadors.find(treballadors => treballadors.nom == 'Pep' && treballadors.cognom == 'Vila');

    nom.innerHTML = persona.nom;
    cognoms.innerHTML = persona.cognom;
    carrec.innerHTML = persona.carrec;
    trasllat.innerHTML = persona.disponibilitatTrasllat;
}

function pregunta2C() {
    let arrayTrasllat = [];
    
    for (let i = 0; i < treballadors.length; i++) {
        if(treballadors[i].disponibilitatTrasllat) {
            arrayTrasllat.push(treballadors[i]);
        }
    }
    console.log(arrayTrasllat);
}

function pregunta2E() {
    const treballador = new Treballador ('Jordi', 'López', 'desenvolupador veb', false);
    console.log(treballador);
    let nom = document.getElementById("nom2");
    let cognoms = document.getElementById("cognoms2");
    let carrec = document.getElementById("carrec2");
    let trasllat = document.getElementById("trasllat2");

    nom.innerHTML = treballador.nom;
    cognoms.innerHTML = treballador.cognom;
    carrec.innerHTML = treballador.carrec;
    trasllat.innerHTML = treballador.disponibilitatTrasllat;
}