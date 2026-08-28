const dice = document.getElementById('roll');
const output = document.getElementById('output');

dice.addEventListener('click', () => {
  output.innerHTML = "";

  dice.classList.remove('roll-animation');
  void dice.offsetWidth;
  dice.classList.add('roll-animation');

  setTimeout(() => {
    const randomFile =
      randomContent[Math.floor(Math.random() * randomContent.length)];

    document.getElementById('roll-instruction').innerHTML =
      '<em>Nog</em> een keer<em>?</em>';

    fetch(randomFile)
      .then(response => response.text())
      .then(html => {
        output.innerHTML = html;
        dice.classList.remove('roll-animation');
      });
  }, 700);
});