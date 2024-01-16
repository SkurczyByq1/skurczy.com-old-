import {links, buttons} from './main.js';

console.log('Website version: Beta 1.0')

document.addEventListener('DOMContentLoaded', function() {
    buttons.navbar.addEventListener('click', function() {
        window.location.href = links.homepage;
    })

    buttons.footer.addEventListener('click', function() {
        window.location.href = links.homepage;
    })

    buttons.websiteProject.addEventListener('click', function() {
        window.location.href = links.websiteProject;
    })
})