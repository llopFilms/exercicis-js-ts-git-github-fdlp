import { constants } from "./constants.js";
const url = constants.urlPosts;

const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details");
const deleteBtn = document.querySelector(".details-button");
let template = "";

const renderDetails = async () => {
  const resposta = await fetch(url + "/" + id);
  const post = await resposta.json();

  template = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
  `;

  container.innerHTML = template;
};
window.addEventListener("DOMContentLoaded", () => renderDetails());

const deleteBlog = async (e) => {
  try {
    const resposta = await fetch(url + "/" + id, {
      method: "DELETE",
    });
    if (!resposta.ok) throw new Error("Error de DELETE!");
    console.warn("Blog esborrat correctament!");
  } catch (error) {
    console.warn(error);
  }
  window.location.replace("./index.html");
};
deleteBtn.addEventListener("click", () => deleteBlog());
