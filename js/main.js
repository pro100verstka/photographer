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

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".carousel__button--next",
    prevEl: ".carousel__button--prev",
  },
});

let center = [55.74669833459595, 37.64925701849364];

function init() {
  let map = new ymaps.Map("map", {
    center: center,
    zoom: 15,
  });

	const circleLayout = ymaps.templateLayoutFactory.createClass(`<div class="map__container"><div class="map__circle">`);

  let placemark = new ymaps.Placemark(
    center,
    {},
    {
      iconLayout: circleLayout,
      iconImageHref: "",
      iconImageSize: [24, 24],
      iconImageOffset: [0, 0],
    }
  );

  map.controls.remove("geolocationControl");
  map.controls.remove("searchControl");
  map.controls.remove("trafficControl");
  map.controls.remove("typeSelector");
  map.controls.remove("fullscreenControl");
  map.controls.remove("zoomControl");
  map.controls.remove("rulerControl");
  map.behaviors.disable(["scrollZoom"]);
  map.geoObjects.add(placemark);
}

ymaps.ready(init);
