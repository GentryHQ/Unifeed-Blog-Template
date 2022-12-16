let toggleMenu = document.querySelector('#ham');
let menu = document.querySelector('.links');


toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
})