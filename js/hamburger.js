const menuTrigger = document.querySelector(".menu-trigger");
const menuOverlay = document.querySelector(".menu-overlay");
const menuClose = document.querySelector(".menu-close");


/* open menu */

menuTrigger.addEventListener("click", function () {

    menuOverlay.classList.add("open");

});


/* close with X */

menuClose.addEventListener("click", function () {

    menuOverlay.classList.remove("open");

});


/* close by clicking outside the menu */

menuOverlay.addEventListener("click", function (event) {

    if (event.target === menuOverlay) {

        menuOverlay.classList.remove("open");

    }

});


/* open / close submenus */

document.querySelectorAll(".menu-item").forEach(function (item) {

    const heading = item.querySelector(".menu-heading");
    const submenu = item.querySelector(".menu-submenu");
    const arrow = item.querySelector(".menu-arrow");

    if (!submenu) return;

    heading.addEventListener("click", function () {

        const isOpen = submenu.classList.toggle("open");

        arrow.textContent = isOpen ? "▲" : "▼";

    });

});