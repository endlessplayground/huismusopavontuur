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
        <p id="roll-instruction">Rol de <em>dobbelsteen</em> voor een van mijn favoriete nummers van dit moment<em>…</em> Op dit moment is het nog beperkt tot mijn absoluut favoriete genre van dit moment, nl. <i>Phonk</i>, maar later zal ik dat nog uitbreiden, want ik ben zéker niet zo beperkt qua muzieksmaak. &#128524;<br><br>Je hoort trouwens fragmenten, niet het hele nummer, want zo werkt dat bij embedded Spotify songs. Maar misschien ben je daar als niet-liefhebber juist wel blij om… &#128513;<br><br><i>Oké, gooi de dobbelsteen!</i></p>
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