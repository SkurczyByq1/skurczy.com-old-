import {links, buttons} from './main.js';

console.log('Website version: Beta 1.0')

document.addEventListener('DOMContentLoaded', function() {
    buttons.navbar.addEventListener('click', function() {
        window.location.href = links.homepage;
    })

    buttons.footer.addEventListener('click', function() {
        window.location.href = links.homepage;
    })

    buttons.projects.addEventListener('click', function() {
        window.location.href = links.projects;
    })

    buttons.about.addEventListener('click', function() {
        window.location.href = links.about;
    })

    buttons.github.addEventListener('click', function() {
        window.open(links.github);
    })

    buttons.discord.addEventListener('click', function() {
        window.open(links.discord);
    })
})