---
layout: default
title: "Vandaag"
parent_folder: today
show_submenu: true
---
  {% include date-styles.html %}

---

layout: default
title: "Meteo feiten"
parent_folder: today
show_submenu: true
------------------

<link rel="stylesheet" href="{{ '/css/meteo.css' | relative_url }}">

<div class="left meteo-page">

<p id="meteo-date" class="meteo-date"></p>

<section class="meteo-section">
    <h4>Zonsopkomst</h4>
    <p id="sunrise" class="meteo-value">...</p>
</section>

<section class="meteo-section">
    <h4>Zonsondergang</h4>
    <p id="sunset" class="meteo-value">...</p>
</section>

<section class="meteo-section">
    <h4>Daglengte</h4>
    <p id="daylength" class="meteo-value">...</p>
</section>

<section class="meteo-section">
    <h4>Normale temperaturen</h4>
    <p id="temperatures" class="meteo-value">
        Klimaatgegevens worden voorbereid.
    </p>
    <p class="meteo-note">
        Klimaatnormalen zijn gemiddelden over een langere periode,
        geen weersverwachting voor vandaag.
    </p>
</section>

</div>

<script src="{{ '/js/meteo.js' | relative_url }}" defer></script>


<script src="{{ '/js/date.js' | relative_url }}"></script>
