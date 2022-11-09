const valor = () => 666;

try {
  const num = valor();
  if (num === 666) throw new Error("No vull el 666");
} catch (error) {
  console.error(error.name, error.message);
}
console.log("Seguim");

const gato = {
  nombre: "Guizmo",
  raza: "negra",
};

function comprobarGato() {
  try {
    if (!gato.raza) throw new SyntaxError("Falta raza gato");
  } catch (error) {
    if (error instanceof SyntaxError) console.error("Info incompleta", error);
    else throw error;
  }
}
try {
  comprobarGato();
} catch (error) {
  console.error("Otros errorres", error);
}

let respuesta =
  '{ "nombre": "Juan", "profesion": "dev", "herramientas": ["Javascript", "Vue"]}';

function comprobarRespuesta() {
  const inici = Date.now();

  try {
    respuesta = JSON.parse(respuesta);
    console.log(respuesta);

    if (!respuesta.nombre || !respuesta.profesion)
      throw new SyntaxError("Falten les propietats!");

    if (!respuesta.herramientas.includes("Vue"))
      throw new RangeError("Ens falta Vue!");

    return true;
  } catch (error) {
    console.error(error);
    return false;
  } finally {
    console.log(Date.now() - inici + " milisegons");
  }
}

const check = comprobarRespuesta();
console.log(check);

const string = "12345";
try {
  const reverse = string.split("").reverse().join("");
  console.log(reverse);
  console.log(typeof reverse);
} catch {
  console.error(error.message);
} finally {
  console.log(typeof reverse);
  console.log(typeof string);
}

try {
  const PI = 3.1416;
  PI = 32323;
} catch (e) {
  console.log("Error!!", e);
} finally {
  console.log("Hem acabat!");
}

async function codiAsincron() {
  try {
    console.log(1);
    await setTimeout(() => { console.log(2) }, 2000);
    console.log(3);
  } catch (error) {
    console.log("Error!", error);
  } finally {
    console.log("Hem acabat!");
  }
}
codiAsincron();
