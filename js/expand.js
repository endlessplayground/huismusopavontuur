document.querySelectorAll(".expand-item").forEach(function (item) {

    const trigger = item.querySelector(".expand-trigger");
    const content = item.querySelector(".expand-content");
    const arrow = item.querySelector(".expand-arrow");

    trigger.addEventListener("click", function () {

        const isOpen = content.classList.toggle("open");

        trigger.setAttribute("aria-expanded", isOpen);
        arrow.textContent = isOpen ? "▲" : "▼";

    });

});