const months = [
    'Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun',
    'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'
];

const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const dateSmallEl = document.getElementById('date_s');

if (monthEl) {
    monthEl.textContent = months[now.getMonth()];
}

if (dateEl) {
    dateEl.textContent = now.getDate();
}

if (dateSmallEl) {
    dateSmallEl.textContent = now.getDate();
}
