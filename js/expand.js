document.querySelectorAll('.expand-header').forEach(header => {
    const moreLess = header.querySelector('.more-less');
    const expand = header.nextElementSibling;

    if (!expand || !expand.classList.contains('expand')) return;

    expand.style.height = '1px';
    expand.style.overflow = 'hidden';
    expand.style.transition = 'height 0.5s ease';

    const image = moreLess.querySelector('img');
    image.style.transition = 'transform 0.5s ease';

    let isOpen = false;

    moreLess.addEventListener('click', () => {

        if (isOpen) {
            expand.style.height = expand.scrollHeight + 'px';

            requestAnimationFrame(() => {
                expand.style.height = '1px';
            });

            image.style.transform = 'rotate(0deg)';
            isOpen = false;

        } else {
            expand.style.height = expand.scrollHeight + 'px';

            image.style.transform = 'rotate(180deg)';
            isOpen = true;
        }
    });

    expand.addEventListener('transitionend', () => {
        if (isOpen) {
            expand.style.height = 'auto';
        }
    });
});