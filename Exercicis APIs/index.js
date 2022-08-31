

/* const API_URL = "http://jsonplaceholder.typicode.com";

const HTMLResposta = document.querySelector("#app");
/* 
fetch(`${API_URL}/users`)
  .then((response) => response.json())
  .then((usuaris) => {
    const plantilla = usuaris.map((usuari) => `<li>${usuari.name} ${usuari.email}</li>`).join("<br>");
    HTMLResposta.innerHTML = `<ul>${plantilla}</ul>`;
  });

const ul = document.createElement("ul");

fetch(`${API_URL}/users`)
  .then((response) => response.json())
  .then((usuaris) => {
    usuaris.forEach((usuari) => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.innerHTML = `${usuari.name}`;
      span.style.cssText = "font-weight: bold; margin-right: 10px";
      li.appendChild(span);
      const text = `${usuari.email}`;
      li.style.cssText = "margin: 10px 0;";
      li.append(text);
      ul.appendChild(li);
    });
    HTMLResposta.appendChild(ul);
  });

  const url = "https://pokeapi.co/api/v2/pokemon/150/";
  fetch(url)
    .then((response) => response.json())
    .then((pokemon) => {
      console.log(pokemon);
      const app2 = document.getElementById("app2");
      app2.innerHTML = 
        `<p>${pokemon.name}</p>
        <p>${pokemon.order}</p>
        <img src=${pokemon.sprites.front_default}>
        `;
    })
    .catch((err) => console.error(err)); */

  /* fetch("https://icanhazdadjoke.com/", { headers: {"Accept": "application/json"} })
    .then((response) => response.json())
    .then((acudit) => console.log(acudit.joke)); */

const rebreAcudit = async () => {
  try {
    const resposta = await fetch("https://icanhazdadjoke.com/", {
      headers: {
      "Accept": "application/json"
      }
    });
    const json = await resposta.json();
    console.log(json);
  } catch (err) { console.log(err.message)};
}

const getJoke = async () => {
  try {
    const respuesta = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            'Accept': 'application/json'
        }
    });
    const datos = await respuesta.json(); 
    joke = datos.joke;
    console.log("acudit: ", joke);
  } catch (error) {
    console.log(error);
  }
}