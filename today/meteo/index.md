---
layout: default
title: "Vandaag"
parent_folder: today
show_submenu: true
---

{% include date-styles.html %}

<link rel="stylesheet" href="{{ '/css/meteo.css' | relative_url }}">

<div class="left meteo-page">

    <div class="meteo-row">
        <span class="meteo-label">Zonsopkomst</span>
        <span id="sunrise" class="meteo-value"></span>
    </div>

    <div class="meteo-row">
        <span class="meteo-label">Zonsondergang</span>
        <span id="sunset" class="meteo-value"></span>
    </div>

    <div class="meteo-row">
        <span class="meteo-label">Daglengte</span>
        <span id="daylength" class="meteo-value"></span>
    </div>

    <div class="meteo-row">
        <span class="meteo-label">Gemiddelde temperatuur</span>
        <span id="normal-mean" class="meteo-value"></span>
    </div>

    <div class="meteo-row">
        <span class="meteo-label">Normale min.–max.</span>
        <span id="normal-range" class="meteo-value"></span>
    </div>

    <p class="meteo-note">
        Temperatuurgegevens: KNMI-klimaatnormalen 1991–2020,
        station Rotterdam (344). Dit zijn gemiddelden per
        tiendaagse periode, geen weersverwachting.
        <a href="https://cdn.knmi.nl/knmi/map/page/klimatologie/klimaatatlas/tabel/stationsdata/decadenormalen_9120.pdf"
           target="_blank" rel="noopener">Bron</a>.
    </p>

</div>

<script src="{{ '/js/meteo.js' | relative_url }}" defer></script>
