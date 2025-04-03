const arcordeonTriggers = document.querySelectorAll('.acordeon .trigger');


arcordeonTriggers.forEach((buttonTrigger) => {
    buttonTrigger.addEventListener('click', () => {
        const acordeon = buttonTrigger.parentElement;
        if (acordeon.classList.contains('open')) {
            acordeon.classList.remove('open');
        } else {
            acordeon.classList.add('open');
        }
    });
})


