---
layout: default
title: "Muziek"
parent_folder: random
show_submenu: true
random_category: music
---

<div class="random-dice">
    <div id="roll">
        <img src="{{ '/images/dice.svg' | relative_url }}" alt="Dobbelsteen">
    </div>

<div class="instruction">
        <p id="roll-instruction"><i>Rol de dobbelsteen voor een van mijn lievelings nummers<em>…</em></i><br><br> Tot nu toe is het nog beperkt tot mijn absoluut favoriete genre van dit moment, nl. <i>Phonk</i>, maar later zal ik dat nog uitbreiden.<br><br>Je hoort trouwens fragmenten, niet het hele nummer, want zo werkt dat bij embedded Spotify songs. Maar misschien ben je daar als niet-liefhebber juist wel blij om… &#128513;</p>
</div>
</div>

<div class="left random-content">
    <div id="output"></div>
</div>

<script>
const randomContent = [
  {% assign items = site.data.random[page.random_category].items %}
  {% for item in items %}
    "{{ '/random/content/' | append: page.random_category | append: '/' | append: item | relative_url }}"{% unless forloop.last %},{% endunless %}
  {% endfor %}
];
</script>

<script src="{{ '/js/random.js' | relative_url }}"></script>