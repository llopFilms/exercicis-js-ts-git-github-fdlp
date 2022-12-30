const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

const carregarImatge = (entrades, observador) => {
  console.log(entrades, observador);
  entrades.forEach((entrada) => {
    if (entrada.isIntersecting) entrada.target.classList.add("visible");
    else entrada.target.classList.remove("visible");
  });
};

const observador = new IntersectionObserver(carregarImatge, {
  rootMargin: "500px 100px 0px 0px",
  threshold: 1,
});

observador.observe(img1);
observador.observe(img2);
