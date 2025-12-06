const iconMenu = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu');

if (iconMenu) {
  iconMenu.addEventListener('click', (e) => {
    iconMenu.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock')
  })
}