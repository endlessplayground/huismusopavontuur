---
layout: default
title: "Vandaag"
parent_folder: today
show_submenu: true
---
  {% include date-styles.html %}

<div class="left">

<p id="today-greeting">Hallo!</p>

<div id="today-text"></div>
<div id="special-text"></div>

</div>

<script src="{{ '/js/date.js' | relative_url }}"></script>
<script src="{{ '/js/greeting.js' | relative_url }}" defer></script>
