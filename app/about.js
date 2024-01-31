import {links, buttons,version} from './main.js';

console.log('Website version: ' + version.number + ', published: ' + version.date)

document.addEventListener('DOMContentLoaded', function() {
    buttons.navbar.addEventListener('click', function() {
        window.location.href = links.homepage;
    })

    buttons.githubPin.addEventListener('click', function() {
        window.open(links.github);
    })

    buttons.discordPin.addEventListener('click', function() {
        alert("Discord server hasn't been done yet.");
    })

    buttons.xPin.addEventListener('click', function() {
        window.open(links.x);
    })

    buttons.spotifyPin.addEventListener('click', function() {
        window.open(links.spotify);
    })
})