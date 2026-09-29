console.log('CALENDAR JS LOADED');

document.addEventListener('DOMContentLoaded', function() {

  const now = new Date();

  const months = [
    'Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun',
    'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'
  ];

  document.querySelectorAll('.calendar').forEach(function(calendar) {

    const monthEl = calendar.querySelector('.calendar-month');
    const dateEl = calendar.querySelector('.calendar-number');

    if (monthEl) {
      monthEl.textContent = months[now.getMonth()];
    }

    if (dateEl) {
      dateEl.textContent = now.getDate();
    }

  });

});