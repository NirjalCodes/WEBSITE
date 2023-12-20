// Smooth scrolling when clicking on navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add overlapping effect to the navigation bar
const navBar = document.querySelector('nav');
const sections = document.querySelectorAll('.section');

function updateNavBar() {
    const scrollY = window.scrollY || window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navBar.offsetHeight;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
            navBar.classList.add('overlapping');
        } else {
            navBar.classList.remove('overlapping');
        }
    });
}

// Update the navigation bar on scroll
document.addEventListener('scroll', updateNavBar);
