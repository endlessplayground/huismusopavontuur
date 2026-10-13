---
layout: default
title: "Kleine klus"
parent_folder: to-do
show_submenu: true
---

<div class="random-dice">
    <div id="roll">
        <img src="{{ '/images/dice.svg' | relative_url }}" alt="Dobbelsteen">
    </div>

  <div class="instruction">
        <div id="roll-instruction"><h4>Rol de dobbelsteen…</h4>
        <p>Er verschijnt dan een emoji of een random stukje tekst, maar dat is nog een soort opvulling. Uiteindelijk verzin ik hier nog iets anders.</p>
  </div>
    </div>
</div>

<div class="left random-content">
    <div id="output" style="margin-top:15px;"></div>
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