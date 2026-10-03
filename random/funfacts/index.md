---
layout: default
title: "Fun facts"
parent_folder: random
show_submenu: true
random_category: funfacts
---

<div class="random-dice">
    <div id="roll">
        <img src="{{ '../images/dice.svg' | relative_url }}" alt="Dobbelsteen">
    </div>

    <div class="instruction">
        <p id="roll-instruction">Rol de <em>dobbelsteen</em> voor zomaar een interessant feit<em>…</em></p>
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