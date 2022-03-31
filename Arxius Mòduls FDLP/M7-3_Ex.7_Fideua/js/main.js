


//Funció principal
function main(numPersones, preuFideus, preuGambes, preuCalamars){

    //Gestió amb funcions
    let resultatsFideua = fideua(numPersones, preuFideus, preuGambes, preuCalamars);

    //Resultat final
    let resultat = "<h3> Càlculs fideuà: </h3><ul><li> El nombre de persones apuntades és <strong>"+numPersones+ "</strong>. <br/></li><li> La quantitat necessària de fideus serà de <strong>" +resultatsFideua[0]+ "</strong> kilos. <br/></li> <li> La quantitat necessària de gambes serà de  <strong>" +resultatsFideua[1]+ "</strong> grams.<br/></li><li> La quantitat necessària de calamars serà de <strong>" +resultatsFideua[2]+ "</strong> grams.<br/></li><li> El preu per persona serà de <strong>" +resultatsFideua[3].toFixed(1)+ "</strong> euros.<br/></li><li> I el cost total de la fideuà serà de <strong>" +resultatsFideua[4].toFixed(1)+ "</strong> euros.</ul>"

    escriuDada("resultat",resultat);
}      

//Funció Validació
function validacio(){

    //Esborrar pantalla
    escriuDada ("avís","");
    escriuDada ("resultat","");

    //Entrada a paràmetres
    let numPersones = llegeixDada("1");
    let preuFideus = llegeixDada("2");
    let preuGambes = llegeixDada("3");
    let preuCalamars = llegeixDada("4");

    //Validació
    let validacio = true;

    //Validar dades ingredients i convertir a Number
    for (i=1; i<=4; i++){

         dadaBona(i);
         contingut = llegeixDada(i);
         Number(i);

         if (contingut = "" || contingut <=0 || isNaN(contingut)){

              validacio = false;
              dadaDolenta(i);
              escriuDadaValue(i, "");
         }
    }
    //Arrodoneix número de convidats
    numPersones = Math.round(numPersones);

    if (validacio==false){
         escriuDada("avís","<strong>Escriviu les dades correctament</strong>");

    }else{  
         main(numPersones, preuFideus, preuGambes, preuCalamars);
    } 
} 