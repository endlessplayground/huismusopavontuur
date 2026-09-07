const dice = document.getElementById('roll');
const diceImage = document.querySelector('#roll img');
const output = document.getElementById('output');

const diceImages = [
  '/images/dice1.svg',
  '/images/dice2.svg',
  '/images/dice3.svg',
  '/images/dice4.svg',
  '/images/dice5.svg',
  '/images/dice6.svg'
];

// Preload all dice images
diceImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

dice.addEventListener('click', () => {
  output.innerHTML = "";

  // Choose the next face
  const randomDice =
    diceImages[Math.floor(Math.random() * diceImages.length)];

  // Start the roll
  dice.classList.remove('roll-animation');
  void dice.offsetWidth;
  dice.classList.add('roll-animation');

  // Change the face while it is still rotating
  setTimeout(() => {
    diceImage.src = randomDice;
  }, 350);

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
