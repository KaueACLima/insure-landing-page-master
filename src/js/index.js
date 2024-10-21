const hamburguer = document.querySelector(".hamburguer");
const desktopMenu = document.querySelector(".desktop-menu");

hamburguer.addEventListener("click", function () {
  desktopMenu.classList.toggle("hidden");
  hamburguer.src = desktopMenu.classList.contains("hidden")
    ? "./src/images/icon-hamburger.svg"
    : "../images/icon-close.svg";
});
