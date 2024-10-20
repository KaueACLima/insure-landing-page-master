const hamburguer = document.querySelector(".hamburguer");
const desktopMenu = document.querySelector(".desktop-menu");

hamburguer.addEventListener('click', function() {
  desktopMenu.classList.toggle("hidden");
  hamburguer.src = "../images/icon-close.svg";
});