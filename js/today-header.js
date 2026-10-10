document.addEventListener('DOMContentLoaded', function() {
    const days = [
        'zondag', 'maandag', 'dinsdag', 'woensdag',
        'donderdag', 'vrijdag', 'zaterdag'
    ];

    const dayEl = document.getElementById('actual-day');

    if (dayEl) {
        const today = days[new Date().getDay()];
        dayEl.textContent =
            today.charAt(0).toUpperCase() + today.slice(1);
    }
});
