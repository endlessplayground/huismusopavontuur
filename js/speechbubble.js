document.addEventListener('DOMContentLoaded', function() {

    const speechBubble = document.getElementById('speech-bubble');
    const speechClose = document.getElementById('speech-close');

    if (!speechBubble || !speechClose) return;

    const originalContent = speechBubble.innerHTML;

    speechClose.addEventListener('click', function() {

        speechBubble.classList.add('collapsed');
        speechBubble.innerHTML = '<p>…</p>';

        speechClose.style.visibility = 'hidden';
        speechBubble.style.cursor = 'pointer';

    });

    speechBubble.addEventListener('click', function() {

        if (speechBubble.classList.contains('collapsed')) {

            speechBubble.classList.remove('collapsed');
            speechBubble.innerHTML = originalContent;

            speechClose.style.visibility = 'visible';
            speechBubble.style.cursor = 'default';

        }

    });

});