import {links, buttons} from './main.js';

console.log('Website version: Beta 1.0')

document.addEventListener('DOMContentLoaded', function() {
    buttons.navbar.addEventListener('click', function() {
        window.location.href = links.homepage;
    })

    buttons.footer.addEventListener('click', function() {
        window.location.href = links.homepage;
    })

    buttons.githubPin.addEventListener('click', function() {
        window.location.href = links.github;
    })

    buttons.discordPin.addEventListener('click', function() {
        window.location.href = links.discord;
    })

    buttons.xPin.addEventListener('click', function() {
        window.location.href = links.x;
    })

    buttons.spotifyPin.addEventListener('click', function() {
        window.location.href = links.spotify;
    })
})