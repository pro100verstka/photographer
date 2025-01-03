const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
let inputs = document.querySelectorAll('input[type="tel"]');

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("is-lock");
    iconMenu.classList.toggle("is-active");
    menuBody.classList.toggle("is-active");
  });
}

// Прокрутка при клике
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      if (iconMenu.classList.contains("is-active")) {
        document.body.classList.remove("is-lock");
        iconMenu.classList.remove("is-active");
        menuBody.classList.remove("is-active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

var im = new Inputmask("+7 (999) 999-99-99");
im.mask(inputs);
