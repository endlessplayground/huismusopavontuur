document.addEventListener('DOMContentLoaded', function() {

    const latitude = 52.0116;
    const longitude = 4.3571;
    const timeZone = 'Europe/Amsterdam';

    // Obtain today's date in the Dutch time zone.
    const dateParts = new Intl.DateTimeFormat('en-CA', {
        timeZone: timeZone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).formatToParts(new Date());

    const parts = {};
    dateParts.forEach(function(part) {
        parts[part.type] = part.value;
    });

    const year = Number(parts.year);
    const month = Number(parts.month);
    const day = Number(parts.day);

    function show(id, value) {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    }

    function formatTemperature(value) {
        return value.toFixed(1).replace('.', ',');
    }

    function formatClock(minutes) {
        const date = new Date(
            Date.UTC(year, month - 1, day) +
            minutes * 60 * 1000
        );

        return new Intl.DateTimeFormat('nl-NL', {
            timeZone: timeZone,
            hour: '2-digit',
            minute: '2-digit',
            hourCycle: 'h23'
        }).format(date);
    }

    function formatDaylength(minutes) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = Math.round(minutes % 60);

        return hours + ' uur ' +
            String(remainingMinutes).padStart(2, '0') + ' min';
    }

    // Calculate sunrise and sunset using the NOAA solar algorithm.
    function calculateSunTimes() {
        const date = new Date(Date.UTC(year, month - 1, day));

        const dayOfYear = Math.floor(
            (date - Date.UTC(year, 0, 0)) / 86400000
        );

        const daysInYear = (
            Date.UTC(year + 1, 0, 1) -
            Date.UTC(year, 0, 1)
        ) / 86400000;

        const gamma =
            2 * Math.PI / daysInYear * (dayOfYear - 1);

        const equationOfTime = 229.18 * (
            0.000075 +
            0.001868 * Math.cos(gamma) -
            0.032077 * Math.sin(gamma) -
            0.014615 * Math.cos(2 * gamma) -
            0.040849 * Math.sin(2 * gamma)
        );

        const declination =
            0.006918 -
            0.399912 * Math.cos(gamma) +
            0.070257 * Math.sin(gamma) -
            0.006758 * Math.cos(2 * gamma) +
            0.000907 * Math.sin(2 * gamma) -
            0.002697 * Math.cos(3 * gamma) +
            0.00148 * Math.sin(3 * gamma);

        const lat = latitude * Math.PI / 180;
        const zenith = 90.833 * Math.PI / 180;

        const cosHourAngle =
            Math.cos(zenith) /
            (Math.cos(lat) * Math.cos(declination)) -
            Math.tan(lat) * Math.tan(declination);

        if (cosHourAngle < -1 || cosHourAngle > 1) {
            return null;
        }

        const hourAngle =
            Math.acos(cosHourAngle) * 180 / Math.PI;

        const solarNoon = 720 - 4 * longitude - equationOfTime;

        return {
            sunrise: solarNoon - 4 * hourAngle,
            sunset: solarNoon + 4 * hourAngle
        };
    }

    const sun = calculateSunTimes();

    if (sun) {
        show('sunrise', formatClock(sun.sunrise));
        show('sunset', formatClock(sun.sunset));
        show(
            'daylength',
            formatDaylength(sun.sunset - sun.sunrise)
        );
    } else {
        show('sunrise', 'Geen zonsopkomst');
        show('sunset', 'Geen zonsondergang');
        show('daylength', '—');
    }

    // KNMI climate normals, 1991–2020.
    // Station 344: Rotterdam.
    // Each group of three values represents the 1st–10th,
    // 11th–20th and 21st–end of each month, respectively.

    const meanTemperature = [
        4.3, 4.5, 3.5, 4.0, 4.0, 4.9,
        5.8, 6.8, 7.3, 8.6, 9.2, 11.4,
        12.1, 13.0, 14.5, 15.4, 15.8, 16.8,
        17.6, 18.0, 18.9, 18.8, 18.2, 17.1,
        16.2, 15.0, 14.2, 12.7, 11.2, 10.5,
        9.2, 7.2, 6.1, 5.1, 4.6, 4.4
    ];

    const minimumTemperature = [
        1.6, 1.7, 0.6, 1.0, 0.7, 1.6,
        2.2, 3.0, 2.9, 3.9, 4.2, 6.3,
        7.0, 7.7, 9.3, 10.2, 11.0, 11.8,
        12.9, 13.3, 13.9, 13.7, 13.6, 12.4,
        11.7, 10.5, 10.0, 8.9, 7.2, 7.0,
        6.0, 4.1, 3.1, 2.4, 1.7, 1.8
    ];

    const maximumTemperature = [
        6.5, 6.8, 6.0, 6.6, 7.1, 7.9,
        9.1, 10.4, 11.4, 12.9, 13.8, 16.2,
        16.8, 17.7, 19.0, 20.3, 20.2, 21.3,
        22.1, 22.4, 23.5, 23.5, 22.7, 21.6,
        20.4, 19.2, 18.3, 16.4, 14.9, 13.6,
        12.0, 9.9, 8.7, 7.5, 7.0, 6.7
    ];

    let decade;

    if (day <= 10) {
        decade = 0;
    } else if (day <= 20) {
        decade = 1;
    } else {
        decade = 2;
    }

    const index = (month - 1) * 3 + decade;

    show(
        'normal-mean',
        formatTemperature(meanTemperature[index]) + ' °C'
    );

    show(
        'normal-range',
        formatTemperature(minimumTemperature[index]) +
        '–' +
        formatTemperature(maximumTemperature[index]) +
        ' °C'
    );

});
