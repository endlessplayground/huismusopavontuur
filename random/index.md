---
layout: default
title: "Random"
page_type: short
parent_folder: random
show_submenu: true
---


<div class="instruction" style=""><p  id="roll-instruction">Rol de <em>dobbelsteen</em> voor iets randoms<em>…</em></p></div>

<div class="dice"  style="">
  <div id="roll">
    <img src="{{ '/images/dice.svg' | relative_url }}" alt="Dobbelsteen">
  </div>
</div>

<div class="main-txt">  
<div id="output"></div>
</div>  




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
  z-index: 999999;
}

.random-text {
  text-align: left;
}

.dice {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: var(--max-width);
  height: 70px;
  margin: -4px 0px 20px 0px;
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
  margin-top: 60px;
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
