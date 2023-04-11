const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navEmail.addEventListener('click',viewToggle);

function viewToggle(){
    desktopMenu.classList.toggle('inactive');
}