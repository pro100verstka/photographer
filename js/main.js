const iconMenu = document.querySelector("[data-js-header-burger-button]");
const menuBody = document.querySelector("[data-js-menu-body]");
const htmlElement = document.documentElement;

function openMenu() {
	if(iconMenu) {
		iconMenu.addEventListener("click", function(event){
			iconMenu.classList.toggle("is-active");
			menuBody.classList.toggle("is-active");
			htmlElement.classList.toggle("is-lock")
		})
	}
}

openMenu();



