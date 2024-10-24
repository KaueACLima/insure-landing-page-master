const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener('click', () => {
  const menu = document.querySelector(".nav-links");
  const icon = menuBtn.querySelector("img");

  menu.classList.toggle("active");
  if(menu.classList.contains("active")) {
    icon.src="./src/images/icon-close.svg";
    document.body.style.overflow = "hidden";
  } else {
    icon.src="./src/images/icon-hamburger.svg";
    document.body.style.overflow = "auto";
  }
})