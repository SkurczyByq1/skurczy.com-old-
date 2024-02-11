import {links, buttons, version} from './main.js';

console.log('Website version: ' + version.number + ', published: ' + version.date)

document.addEventListener('DOMContentLoaded', function() {
    buttons.navbar.addEventListener('click', function() {
        window.location.href = links.homepage;
    })

    buttons.navbarMenu.addEventListener('click', function() {
        const navbarMenuCard = document.getElementById('navbar-menu-card')
        if (navbarMenuCard.style.opacity === '1') {
            navbarMenuCard.style.transform = 'translateX(320px)';
            navbarMenuCard.style.opacity = '0';
            buttons.navbarMenuHomepage.style.display = 'none';
            buttons.navbarMenuAbout.style.display = 'none';
            buttons.navbarMenuPortfolio.style.display = 'none';
            buttons.navbarMenu.style.background = 'url(images/other/navbar-menu-open.svg)';
        } else {
            navbarMenuCard.style.opacity = '1';
            navbarMenuCard.style.transform = 'translateX(-320px)';
            buttons.navbarMenuHomepage.style.display = 'flex';
            buttons.navbarMenuAbout.style.display = 'flex';
            buttons.navbarMenuPortfolio.style.display = 'flex';
            buttons.navbarMenu.style.background = 'url(images/other/navbar-menu-close.svg)';
        }
        buttons.navbarMenu.style.animation = 'icon-rotate 0.3s'
        navbarMenuCard.style.animation = 'slide-in 0.3s';
    })

    buttons.navbarMenuHomepage.addEventListener('click', function() {
        window.location.href = links.homepage;
    })

    buttons.navbarMenuAbout.addEventListener('click', function() {
        window.location.href = links.about;
    })

    buttons.navbarMenuPortfolio.addEventListener('click', function() {
        window.location.href = links.projects;
    })
})