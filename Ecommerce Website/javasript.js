let menu = document.querySelector('#menu-icon');
let nevbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nevbar.classList.toggle('active');
};

Window.onscroll = () => {
    menu.classList.remove('bx-x');
    nevbar.classList.remove('active');
};