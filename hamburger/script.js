function hamburger() {
    const button = document.querySelector('#hamburger');
    const nav = document.querySelector('#nav');

    button.addEventListener('click', function () {
        button.classList.toggle('button-active');
        nav.classList.toggle('nav-open');
    });
}

hamburger();


/**
 * Napišite funkciju "activeLink" koja će:
 * 1. Pronaći link sa hrefom "#home"
 * 2. Dodati klasu "active" tom linku
 * 
 * Pozovite funkciju.
 * Doradite CSS tako da link sa klasom "active"
 * ima crvenu boju teksta.
 */


function activeLink()  {
    // 1. Pronađi link sa href="#home"
    const homeLink = document.querySelector('a[href="#home"]');
    
    // 2. Dodaj klasu "active" tom linku
    if (homeLink) {
        homeLink.classList.add('active');
    }
}

// Pozovi funkciju
activeLink();
