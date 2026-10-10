(() => {
"use strict";

const latitude = 52.0116;
const longitude = 4.3571;
const timeZone = "Europe/Amsterdam";

function getDelftDate() {
    const parts = new Intl.DateTimeFormat("en-CA", {
        timeZone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).formatToParts(new Date());

    const part = type =>
        parts.find(item => item.type === type).value;

    return {
        year: Number(part("year")),
        month: Number(part("month")),
        day: Number(part("day"))
    };
}

function normalizeDegrees(value) {
    return ((value % 360) + 360) % 360;
}

function normalizeHours(value) {
    return ((value % 24) + 24) % 24;
}

function calculateSunTime(year, month, day, isSunrise) {
    const dateUTC = Date.UTC(year, month - 1, day);
    const yearStart = Date.UTC(year, 0, 1);
    const dayOfYear =
        Math.floor((dateUTC - yearStart) / 86400000) + 1;

    const longitudeHour = longitude / 15;

    const approximateTime = dayOfYear +
        ((isSunrise ? 6 : 18) - longitudeHour) / 24;

    const meanAnomaly =
        0.9856 * approximateTime - 3.289;

    const trueLongitude = normalizeDegrees(
        meanAnomaly +
        1.916 * Math.sin(meanAnomaly * Math.PI / 180) +
        0.020 * Math.sin(2 * meanAnomaly * Math.PI / 180) +
        282.634
    );

    let rightAscension = normalizeDegrees(
        Math.atan(
            0.91764 *
            Math.tan(trueLongitude * Math.PI / 180)
        ) * 180 / Math.PI
    );

    rightAscension +=
        Math.floor(trueLongitude / 90) * 90 -
        Math.floor(rightAscension / 90) * 90;

    rightAscension /= 15;

    const sinDeclination =
        0.39782 *
        Math.sin(trueLongitude * Math.PI / 180);

    const cosDeclination = Math.cos(
        Math.asin(sinDeclination)
    );

    const cosHourAngle = (
        Math.cos(90.833 * Math.PI / 180) -
        sinDeclination *
        Math.sin(latitude * Math.PI / 180)
    ) / (
        cosDeclination *
        Math.cos(latitude * Math.PI / 180)
    );

    if (cosHourAngle > 1 || cosHourAngle < -1) {
        return null;
    }

    let hourAngle = Math.acos(cosHourAngle) * 180 / Math.PI;

    if (isSunrise) {
        hourAngle = 360 - hourAngle;
    }

    hourAngle /= 15;

    const localMeanTime =
        hourAngle + rightAscension -
        0.06571 * approximateTime - 6.622;

    const utcHours = normalizeHours(
        localMeanTime - longitudeHour
    );

    return new Date(
        dateUTC + utcHours * 3600000
    );
}

function formatTime(date) {
    return new Intl.DateTimeFormat("nl-NL", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23"
    }).format(date);
}

function formatDate(date) {
    return new Intl.DateTimeFormat("nl-NL", {
        timeZone,
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(date);
}

function formatDaylight(milliseconds) {
    const totalMinutes = Math.round(milliseconds / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours} uur en ${minutes} minuten`;
}

function show(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
}

function updateMeteo() {
    const { year, month, day } = getDelftDate();

    const sunrise = calculateSunTime(
        year, month, day, true
    );

    const sunset = calculateSunTime(
        year, month, day, false
    );

    show(
        "meteo-date",
        formatDate(new Date(Date.UTC(year, month - 1, day, 12)))
    );

    if (!sunrise || !sunset) {
        show("sunrise", "Niet beschikbaar");
        show("sunset", "Niet beschikbaar");
        show("daylength", "Niet beschikbaar");
        return;
    }

    show("sunrise", formatTime(sunrise));
    show("sunset", formatTime(sunset));
    show(
        "daylength",
        formatDaylight(sunset.getTime() - sunrise.getTime())
    );
}

document.addEventListener("DOMContentLoaded", updateMeteo);

})();
