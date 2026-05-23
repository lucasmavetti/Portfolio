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
if (titulo) ativaLetra(titulo);

// Menu mobile
const iconMenu = document.querySelector("header i");
const menuMobile = document.querySelector(".menu_mobile");

if (iconMenu && menuMobile) {
  iconMenu.addEventListener("click", () => {
    menuMobile.classList.toggle("aberto");
    iconMenu.classList.toggle("bi-three-dots-vertical");
    iconMenu.classList.toggle("bi-x");
  });
}

// Smooth scroll compensando header sticky
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    const headerHeight = document.querySelector('header').offsetHeight;
    window.scrollTo({
      top: target.offsetTop - headerHeight,
      behavior: 'smooth'
    });
    // Fecha o menu mobile ao clicar em um link
    if (menuMobile) menuMobile.classList.remove('aberto');
    if (iconMenu) {
      iconMenu.classList.add('bi-three-dots-vertical');
      iconMenu.classList.remove('bi-x');
    }
  });
});

