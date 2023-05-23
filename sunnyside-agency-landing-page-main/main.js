const iconMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menu = document.querySelector("ul");
const menuItem = document.querySelectorAll("ul li a");
const menuButton = document.querySelector("button");

function toggleMenu() {
    iconMenu.classList.toggle("hide");
    closeMenu.classList.toggle("hide");
    menu.classList.toggle("hide");
    menuButton.classList.toggle("hide-button"); // Add a separate class for the button
}

iconMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", toggleMenu);
}

menuButton.addEventListener("click", toggleMenu); // Add event listener for the button



const navbar = document.querySelector('.navbar');
const mainContent = document.querySelector('main');
const navbarHeight = navbar.offsetHeight;

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    if (scrollPosition > navbarHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelector('.animated-arrow').addEventListener('click', function () {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

