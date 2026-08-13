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
    maandag: `<h3>Maandag</h3> <p> werk ik eigenlijk altijd in de hele vroege ochtend (half zes), en op zondag ook. Maandag is vaak redelijk rustig, maar niet altijd. De dag erna, dinsdag, ben ik lekker vrij.</p>`,

    dinsdag: `<h3>Dinsdag</h3> <p> ben ik eigenlijk altijd vrij en probeer ik bij te komen van het harde, vroege werken van zondag en maandag.</p>`,

    woensdag: `<h3>Woensdag</h3> <p> is weer een werkdag. Dus ik sta op rond vier uur in de ochtend en begin om half zes. Rond één uur ben ik meestal klaar.</p>`,

    donderdag: `<h3>Donderdag</h3> <p>Dan ben ik eigenlijk altijd vrij. Ik ga dan o.a. meestal even naar de <em>markt</em>.</p>`,

    vrijdag: `<h3>Vrijdag</h3> <p>ben ik vrijwel altijd vrij.</p>`,

    zaterdag: `<h3>Zaterdag</h3> <p>Dan ben ik eigenlijk altijd vrij en doe ik niet zoveel bijzonders, omdat ik zondag en maandag drukke dagen heb.</p>`,

    zondag: `<h3>zondag</h3> <p>Op zondag werk ik vrijwel altijd, van zes uur 's morgens tot ongeveer één uur à half twee, en dat is ook een hele drukke dag!</p>`
  };

  const today = days[new Date().getDay()];
  const textEl = document.getElementById('today-text');

  if (textEl) {
    textEl.innerHTML = texts[today];
  }

});

document.addEventListener('DOMContentLoaded', function() {

  const specialDates = {
    "08-13": `<p>Op juist <em>deze</em> dag heb ik van alles aan mijn site bijgeschaafd en leuke scriptjes geïmplementeerd. Met dank aan <em>ChatGPT</em> voor zijn hulp.</p>`,
    "12-25": `<p><em>Kerstmis.</em> Bah.</p>`,
    "01-01": `<p>Het is weer zover: nieuwjaar.</p>`,
    "09-15": `<p>Vandaag gebeurt er iets bijzonders!</p>`
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