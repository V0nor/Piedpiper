const menuMobile = document.querySelector('.navbar__toggle');
const navbarLinks = document.querySelector('.navbar__links');

const header = document.querySelector('.header');

menuMobile.addEventListener('click', () => {
    navbarLinks.classList.toggle('show__links');;
    menuMobile.classList.toggle('active');
});
