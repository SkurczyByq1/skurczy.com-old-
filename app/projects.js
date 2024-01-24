import {links, buttons, version} from './main.js';

console.log('Website version: ' + version.number + ', published: ' + version.date)

document.addEventListener('DOMContentLoaded', function() {
    buttons.navbar.addEventListener('click', function() {
        window.location.href = links.homepage;
    })

    buttons.footer.addEventListener('click', function() {
        window.location.href = links.homepage;
    })

    buttons.skurczycom.addEventListener('click', function() {
        window.location.href = links.skurczycom;
    })
})