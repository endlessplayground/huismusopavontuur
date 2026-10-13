
/* =================================
   STANDAARDKLUSSEN
   Voeg hier zelf taken toe of pas ze aan.
   ================================= */

const standaardTaken = [
    "Ruim één kast helemaal op",
    "Maak de koelkast grondig schoon",
    "Was de ramen",
    "Ruim mijn kleding uit",
    "Maak een back-up van mijn bestanden",
    "Werk mijn administratie bij",
    "Ruim mijn digitale mailbox op",
    "Maak mijn badkamer grondig schoon",
    "Controleer mijn abonnementen",
    "Maak mijn fiets schoon en controleer hem",
    "Ruim mijn voorraadkast op",
    "Sorteer mijn digitale foto's",
    "Maak mijn oven schoon",
    "Geef mijn planten een onderhoudsbeurt",
    "Ruim een rommellade op",
    "Controleer mijn verzekeringen",
    "Maak mijn bed en slaapkamer extra fris",
    "Ruim mijn hobbyspullen op",
    "Controleer mijn gereedschap",
    "Maak mijn vriezer schoon",
    "Controleer mijn wachtwoorden",
    "Repareer iets wat al te lang stuk is",
    "Ruim mijn boekenkast op",
    "Maak mijn computer schoon",
    "Controleer mijn uitgaven",
    "Ruim mijn hal op",
    "Was gordijnen of plaids",
    "Controleer mijn fiets- en wandelspullen",
    "Pak een achterstallige klus aan",
    "Maak een vergeten hoek helemaal af"
];


/* =================================
   OPSLAG
   ================================= */

const todoKey = "yvon-todo-actief";

let taken = [];

try {
    const opgeslagen = localStorage.getItem(todoKey);
    taken = opgeslagen ? JSON.parse(opgeslagen) : [];

    if (!Array.isArray(taken)) {
        taken = [];
    }
} catch (error) {
    taken = [];
}

function bewaarTaken() {
    localStorage.setItem(todoKey, JSON.stringify(taken));
}


/* =================================
   ELEMENTEN
   ================================= */

const keuze = document.getElementById("todo-choice");
const voorraadKnop = document.getElementById("todo-add-stock");
const formulier = document.getElementById("todo-form");
const invoer = document.getElementById("todo-input");
const lijst = document.getElementById("todo-list");
const leegKnop = document.getElementById("todo-clear");


/* =================================
   STANDAARDTAKEN TONEN
   ================================= */

standaardTaken.forEach((taak) => {
    const optie = document.createElement("option");
    optie.value = taak;
    optie.textContent = taak;
    keuze.appendChild(optie);
});


/* =================================
   TAAK TOEVOEGEN
   ================================= */

function voegTaakToe(taak) {
    taak = taak.trim();

    if (!taak) return;

    taken.push(taak);
    bewaarTaken();
    toonTaken();
}

voorraadKnop.addEventListener("click", () => {
    voegTaakToe(keuze.value);
    keuze.value = "";
});

formulier.addEventListener("submit", (event) => {
    event.preventDefault();

    voegTaakToe(invoer.value);
    invoer.value = "";
    invoer.focus();
});


/* =================================
   LIJST TONEN
   ================================= */

function toonTaken() {
    lijst.innerHTML = "";

    taken.forEach((taak, index) => {
        const item = document.createElement("li");

        const klaarKnop = document.createElement("button");
        klaarKnop.type = "button";
        klaarKnop.className = "todo-done";
        klaarKnop.textContent = "✅";
        klaarKnop.setAttribute(
            "aria-label",
            "Verwijder afgerond klusje"
        );

        klaarKnop.addEventListener("click", () => {
            taken.splice(index, 1);
            bewaarTaken();
            toonTaken();
        });

        const tekst = document.createElement("span");
        tekst.textContent = taak;

        item.append(klaarKnop, tekst);
        lijst.appendChild(item);
    });
}


/* =================================
   LIJST HELEMAAL LEEGMAKEN
   ================================= */

leegKnop.addEventListener("click", () => {
    if (taken.length === 0) return;

    taken = [];
    bewaarTaken();
    toonTaken();
});


/* =================================
   START
   ================================= */

toonTaken();
