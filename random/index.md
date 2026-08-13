---
layout: default
title: "Random"
page_type: short
parent_folder: random
---

<p style="margin-top: -50px;">Rol de <em>dobbelsteen</em> voor een random tekst.</p>

<div class="dice">
  <div id="roll">
    <img src="{{ '/images/dice.svg' | relative_url }}" alt="Dobbelsteen">
  </div>
</div>

<div id="output"></div>

<style>
.random-text {
  text-align: left;
}

.dice {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
  margin: -24px 0px -30px 0px;
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
  margin-top: 20px;
  min-height: 50px;
  text-align: center;
}
</style>

<script>
const randomContent = [
  {% for item in site.data.random.items %}
    "{{ '/random/content/' | append: item | relative_url }}"{% unless forloop.last %},{% endunless %}
  {% endfor %}
];

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

    fetch(randomFile)
      .then(response => response.text())
      .then(html => {
        output.innerHTML = html;
        dice.classList.remove('roll-animation');
      });
  }, 700);
});
</script>

