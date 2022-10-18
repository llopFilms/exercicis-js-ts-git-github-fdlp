


function p1(){

    const array1 = [];
    const array2 = [];

    let i, j, element;

    for (i = 100; i > 0; i -= 5) {

        array1.push(i);
        if(i % 3 == 0) {
            array2.push(i);
        }
    }
    document.getElementById("array1").innerHTML = array1;
    array2.reverse();        
    document.getElementById("array2").innerHTML = array2;
}

function p2b(){

    let persona = treballadors.find(el => el.nom == "Pep");

    let nom = persona.nom;
    let cognom = persona.cognom;
    let carrec = persona.carrec;
    let disponibilitatTrasllat = persona.disponibilitatTrasllat;

    document.getElementById("nom1").innerHTML = nom;
    document.getElementById("cognoms1").innerHTML = cognom;
    document.getElementById("carrec1").innerHTML = carrec;
    document.getElementById("trasllat1").innerHTML = disponibilitatTrasllat;
}

function p2c(){

    const disponibilitatT = treballadors.filter(el => el.disponibilitatTrasllat == true);
    console.log(disponibilitatT);
}

function p2e(){

    let nouTreballador = new Treballador ("Jordi", "Llop", "encarregat", true);    

    let nom = nouTreballador.nom;
    let cognom = nouTreballador.cognom;
    let carrec = nouTreballador.carrec;
    let disponibilitatTrasllat = nouTreballador.disponibilitatTrasllat;

    document.getElementById("nom2").innerHTML = nom;
    document.getElementById("cognoms2").innerHTML = cognom;
    document.getElementById("carrec2").innerHTML = carrec;
    document.getElementById("trasllat2").innerHTML = disponibilitatTrasllat;
}

