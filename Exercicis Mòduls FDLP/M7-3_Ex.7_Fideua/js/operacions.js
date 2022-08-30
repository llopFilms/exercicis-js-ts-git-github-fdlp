


//Funció càlcul fideuà
function fideua(numPersones, preuFideus, preuGambes, preuCalamars){

    //Funció pes de cada ingredient
    let pesFideus = 0.5/4 * numPersones;
    let pesGambes = 200/4 * numPersones;
    let pesCalamars = 400/4 * numPersones;

    //Preu per persona
    let preuPersona = pesFideus * preuFideus + pesGambes/1000 * preuGambes + pesCalamars/1000 * preuCalamars;

    //Preu final
    let preuFideua = preuPersona * numPersones;

    let resultatsFideua = [pesFideus, pesGambes, pesCalamars, preuPersona, preuFideua];
    return resultatsFideua;
}
