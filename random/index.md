---
layout: default
title: "Random"
page_type: short
parent_folder: random
show_submenu: false
---


<div class="instruction" style=""><p  id="roll-instruction">Rol de <em>dobbelsteen</em> voor iets randoms<em>…</em></p></div>

<div class="dice"  style="">
  <div id="roll">
    <img src="{{ '/images/dice.svg' | relative_url }}" alt="Dobbelsteen">
  </div>
</div>

<div class="main-txt-left">  
<div id="output"></div>
</div>  




<style>
  #header-img {
    transform: scale(1.1);
    margin: 12px 0px 0px -40px;
  }
  h2 {
    margin-left: -25px;
  }

.instruction {
  position: fixed; background-color: rgba(130, 205, 205, 0.99); heigth: 10px; width: 100%;  max-width: 430px; margin-top: -148px; padding-top: 100px; z-index: 97; text-align: center; 
}

.random-text {
  text-align: left;
}

.dice {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  margin: -16px 0px 20px 0px;
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
  margin-top: 0px;
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
</script>

<script src="{{ '/js/random.js' | relative_url }}"></script>
