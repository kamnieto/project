const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMovileMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

navEmail.addEventListener('click',ToggleDesktopMenu);
iconMovileMenu.addEventListener('click',ToggleMobileMenu);

function ToggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
function ToggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}