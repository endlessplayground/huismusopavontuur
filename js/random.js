const dice = document.getElementById('roll');
const diceImage = dice.querySelector('img');
const output = document.getElementById('output');

const diceImages = [
  '../images/dice1.svg',
  '../images/dice2.svg',
  '../images/dice3.svg',
  '../images/dice4.svg',
  '../images/dice5.svg',
  '../images/dice6.svg'
];

dice.addEventListener('click', () => {
  output.innerHTML = "";

  dice.classList.remove('roll-animation');
  void dice.offsetWidth;
  dice.classList.add('roll-animation');

  setTimeout(() => {

    // Choose a random final dice face
    const randomDice =
      diceImages[Math.floor(Math.random() * diceImages.length)];

    diceImage.src = randomDice;

    // Choose a random text
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
