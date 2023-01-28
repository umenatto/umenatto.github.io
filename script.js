'use strict';

document.getElementById('hamburger_open').addEventListener('click', () => {
    document.querySelector('nav').classList.add('active');
    document.getElementById('wrapper').classList.add('paler');
});

document.querySelector('nav').addEventListener('click', () => {
    document.querySelector('nav').classList.remove('active');
    document.getElementById('wrapper').classList.remove('paler');
});
