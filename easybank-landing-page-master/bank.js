const iconMenu = document.querySelector(".open-icon");
const closeMenu = document.querySelector(".close-icon");
const menu = document.querySelector(" nav ul");
const menuItem = document.querySelectorAll(" nav ul li a");

function toggleMenu() {
    iconMenu.classList.toggle("hide");
    closeMenu.classList.toggle("hide");
    menu.classList.toggle("hide");
}

iconMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", toggleMenu);
}