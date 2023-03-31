"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("Hola classe");
document.write("Hola classe");
// tsc app -w per compilar en mode observador
(function exercici1() {
    let num = 2.4244324255444;
    let numF = Number(num.toFixed(2));
    let numR = Math.round(num * 100) / 100;
    console.log(numF, numR);
    console.log(typeof numF);
});
(function exercici2() {
    let texto = {
        saludo: "Oriol",
    };
    function saludar(saludo) {
        console.log("Hola " + saludo);
        const element = document.getElementById("ex1");
        element.innerHTML = "Hola" + saludo;
    }
    saludar(texto.saludo);
});
(function exercici3() {
    var salutacio = "Hola";
    function saludar2() {
        let salutacio2;
        if (true) {
            salutacio = " Adios";
            salutacio2 = "Adios2";
        }
        console.log(salutacio, salutacio2);
        const element = document.getElementById("ex2");
        element.innerHTML = salutacio + " " + salutacio2;
    }
    saludar2();
});
(function exercici5() {
    let variable = "Oriol";
    variable = 1234;
    let arrayMix = ["2", 24, "Pep", true];
    let arrayMix2 = ["3", 25, "Ramon", false];
    let arrayMix3 = [
        "4",
        26,
        "Josep Maria",
        true,
    ]; // tuple
});
(function exercici5i6() {
    // Exercici 5
    // El idoni es definir sempre la tipologia de la variable
    let color = "Vermell";
    let motorx = 1.6;
    let passatgers = 5;
    let portes = true;
    let combustibleX = ["Diesel", "Electric"];
    // Exercici 6
    let usuari = {
        nom: "Josep",
        edat: 30,
        color: "blau",
    };
    console.log(usuari);
})();
(function exercici7() {
    let nom = "Joan";
    let apellidos = "Perez";
    let edat = 32;
    let text = "Hola món"; //encadenem resultats + o ${}
    let concat = `${text}, sóc en ${nom} ${apellidos}, i tinc ${edat} anys`;
    console.log(concat);
    const element3 = document.getElementById("ex3");
    element3.innerHTML = concat;
    let Direccio;
    (function (Direccio) {
        Direccio[Direccio["Nord"] = 1] = "Nord";
        Direccio[Direccio["Sud"] = NaN] = "Sud";
        Direccio[Direccio["Est"] = "est".length] = "Est";
        Direccio[Direccio["Oest"] = 6] = "Oest";
    })(Direccio || (Direccio = {}));
    console.log(Direccio);
    let DireccioText;
    (function (DireccioText) {
        DireccioText["Nord"] = "NORD";
        DireccioText["Sud"] = "SUD";
        DireccioText["Est"] = "Est";
        DireccioText["Oest"] = "OEST";
    })(DireccioText || (DireccioText = {}));
    console.log(DireccioText);
    let Color;
    (function (Color) {
        Color[Color["Vermell"] = 0] = "Vermell";
        Color[Color["Verd"] = 1] = "Verd";
        Color[Color["Blau"] = 2] = "Blau";
    })(Color || (Color = {}));
    let z = Color.Verd;
    let z2 = Color[1];
    console.log(z2, z);
    console.log(Color);
    let ColorNum;
    (function (ColorNum) {
        ColorNum[ColorNum["Vermell"] = 30] = "Vermell";
        ColorNum[ColorNum["Verd"] = 8] = "Verd";
        ColorNum[ColorNum["Blau"] = 22] = "Blau";
    })(ColorNum || (ColorNum = {}));
    let cN = ColorNum.Blau;
    let cN2 = ColorNum[22];
    console.log(cN2, cN);
    console.log(ColorNum);
});
(function exercici8i9i10() {
    // Exercici 8
    const velocitat = 0;
    //probem de diferenciar segons combustible
    function accelerar(a) {
        return a + 20;
    }
    console.log(accelerar(velocitat));
    // Exercici 9
    const velocitat2 = 0;
    //probem de diferenciar segons combustible
    function accelerar2(a, b = "Diesel") {
        let suma = a + 20;
        return suma + "Km/h utilitzant " + b;
    }
    console.log(`La meva velocitat es ${accelerar2(velocitat2)}`);
    // Exercici 10
    const velocitat3 = 0;
    //probem de diferenciar segons combustible
    function accelerar3(a, b = "Diesel", c, d) {
        let suma = a + 20;
        if (c && d) {
            return `${suma} Km/h utilitzant ${b} i amb ${c} de ${d} anys`;
        }
        else if (c) {
            return suma + "Km/h utilitzant " + b + " i amb " + c;
        }
        else if (d) {
            return `${suma} Km/h utilitzant ${b} i amb algú de ${d} anys`;
        }
        else {
            return suma + "Km/h utilitzant " + b;
        }
    }
    console.log(`La meva velocitat es ${accelerar3(velocitat3, undefined, undefined, 23)}`);
});
(function exerciciPadLeft() {
    function padLeft(valor, marge) {
        if (typeof marge === "number") {
            return `Afegeix tantes 'X' com valor en número ${Array(marge + 1).join("X")} ${valor}`;
        }
        if (typeof marge === "string") {
            return `Afegeix tantes 'X' com valor.length en string ${Array(marge.length + 1).join("X")} ${valor}`;
        }
        return `Expected String or number, got '${marge}'`;
    }
    console.log(padLeft("esqerra", 4));
    console.log(padLeft("esquerra", "dos"));
    //console.log(padLeft("esquerra", true));
    let llista;
    llista = { a: 1, b: 2, c: 3, d: "Ramon" };
    //for (let element in llista) console.log(`${element}: ${llista[element]}`);
    let llista2;
    llista2 = [1, 2, 3, "Pere"];
    for (let element of llista2)
        console.log(`${llista2.indexOf(element)}: ${element}`);
    for (let i = 0; i < llista2.length; i++)
        console.log(`${i}: ${llista2[i]}`);
    let paraula = "Vas";
    for (let lletra of paraula)
        console.log(lletra);
    let frase = ["No", "sé", "què", "estàs", "llegint", "passarell"];
    for (let paraula of frase)
        console.log(paraula);
    let stringx = "Hola bon dia";
    for (let caracter of stringx)
        console.log(caracter);
});
(function exercici11i12i13() {
    // Exercici 11
    // Funcio normal en TypeScript
    let mevaFuncio = function (a) {
        return a;
    };
    //Funcio de fletxa en TypeScript
    let mevaFuncioF = (a) => a;
    console.log(mevaFuncio("Normal"));
    console.log(mevaFuncioF("Fletxa"));
    // Exercici 12
    // Funcio normal en TypeScript amb 2 o més parametres
    let mevaFuncio2 = function (a, b) {
        return a + b;
    };
    //Funcio de fletxa en TypeScript amb 2 o més parametres ()
    let mevaFuncioF2 = (a, b) => a + b;
    console.log(mevaFuncio2("Normal".length, 5));
    console.log(mevaFuncioF2("Fletxa".length, 7));
    // Ecercici 13
    // Funcio normal en TypeScript amb 2 o més parametres
    let mevaFuncio3 = function (a, b) {
        return a + b;
    };
    //Funcio de fletxa en TypeScript amb 2 o més parametres ()
    let mevaFuncioF3 = (a, b) => a + b; //Pendent
    console.log(mevaFuncio3(2, 2));
    console.log(mevaFuncioF3(2, 3));
    //Anem a veure con es realitzaria amb diverses linies de logica
    let funcioMajuscules = function (paraula) {
        paraula = paraula.toUpperCase();
        return paraula;
    };
    let funcioMajusculesF = (paraula) => {
        paraula = paraula.toUpperCase();
        return paraula;
    };
    console.log(funcioMajuscules("pepitolospalotes"));
    console.log(funcioMajusculesF("cagüenlaleche"));
});
(function exercici14() {
    let nom2 = "Josep";
    // Funcio normal en TypeScript
    let persona = {
        nom2: "Doraemon",
        pinta() {
            setTimeout(function () {
                console.log(nom2 + " pinta un dibuix");
            }, 1000);
        },
    };
    persona.pinta();
    //Funcio de fletxa en TypeScript
    let persona1 = {
        nom2: "Doraemon",
        pinta() {
            setTimeout(() => {
                //Aqui tindriem que fer-ho !function=>
                console.log(this.nom2 + " pinta un dibuix");
            }, 1500);
        },
    };
    persona1.pinta();
});
(function exercici15i16i17i18() {
    // Exercici 15
    const cotxe = {
        model: "Kia Rio",
        motor: 1.5,
        combustible: "Diesel",
        meu: true,
    };
    // Destructuració de objectes {,,}= ;
    const { model, motor, combustible, meu } = cotxe;
    console.log(model + " " + motor + " " + combustible + " " + meu);
    // Exercici 16
    let cotxe3 = {
        model3: "Kia Rio",
        motor3: "1.5",
        combustible3: "Diesel",
    };
    // Destructuració de objectes {,,}= ;
    const { model3: string, motor3, combustible3 } = cotxe3;
    //console.log(model3+ " " +motor3+ " " +combustible3);
    // Exercici 17
    let conductors = ["Toni", "Oriol", "Ana"];
    // Desestructuració de l'Array [] =;
    // const [a, ...rest]
    const [a, ...f] = conductors;
    console.log(a + " " + f);
    console.log(f);
    // I si només volem obtenir el valor c? ,,c
    const [, , d] = conductors;
    console.log(d);
    // Exercici 18
    function mostracombustibles(primer, ...segon) {
        console.log(primer, segon);
    }
    const combustibles = ["Diesel", "Benzina"];
    const nouscombustibles = ["Electric", "GLP"];
    mostracombustibles(combustibles, ...nouscombustibles);
});
(function exercici19() {
    const promesa1 = new Promise(function (resolve, reject) {
        setTimeout(() => {
            //console.log(missatge);
            //Si acaba be
            const exit = true;
            if (exit)
                resolve("ok");
            //Si acaba malament
            else
                reject("ko");
        }, 1500);
    });
    //console.log("Pas 1");
    /* promesa1.then(
        ///then(resolve,reject)
        function () {
            console.log("Em mostraré quan la promesa acabi bé");
        },
        function () {
            console.error("Em mostraré si tot surt malament");
        }
        ); */
    promesa1.then((resposta) => {
        console.log("then", resposta);
        console.log("Em mostraré quan la promesa acabi bé");
    });
    //console.log("Pas 2");
    /* promesa1.catch(function (error) {
        console.log(error);
    }); */
    promesa1.catch((error) => {
        console.log("catch", error);
        console.log(error);
    });
});
(function exercici20() {
    // Exercici 20
    const promesa2 = () => {
        setTimeout(() => {
            console.log("Client 1 - 1er Plat");
            console.log("Client 1 - 2on Plat");
            console.log("Client 1 - Postre");
        }, 1500);
    };
    const promesa3 = () => {
        //setTimeout( ()=>{
        console.log("Client 2 - 1er Plat");
        console.log("Client 2 - 2on Plat");
        console.log("Client 2 - Postre");
        //}, 1500)
    };
    //console.log("Pas 1");
    promesa2();
    promesa3();
});
(function exercici21i22i23() {
    // Exercici 21, 22, 23
    const funcioCobrarDinar = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 3000);
        });
    };
    const promesa4 = () => {
        console.log("Client 1 - 1er Plat");
        console.log("Client 1 - 2on Plat");
        console.log("Client 1 - Postre");
        const cobrar = funcioCobrarDinar();
        console.log("Aqui tè el compte", cobrar);
    };
    const promesa5 = () => {
        //setTimeout( ()=>{
        console.log("Client 2 - 1er Plat");
        console.log("Client 2 - 2on Plat");
        console.log("Client 2 - Postre");
        //}, 1500)
    };
    //console.log("Pas 1");
    promesa4();
    promesa5();
});
(function exercici24() {
    // Exercici 24
    const funcioCobrarDinar3 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 3000);
        });
    };
    let promesa6 = () => __awaiter(this, void 0, void 0, function* () {
        console.log("Client 1 - 1er Plat");
        console.log("Client 1 - 2on Plat");
        console.log("Client 1 - Postre");
        const cobrar = yield funcioCobrarDinar3();
        console.log("Aquí té el compte", cobrar);
    });
    let promesa7 = () => {
        console.log("Client 2 - 1er Plat");
        console.log("Client 2 - 2on Plat");
        console.log("Client 2 - Postre");
    };
    //console.log("Pas 1");
    promesa6();
    promesa7();
});
(function exercici25() {
    function coche(objecte) {
        console.log("El meu cotxe es un: " + objecte.marca); //provem marcaes
    }
    let elMeuCotxe = {
        marca: "Kia",
        portes: 5,
        combustible: "Diesel",
    };
    coche(elMeuCotxe);
});
