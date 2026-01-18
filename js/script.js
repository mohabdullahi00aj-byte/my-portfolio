/* ================= NAVIGATION ================= */

const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => header.classList.add('active'), 1100);

    navLinks.forEach(link => link.classList.remove('active'));

    barsBox.classList.remove('active');
    setTimeout(() => barsBox.classList.add('active'), 1100);

    sections.forEach(section => section.classList.remove('active'));

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
            setTimeout(() => sections[idx].classList.add('active'), 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');
        setTimeout(() => sections[0].classList.add('active'), 1100);
    }
});

/* ================= RESUME ================= */

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => btn.classList.remove('active'));
        resumeDetails.forEach(detail => detail.classList.remove('active'));

        btn.classList.add('active');
        resumeDetails[idx].classList.add('active');
    });
});

/* ================= PORTFOLIO SLIDER ================= */

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
const portfolioDetails = document.querySelectorAll('.portfolio-detail');
const imgSlide = document.querySelector('.portfolio-carousel .img-slide');

let index = 0;
const totalProjects = portfolioDetails.length;

const activePortfolio = () => {
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => detail.classList.remove('active'));
    portfolioDetails[index].classList.add('active');

    // button states
    arrowLeft.classList.toggle('disabled', index === 0);
    arrowRight.classList.toggle('disabled', index === totalProjects - 1);
};

arrowRight.addEventListener('click', () => {
    if (index < totalProjects - 1) {
        index++;
        activePortfolio();
    }
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        activePortfolio();
    }
});

/* INIT */
activePortfolio();
