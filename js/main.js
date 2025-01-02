const iconMenu = document.querySelector("[data-js-header-burger-button]");
const menuBody = document.querySelector("[data-js-menu-body]");
const htmlElement = document.documentElement;
let inputs = document.querySelectorAll('input[type="tel"]');

function openMenu() {
  if (iconMenu) {
    iconMenu.addEventListener("click", function (event) {
      iconMenu.classList.toggle("is-active");
      menuBody.classList.toggle("is-active");
      htmlElement.classList.toggle("is-lock");
    });
  }
}

openMenu();

var im = new Inputmask("+7 (999) 999-99-99");
im.mask(inputs);