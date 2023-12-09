document.addEventListener('DOMContentLoaded', function() {
    let button = {
        home: document.getElementById('navbar-logo'),
        projects: document.getElementById('projects-button'),
        github: document.getElementById('github-button'),
        discord: document.getElementById('discord-button'),
        website: document.getElementById('website-card-button'),
        rccar: document.getElementById('rc-car-card-button')
    }

    let link = {
        homepage: 'index.html',
        projectspage: 'projects.html',
        github: 'https://github.com/SkurczyByq1',
        discord: null,
        website: 'website-project.html',
        rccar: 'rc-car.html'
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

    button.website.addEventListener('click', function() {
        window.location.href = link.website;
    })

    button.rccar.addEventListener('click', function() {
        window.location.href = link.rccar;
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