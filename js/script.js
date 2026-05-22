function ativaLetra(elemento) {
  const arrTexto = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  arrTexto.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 75 * i);
  });
  
}

const titulo = document.querySelector(".digitando");
ativaLetra(titulo);

// Menu mobile
const btnMenu = document.querySelector(".bi-three-dots-vertical, .bi-x");
const iconMenu = document.querySelector("header i");
const menuMobile = document.querySelector(".menu_mobile");

if (iconMenu && menuMobile) {
  iconMenu.addEventListener("click", () => {
    menuMobile.classList.toggle("aberto");
    iconMenu.classList.toggle("bi-three-dots-vertical");
    iconMenu.classList.toggle("bi-x");
  });
}
