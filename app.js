document.addEventListener('DOMContentLoaded', function() {
    let button = {
        home: document.getElementById('navbar-logo'),
        projects: document.getElementById('projects-button'),
        github: document.getElementById('github-button'),
        discord: document.getElementById('discord-button')
    }

    let link = {
        homepage: 'index.html',
        projectspage: 'projects.html',
        github: 'https://github.com/SkurczyByq1',
        discord: null,
    }

    button.home.addEventListener('click', function() {
        window.location.href = link.homepage;
    })

    button.projects.addEventListener('click', function() {
        window.location.href = link.projectspage;
    })

    button.github.addEventListener('click', function() {
        window.open(link.github);
    })

    button.discord.addEventListener('click', function() {
        window.open(link.discord);
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