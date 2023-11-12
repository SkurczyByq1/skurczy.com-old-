document.addEventListener('DOMContentLoaded', function() {
    let button = {
        home: document.getElementById('navbar-logo'),
        github: document.getElementById('github-button'),
        discord: document.getElementById('discord-button')
    }

    let link = {
        homepage: 'index.html',
        github: 'https://github.com/SkurczyByq1',
        discord: null,
    }

    button.home.addEventListener('click', function() {
        window.location.href = link.homepage;
    })

    button.github.addEventListener('click', function() {
        window.location.href = link.github;
    })

    button.discord.addEventListener('click', function() {
        window.location.href = link.discord;
    })
})


console.log('░░░░░▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄░░░░░░░░');
console.log('░░░░░█░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░▀▀▄░░░░');
console.log('░░░░█░░░▒▒▒▒▒▒░░░░░░░░▒▒▒░░█░░░');
console.log('░░░█░░░░░░▄██▀▄▄░░░░░▄▄▄░░░░█░░');
console.log('░▄▀▒▄▄▄▒░█▀▀▀▀▄▄█░░░██▄▄█░░░░█░');
console.log('█░▒█▒▄░▀▄▄▄▀░░░░░░░░█░░░▒▒▒▒▒░█');
console.log('█░▒█░█▀▄▄░░░░░█▀░░░░▀▄░░▄▀▀▀▄▒█');
console.log('░█░▀▄░█▄░█▀▄▄░▀░▀▀░▄▄▀░░░░█░░█░');
console.log('░░█░░░▀▄▀█▄▄░█▀▀▀▄▄▄▄▀▀█▀██░█░░');
console.log('░░░█░░░░██░░▀█▄▄▄█▄▄█▄████░█░░░');
console.log('░░░░█░░░░▀▀▄░█░░░█░█▀██████░█░░');
console.log('░░░░░▀▄░░░░░▀▀▄▄▄█▄█▄█▄█▄▀░░█░░');
console.log('░░░░░░░▀▄▄░▒▒▒▒░░░░░░░░░░▒░░░█░');
console.log('░░░░░░░░░░▀▀▄▄░▒▒▒▒▒▒▒▒▒▒░░░░█░');
console.log('░░░░░░░░░░░░░░▀▄▄▄▄▄░░░░░░░░█░░');