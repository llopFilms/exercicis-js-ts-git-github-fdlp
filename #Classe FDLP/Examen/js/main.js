

function p1() {

    let array1 = [100];
    let array2 = [];

    let i, j, pas;
    let num = 100;

    for (i=0; i<19; i++) {

        pas = num - 5;
        array1.push(pas);

        for (j=0; j<1; j++) {

            if (pas % 3 == 0){

                array2.push(pas);
            }
        pas = "";  
        }
        num = num -5;
    }

    let array2rev = array2.reverse();

    document.getElementById("array1").innerHTML = array1;
    document.getElementById("array2").innerHTML = array2rev;

}

function p2b() {

    let persona = treballadors.find(element => element.nom === "Pep");

    document.getElementById("nom1").innerHTML = persona.nom;
    document.getElementById("cognoms1").innerHTML = persona.cognom;
    document.getElementById("carrec1").innerHTML = persona.carrec;
    document.getElementById("trasllat1").innerHTML = persona.disponibilitatTrasllat;

}

function p2c() {

    let array = [];

    let i=0;
    while (i<treballadors.length) {
    
        if (treballadors[i].disponibilitatTrasllat == true){

            array.push(treballadors[i])

        }
    i++;    
    }

    let array2 = treballadors.filter(element => element.disponibilitatTrasllat === true);

    console.log(array, array2);

}

function p2e() {


    let nouTreballador = new Treballador ("Ramon", "Garcia", "encarregat", true);

    document.getElementById("nom2").innerHTML = nouTreballador.nom;
    document.getElementById("cognoms2").innerHTML = nouTreballador.cognom;
    document.getElementById("carrec2").innerHTML = nouTreballador.carrec;
    document.getElementById("trasllat2").innerHTML = nouTreballador.disponibilitatTrasllat;

}