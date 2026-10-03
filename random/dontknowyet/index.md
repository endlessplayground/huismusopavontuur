---
layout: default
title: "Random"
parent_folder: random
show_submenu: true
---

<div class="random-dice">
    <div id="roll">
        <img src="{{ '/images/dice.svg' | relative_url }}" alt="Dobbelsteen">
    </div>

  <div class="instruction">
        <p id="roll-instruction">Rol de <em>dobbelsteen</em><em>…</em></p>
    </div>
</div>

<div class="left random-content">
    <div id="output"></div>
</div>

<script>
const randomContent = [
  {% for item in site.data.random.items %}
    "{{ '/random/content/' | append: item | relative_url }}"{% unless forloop.last %},{% endunless %}
  {% endfor %}
];
</script>

<script src="{{ '/js/random.js' | relative_url }}"></script>