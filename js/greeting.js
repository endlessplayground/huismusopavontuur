
document.addEventListener("DOMContentLoaded", function () {
    const greeting = document.getElementById("today-greeting");

    if (!greeting) return;

    const hour = new Date().getHours();

    let timeGreeting;

    if (hour >= 4 && hour < 12) {
        timeGreeting = "goeiemorgen";
    } else if (hour >= 12 && hour < 18) {
        timeGreeting = "goeiemiddag";
    } else if (hour >= 18 && hour < 24) {
        timeGreeting = "goedenavond";
    } else {
        timeGreeting = "goedenacht";
    }

    greeting.textContent = "Hee, " + timeGreeting + "!";
});