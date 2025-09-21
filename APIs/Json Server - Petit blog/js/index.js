import { constants } from "./constants.js";

let url = constants.urlPosts;
const container = document.querySelector(".blogs");
const searchForm = document.querySelector(".search");

const renderPosts = async (term) => {
  let template = "";

  try {
    const resposta = !term
      ? await fetch(url + "?_sort=likes&_order=desc")
      : await fetch(url + `?q=${term}`);
    
    if (!resposta.ok) throw new Error("Error de càrrega!");
    const posts = await resposta.json();
    console.warn("Dades carregades correctament!");

    posts.forEach((post) => {
      template += `
        <div class="post">
          <h3>${post.title}</h3>
          <span>${post.likes} m'agrada</span>
          <p>${
            post.body.length < 200 ? post.body : post.body.slice(0, 200) + "..."
          }</p>
          <a href="./details.html?id=${post.id}">Llegir més...</a>
        </div>
        `;
    });
  } catch (error) {
    console.warn(error);
    template += `
        <div class="post">
          <h3>Error de càrrega!</h3>         
        </div>
        `;
  }
  container.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", () => renderPosts());

const searchTerm = (e) => {
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
};

searchForm.addEventListener("submit", (e) => searchTerm(e));

