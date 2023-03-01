const navToggle = document.querySelector('.hamburger');
const nav = document.querySelector('.menu__list');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('menu__list--active');
});
