---
layout: default
title: "Random"
page_type: short
parent_folder: random
show_submenu: true
---

<div id="roll">
    <img src="{{ '/images/dice.svg' | relative_url }}" alt="Dobbelsteen">
</div>

<div class="dice">
<div class="instruction" style=""><p  id="roll-instruction">Rol de <em>dobbelsteen</em><em>…</em></p></div>


</div>

<div id="output"></div>




<style>
.site {
    margin-top: 130px;
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
