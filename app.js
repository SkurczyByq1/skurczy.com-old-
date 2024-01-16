document.addEventListener('DOMContentLoaded', function() {
    let button = {
        home: document.getElementById('navbar-logo'),
        projects: document.getElementById('projects-button'),
        github: document.getElementById('github-button'),
        discord: document.getElementById('discord-button'),
        mywebsite: document.getElementById('website-card-button')
    }

    let link = {
        homepage: 'index.html',
        projectspage: 'projects.html',
        github: 'https://github.com/SkurczyByq1',
        discord: 'index.html',
        mywebsite: 'website-project.html'
    }

    button.home.addEventListener('click', function() {
        window.location.href = link.homepage;
    })

    button.mywebsite.addEventListener('click', function() {
        window.location.href = link.mywebsite
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

console.log('Website version: Beta 1.0');