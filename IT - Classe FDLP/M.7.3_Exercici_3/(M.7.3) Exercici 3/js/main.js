
function palindromo (input) {
        
    let mayus = input.toUpperCase();
    let frase = mayus.replace(/ /g, "");
    let invertido = frase.split("").reverse().join("");

    if (frase === invertido){
        document.getElementById("result").innerHTML = invertido+"<br>"+"SI es un palindromo";
    }else {
        document.getElementById("result").innerHTML = invertido+"<br>"+"NO es un palindromo";
    }
}

function core () {
    let input = document.getElementById("input").value;
    palindromo(input);
}
