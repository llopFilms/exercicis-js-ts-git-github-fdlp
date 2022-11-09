const API_URL = "https://api.spacexdata.com/v3";

export async function getTotsCoets() {
  try {
    const resposta = await fetch(`${API_URL}/launches`);
    const dades = await resposta.json();
    return dades;
  } catch (error) {
    console.log("Error!", error);
  }
}

export async function getCoetsPerNumero(numeroCohet) {
  try {
    const resposta = await fetch(`${API_URL}/launches/${numeroCohet}`);
    const dades = await resposta.json();
    return dades;
  } catch (error) {
    console.log("Error!", error);
  }
}
