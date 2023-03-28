import { constants } from "./constants.js";

const url = constants.urlPosts;
const form = document.querySelector("form");

const createPost = async (e) => {
  e.preventDefault();

  const nouPost = {
    title: form.title.value,
    body: form.body.value,
    likes: 0,
  };

  try {
    const resposta = await fetch(url, {
      method: "POST",
      body: JSON.stringify(nouPost),
      headers: { "content-type": "application/json" },
    });
    console.log(resposta);
    if (!resposta.ok) throw new Error("Error de POST!");
    console.warn("Blog s'ha creat correctament!");
  } catch (error) {
    console.warn(error);
  }

  window.location.replace("./index.html");
};
form.addEventListener("submit", createPost);
