
const klussen = [
    {
        titel: "Ruim één kast helemaal op",
        tekst: "Haal alles eruit, maak de kast schoon en zet alleen terug wat je echt wilt bewaren. Geef spullen die weg mogen meteen een bestemming."
    },
    {
        titel: "Maak een grondige schoonmaakronde",
        tekst: "Kies één ruimte en pak ook de plekken aan die bij het gewone schoonmaken worden overgeslagen, zoals plinten, hoekjes en bovenkanten."
    },
    {
        titel: "Ruim je kleding uit",
        tekst: "Loop je kleding door en beslis wat je nog draagt, wat gerepareerd moet worden en wat weg kan. Maak meteen een stapel voor kleding die een tweede leven verdient."
    },
    {
        titel: "Pak een vergeten hoek aan",
        tekst: "Kies een plek waar spullen zich ongemerkt ophopen. Maak die helemaal leeg, maak schoon en geef alles wat blijft een vaste plek."
    },
    {
        titel: "Maak een back-up van je bestanden",
        tekst: "Controleer welke foto's, documenten en andere bestanden je wilt bewaren. Maak een reservekopie en kijk of je die ook daadwerkelijk kunt openen."
    },
    {
        titel: "Was ramen en kozijnen",
        tekst: "Neem de ramen aan één kant van je huis grondig onder handen, inclusief de kozijnen, vensterbanken en moeilijk bereikbare randjes."
    },
    {
        titel: "Controleer je voorraadkast",
        tekst: "Haal de voorraad eruit, controleer houdbaarheidsdatums en maak de planken schoon. Zet producten die het eerst op moeten vooraan."
    },
    {
        titel: "Werk je foto's bij",
        tekst: "Loop een flinke selectie digitale foto's door. Verwijder mislukte en dubbele beelden en maak een paar albums die je later makkelijk terugvindt."
    },
    {
        titel: "Geef je administratie een beurt",
        tekst: "Verzamel rondslingerende papieren en digitale documenten. Sorteer ze, archiveer wat bewaard moet blijven en gooi overbodige stukken weg."
    },
    {
        titel: "Maak je keukenapparatuur schoon",
        tekst: "Kies een paar apparaten die een grondige beurt kunnen gebruiken. Denk aan de koelkast, magnetron, waterkoker of afzuigkap."
    },
    {
        titel: "Controleer je kleding op reparaties",
        tekst: "Zoek kleding met losse knopen, kleine gaatjes of losgeraakte naden bij elkaar. Repareer wat je zelf kunt doen en leg de rest apart."
    },
    {
        titel: "Pak je digitale rommel aan",
        tekst: "Verwijder ongebruikte downloads, oude screenshots en overbodige bestanden. Orden de rest in mappen waarin je snel iets terugvindt."
    },
    {
        titel: "Maak je badkamer grondig schoon",
        tekst: "Pak niet alleen de zichtbare oppervlakken aan, maar ook voegen, randen, kastjes en de plekken achter en onder spullen."
    },
    {
        titel: "Loop je abonnementen na",
        tekst: "Bekijk welke abonnementen en terugkerende betalingen je hebt. Controleer of je ze nog gebruikt en noteer wanneer je ze eventueel kunt opzeggen."
    },
    {
        titel: "Maak je fiets helemaal schoon",
        tekst: "Reinig je fiets en controleer banden, verlichting, remmen en ketting. Kijk ook of er iets gerepareerd of afgesteld moet worden."
    },
    {
        titel: "Organiseer je schoonmaakspullen",
        tekst: "Verzamel alle schoonmaakmiddelen en hulpmiddelen. Gooi lege of onbruikbare spullen weg en zet de rest overzichtelijk bij elkaar."
    },
    {
        titel: "Ruim je digitale mailbox op",
        tekst: "Verwijder oude nieuwsbrieven en overbodige berichten. Schrijf je uit voor mails die je niet meer wilt ontvangen en archiveer belangrijke berichten."
    },
    {
        titel: "Controleer je voorraad verzorgingsproducten",
        tekst: "Loop badkamerkastjes en lades na. Verwijder lege verpakkingen en producten die je niet meer gebruikt en maak de opbergruimte schoon."
    },
    {
        titel: "Maak je bed en slaapkamer extra fris",
        tekst: "Was het beddengoed, maak het bedframe en de ruimte eromheen schoon en pak een plek aan die normaal buiten beeld blijft."
    },
    {
        titel: "Geef je planten een onderhoudsbeurt",
        tekst: "Controleer welke planten water, snoeiwerk of verpotten nodig hebben. Verwijder dode bladeren en maak de potten en schotels schoon."
    },
    {
        titel: "Controleer je gereedschap",
        tekst: "Verzamel gereedschap en kleine klusmaterialen. Maak ze schoon, controleer wat ontbreekt en leg alles logisch bij elkaar."
    },
    {
        titel: "Maak een overzicht van belangrijke gegevens",
        tekst: "Controleer waar belangrijke documenten, contactgegevens en garantiebewijzen staan. Zorg dat je ze bij nood of bij een reparatie snel kunt vinden."
    },
    {
        titel: "Pak de diepvries aan",
        tekst: "Inventariseer de inhoud, noteer wat op moet en verwijder producten die niet meer bruikbaar zijn. Maak de vriezer schoon als dat nodig is."
    },
    {
        titel: "Maak je schoenen netjes",
        tekst: "Reinig je schoenen, verzorg leer waar nodig en controleer zolen en veters. Beslis welke paren gerepareerd of vervangen moeten worden."
    },
    {
        titel: "Controleer je verlichting",
        tekst: "Loop alle kamers langs. Controleer lampen, snoeren en schakelaars en vervang kapotte lampen. Maak lampenkappen schoon."
    },
    {
        titel: "Ruim een lade helemaal uit",
        tekst: "Kies een rommellade en haal alles eruit. Maak de lade schoon, gooi overbodige spullen weg en leg de rest overzichtelijk terug."
    },
    {
        titel: "Onderhoud je computer",
        tekst: "Controleer updates, verwijder programma's die je niet meer gebruikt en kijk of je bestanden goed geback-upt zijn. Maak ook het toetsenbord en scherm schoon."
    },
    {
        titel: "Loop je keukenkastjes na",
        tekst: "Kies een paar kastjes, haal ze leeg en maak ze schoon. Controleer de inhoud en zet spullen die je vaak gebruikt op een handige plek."
    },
    {
        titel: "Maak je entree uitnodigend",
        tekst: "Ruim de hal op, maak vloer en deuren schoon en geef schoenen, jassen, tassen en sleutels een vaste plek."
    },
    {
        titel: "Controleer je verzekeringen",
        tekst: "Verzamel je polisgegevens en bekijk welke verzekeringen je hebt. Noteer vragen, dubbele dekkingen of gegevens die je moet bijwerken."
    },
    {
        titel: "Maak je tuin of balkon winter- of zomerklaar",
        tekst: "Pas de klus aan het seizoen aan: snoei waar nodig, ruim potten op, reinig tuinmeubilair of bereid planten voor op het komende seizoen."
    },
    {
        titel: "Ruim je handtas of dagelijkse tas op",
        tekst: "Haal de inhoud eruit, verwijder bonnetjes en rommel en maak de tas schoon. Leg alleen terug wat je daadwerkelijk nodig hebt."
    },
    {
        titel: "Maak je oven grondig schoon",
        tekst: "Reinig de oven en de bakplaten volgens de gebruiksaanwijzing. Controleer ook de ovenroosters en het gebied rondom het apparaat."
    },
    {
        titel: "Controleer je noodvoorraad",
        tekst: "Bekijk of je zaklamp, batterijen, EHBO-spullen en andere basisbenodigdheden bruikbaar zijn. Vul aan wat ontbreekt."
    },
    {
        titel: "Geef je boekenkast een beurt",
        tekst: "Haal een gedeelte van de boeken uit de kast, maak de planken schoon en zet alles terug in een indeling die voor jou prettig werkt."
    },
    {
        titel: "Maak je huishoudelijke apparaten kalkvrij",
        tekst: "Controleer welke apparaten ontkalking nodig hebben en onderhoud ze volgens de instructies van de fabrikant."
    },
    {
        titel: "Loop je wachtwoorden en accounts na",
        tekst: "Controleer belangrijke accounts op verouderde gegevens. Werk zwakke of hergebruikte wachtwoorden bij en schakel waar mogelijk tweestapsverificatie in."
    },
    {
        titel: "Pak een klein reparatieproject aan",
        tekst: "Kies iets in huis dat al een tijdje stuk is of niet goed werkt. Zoek uit wat nodig is en probeer het deze week daadwerkelijk te repareren."
    },
    {
        titel: "Maak je koelkast grondig schoon",
        tekst: "Haal de inhoud eruit, controleer producten, reinig planken en lades en zet alles terug met producten die snel op moeten vooraan."
    },
    {
        titel: "Organiseer je hobbyspullen",
        tekst: "Verzamel de materialen van één hobby. Sorteer ze, ruim ongebruikte spullen op en maak het makkelijker om er weer mee aan de slag te gaan."
    },
    {
        titel: "Controleer je huis op kleine gebreken",
        tekst: "Loop alle kamers door en noteer losse handgrepen, lekkende kranen, beschadigingen en andere kleine mankementen. Los er minstens één op."
    },
    {
        titel: "Maak je digitale agenda schoon",
        tekst: "Verwijder achterhaalde afspraken en herinneringen. Controleer terugkerende afspraken en zet belangrijke toekomstige data op de juiste plek."
    },
    {
        titel: "Was gordijnen of andere grote stoffen",
        tekst: "Kies gordijnen, plaids, kussenhoezen of andere stoffen die een wasbeurt kunnen gebruiken. Controleer eerst de wasvoorschriften."
    },
    {
        titel: "Maak je schoonmaakrooster overbodig of beter",
        tekst: "Bekijk welke huishoudelijke taken zich opstapelen en welke juist vanzelf gaan. Pas je aanpak aan zodat het huis werkbaar blijft zonder onnodig gedoe."
    },
    {
        titel: "Controleer je persoonlijke uitgaven",
        tekst: "Bekijk de uitgaven van de afgelopen maand. Zoek terugkerende kosten die je vergeten was en noteer waar je eventueel wilt bijsturen."
    },
    {
        titel: "Maak je vriezer- en voorraadlijst",
        tekst: "Noteer wat je al in huis hebt en bedenk een paar maaltijden waarmee je die voorraad kunt gebruiken. Zo voorkom je onnodige aankopen."
    },
    {
        titel: "Geef je ramen en deuren onderhoud",
        tekst: "Controleer sluitingen, scharnieren en rubbers. Maak de onderdelen schoon en kijk of er iets gesmeerd of bijgesteld moet worden."
    },
    {
        titel: "Ruim oude hobbyprojecten op",
        tekst: "Bekijk projecten waar je ooit aan begon. Kies er één om af te maken, bewaar bewust wat je later wilt hervatten en ruim de rest netjes op."
    },
    {
        titel: "Maak je badkamerkastjes overzichtelijk",
        tekst: "Haal de inhoud eruit, maak de kastjes schoon en groepeer spullen die bij elkaar horen. Zorg dat dagelijkse producten makkelijk bereikbaar zijn."
    },
    {
        titel: "Controleer je fiets- en wandeluitrusting",
        tekst: "Loop kleding, schoenen, verlichting, tassen en andere spullen na. Reinig wat vies is en vervang of repareer wat niet meer goed werkt."
    },
    {
        titel: "Werk een achterstallige klus af",
        tekst: "Kies één klus die je steeds uitstelt. Maak de klus klein genoeg om deze week af te ronden en zorg dat je de benodigde spullen in huis hebt."
    },
    {
        titel: "Maak een plek helemaal af",
        tekst: "Kies een hoek, plank of klein deel van een kamer dat nooit echt af lijkt. Bepaal hoe je het wilt hebben en maak het deze week netjes en functioneel."
    }
];

function getISOWeekNumber(date) {
    const d = new Date(Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
    ));

    const day = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - day);

    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));

    return Math.ceil(
        (((d - yearStart) / 86400000) + 1) / 7
    );
}

const weekNumber = getISOWeekNumber(new Date());

// ISO-week 53 komt in sommige jaren voor.
// Daar gebruiken we klus 1 voor, zodat alle 52 klussen rouleren.
const klusIndex = (weekNumber - 1) % klussen.length;
const klus = klussen[klusIndex];

document.getElementById("special-text").innerHTML = `
    <h4>Weeknummer ${weekNumber}</h4>
    <h5>${klus.titel}</h5>
    <p>${klus.tekst}</p>
`;
