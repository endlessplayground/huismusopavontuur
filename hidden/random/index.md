---
layout: default
title: "Random"
page_type: short
parent_folder: random
show_submenu: true
---


<div class="instruction" style=""><p  id="roll-instruction">Wat zal ik <em>doen</em> vandaag…<em>?</em></p></div>

<div class="dice">
  <div id="roll">
    <img src="{{ '/images/dice.svg' | relative_url }}" alt="Dobbelsteen">
  </div>
</div>

<div id="output">Ja, wat gaan we doen?</div>





<style>

.instruction {
  position: fixed; 
  background-color: transparent; 
  heigth: 10px; 
  width: 100%;  
  max-width: 430px; 
  margin-top: -140px; 
  padding-top: 100px; z-index: 1; 
  text-align: center; 
  z-index: 99;
}

.random-text {
  text-align: left;
}

.dice {
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: var(--max-width);
  height: 50px;
  z-index: 100;
}

#roll {
  cursor: pointer;
  display: inline-block;
}

#roll img {
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease;
}

#roll:hover img {
  transform: scale(1.05);
}

@keyframes wobble {
  0%   { transform: rotate(0deg) scale(1.05); }
  10%  { transform: rotate(90deg) scale(1.1); }
  20%  { transform: rotate(180deg) scale(1.05); }
  30%  { transform: rotate(270deg) scale(1.1); }
  40%  { transform: rotate(360deg) scale(1.05); }
  50%  { transform: rotate(0deg) scale(1); }
  60%  { transform: rotate(90deg) scale(1.1); }
  70%  { transform: rotate(180deg) scale(1.05); }
  80%  { transform: rotate(270deg) scale(1.1); }
  90%  { transform: rotate(360deg) scale(1.05); }
  100% { transform: rotate(360deg) scale(1); }
}

.roll-animation img {
  animation: wobble 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

#output {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  min-height: 50px;
  text-align: center;
  width: 80%;
  height: 100px;
  padding: 2px 6px 6px 12px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 4px;
  box-shadow: 0px 1px 16px rgba(77, 89, 92, 0.2);}
</style>

<script>
const randomContent = [
  {% for item in site.data.random2.items %}
    {{ item | jsonify }}{% unless forloop.last %},{% endunless %}
  {% endfor %}
];

const dice = document.getElementById('roll');
const diceImage = document.querySelector('#roll img');
const output = document.getElementById('output');

const diceImages = [
  '../../images/dice1.svg',
  '../../images/dice2.svg',
  '../../images/dice3.svg',
  '../../images/dice4.svg',
  '../../images/dice5.svg',
  '../../images/dice6.svg'
];

// Preload all dice images
diceImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

dice.addEventListener('click', () => {
  output.innerHTML = "";

  // Choose a random dice face
  const randomDice =
    diceImages[Math.floor(Math.random() * diceImages.length)];

  // Start the roll
  dice.classList.remove('roll-animation');
  void dice.offsetWidth;
  dice.classList.add('roll-animation');

  // Change the face while the dice is still rotating
  setTimeout(() => {
    diceImage.src = randomDice;
  }, 350);

  // Show random content after the roll has finished
  setTimeout(() => {
    const randomIndex =
      Math.floor(Math.random() * randomContent.length);

    output.innerHTML = randomContent[randomIndex];

    dice.classList.remove('roll-animation');
  }, 700);
});
</script>
