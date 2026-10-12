document.addEventListener('DOMContentLoaded', function() {
  const now = new Date();
  const months = ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 
                  'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];

  const month = months[now.getMonth()];
  const date = now.getDate();

  const monthEl = document.getElementById('month');
  const dateEl = document.getElementById('date');
  const dateSmallEl = document.getElementById('date_s');

  if (monthEl) monthEl.textContent = month;
  if (dateEl) dateEl.textContent = date;
  if (dateSmallEl) dateSmallEl.textContent = date;
});

document.addEventListener('DOMContentLoaded', function() {

  const days = [
    "zondag",
    "maandag",
    "dinsdag",
    "woensdag",
    "donderdag",
    "vrijdag",
    "zaterdag"
  ];

  const texts = {
    maandag: `<p> werk ik eigenlijk altijd in de hele vroege ochtend (half zes), en op zondag ook. Maandag is vaak redelijk rustig, maar niet altijd. De dag erna, dinsdag, ben ik lekker vrij.</p>`,

    dinsdag: `<p> ben ik eigenlijk altijd vrij en probeer ik bij te komen van het harde, vroege werken van zondag en maandag.</p>`,

    woensdag: `<p> is weer een werkdag. Dus ik sta op rond vier uur in de ochtend en begin om half zes. Rond één uur ben ik meestal klaar.</p>`,

    donderdag: `<p>Dan ben ik eigenlijk altijd vrij. Ik ga dan o.a. meestal even naar de <em>markt</em>.</p>`,

    vrijdag: `<p>...ben ik vrijwel altijd vrij.</p>`,

    zaterdag: `<p>Dan ben ik eigenlijk altijd vrij en doe ik niet zoveel bijzonders.</p>`,

    zondag: `<p>Op zondag werk ik vrijwel altijd, van zes uur ’s&nbsp;morgens tot ongeveer één uur à half twee ’s&nbsp;middags, en dat is ook altijd wel een hele drukke dag.</p>`
  };

  const today = days[new Date().getDay()];
  
 

const dayEl = document.getElementById('actual-day');

if (dayEl) {
dayEl.textContent = days[new Date().getDay()].charAt(0).toUpperCase() + days[new Date().getDay()].slice(1);}




  const textEl = document.getElementById('today-text');

  if (textEl) {
    textEl.innerHTML = texts[today];
  }

});

document.addEventListener('DOMContentLoaded', function() {

  const specialDates = {
    "09-19": `<p>Op <em>deze</em> dag heb ik grote <em>stappen</em> gezet.</p>`,
    "09-20": `<p>Vandaag <em>opnieuw</em> van alles aan mijn site gedaan. O.a.&nbsp;de illustratie van die <em>plant</em> gemaakt.</p>`,
    "09-21": `<p>Nog <em>één</em> dag werken en dan vertrek ik weer eens naar het  <em>oosten</em>, voor een familie<em>bijeenkomst</em> van de Philipsen.</p>`,
    "09-22": `<p>De dag van de familie<em>bijeenkomst</em> van de Philipsen.</p>`,
    "09-23": `<p>Ik reis vanuit het oosten weer terug naar <em>huis</em>.</p>`,
    "09-24": `<p>Op juist <em>deze</em> dag ga ik <em>alwéér</em> van alles aan mijn site doen.</p>`,
    "09-25": `<p><em>Kerstmis.</em> Bah.</p>`,
    "09-26": `<p>Het is weer zover: nieuwjaar.</p>`,
    "09-27": `<p>Vandaag gebeurt er iets bijzonders!</p>`
  };

  const today = new Date();
  const key =
    String(today.getMonth() + 1).padStart(2, '0') + "-" +
    String(today.getDate()).padStart(2, '0');

  const specialText = document.getElementById('special-text');

  if (specialText && specialDates[key]) {
    specialText.innerHTML = specialDates[key];
  }

});