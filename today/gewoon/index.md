---
layout: default
title: "Vandaag"
parent_folder: today
show_submenu: true
---
  {% include date-styles.html %}

<div class="left">

<h4 id="today-greeting">Hallo!</h4>

<div id="today-text"></div>
<div id="special-text"></div>

</div>

<script src="{{ '/js/date-original.js' | relative_url }}"></script>
<script src="{{ '/js/greeting.js' | relative_url }}" defer></script>
