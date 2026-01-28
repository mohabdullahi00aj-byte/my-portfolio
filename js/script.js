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

/* ================= PORTFOLIO PROJECT NAVIGATION ================= */

// Project data array
const projects = [
    {
        number: "01",
        title: "Water Management System",
        description: "A web-based Water Management System designed to monitor and manage water quality data and user can report anything related to water quality even if there is leakage.",
        tech: "PHP, MySQL, HTML, CSS",
        image: "images/portfolio1.jpg",
        github: "https://github.com/mohabdullahi00aj-byte"
    },
    {
        number: "02",
        title: "Digital Marketing Campaign Optimization",
        description: "The Digital Marketing Campaign Optimization project leverages the Knowledge Discovery in Databases (KDD) methodology to analyze marketing data and enhance campaign performance. It integrates multiple data mining techniques, including market basket analysis, clustering, recommender systems, and anomaly detection, to support data-driven decision-making and improve marketing efficiency.",
        tech: "Python",
        image: "images/portfolio2.jpg",
        github: "https://github.com/mohabdullahi00aj-byte"
    },
    {
        number: "03",
        title: "Handwritten Writer Recognition",
        description: "A deep learning based handwritten writer recognition system using CNNs, OpenCV, and TensorFlow for identifying writers from handwritten text images.",
        tech: "Python",
        image: "images/portfolio3.jpg",
        github: "https://github.com/mohabdullahi00aj-byte"
    },
    {
        number: "04",
        title: "Global Schema Integration Project",
        description: "We analyzed three independent databases with overlapping business domains. We identified naming, structural, and key conflicts during integration. Finally, we designed a unified global relational schema to support distributed data access and consistency.",
        tech: "MySQL",
        image: "images/portfolio4.jpg",
        github: "https://github.com/mohabdullahi00aj-byte"
    },
    {
        number: "05",
        title: "Bidding System",
        description: "The Online Bidding System is a web application that enables users to conduct and participate in online auctions. It supports user authentication, item listing, real-time bidding, and bid management, providing a secure and efficient auction platform.",
        tech: "PHP, MySQL, CSS, HTML",
        image: "images/portfolio5.jpg",
        github: "https://github.com/mohabdullahi00aj-byte"
    },
    {
        number: "06",
        title: "Diabetes & Heart Disease Prediction",
        description: "This project combines unsupervised learning for patient segmentation and supervised learning for disease prediction, forming a complete end-to-end machine learning solution for healthcare analytics.",
        tech: "Python",
        image: "images/portfolio6.jpg",
        github: "https://github.com/mohabdullahi00aj-byte"
    },
    {
        number: "07",
        title: "Somali Car Hub Frontend",
        description: "Somali Car Hub Frontend is a modern web interface designed for showcasing and browsing cars available for sale in Somalia. The platform allows users to explore vehicle listings, view detailed information such as price, model, condition, and images, and easily search or filter cars based on their preferences.",
        tech: "JavaScript, CSS, HTML",
        image: "images/portfolio7.jpg",
        github: "https://github.com/mohabdullahi00aj-byte"
    },
    {
        number: "08",
        title: "Somali Edu Hub Frontend",
        description: "Somali Edu Hub Frontend is a web interface for accessing Somali education notes and past exam papers in a simple and organized way.",
        tech: "JavaScript, CSS, HTML",
        image: "images/portfolio8.jpg",
        github: "https://github.com/mohabdullahi00aj-byte"
    },
    {
        number: "09",
        title: "Amazon Product Review Sentiment Analysis (NLP)",
        description: "An NLP-based machine learning project that analyzes Amazon product reviews and classifies them as positive or negative. The system applies text preprocessing, TF-IDF feature extraction, and supervised learning models to evaluate sentiment and support data-driven business decisions.",
        tech: "Python, NLP, Machine Learning, TF-IDF, Scikit-learn",
        image: "images/portfolio9.jpg",
        github: "https://github.com/mohabdullahi00aj-byte"
    },
    {
        number: "10",
        title: "SalesSense AI System",
        description: "SalesSense AI is a comprehensive web-based artificial intelligence system designed for sales forecasting and business analytics. The system enables businesses to upload their sales data, generate accurate ML-powered predictions, and manage their forecasting history with complete data control.",
        tech: "React.js, CSS, FastAPI with Python 3.14",
        image: "images/portfolio10.jpg",
        github: "https://github.com/mohabdullahi00aj-byte"
    },
    {
        number: "11",
        title: "Zero Trust Network Architecture",
        description: "This project implements a Zero Trust Network Architecture that enforces strict authentication, authorization, and network segmentation to enhance enterprise network security.",
        tech: "JavaScript, Node.js, MySQL, Tailwind, GNS3, pfSense, Ubuntu, VirtualBox, Kali Linux",
        image: "images/portfolio11.jpg",
        github: "https://github.com/mohabdullahi00aj-byte"
    }
];

// Portfolio navigation variables
let currentProjectIndex = 0;
const totalProjects = projects.length;

// DOM elements
const projectNumber = document.getElementById('project-number');
const projectTitle = document.getElementById('project-title');
const projectDescription = document.getElementById('project-description');
const projectTech = document.getElementById('project-tech');
const projectImg = document.getElementById('project-img');
const currentProjectSpan = document.getElementById('current-project');
const totalProjectsSpan = document.getElementById('total-projects');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const projectDisplay = document.querySelector('.project-display');

// Update project display
const updateProject = () => {
    const project = projects[currentProjectIndex];
    
    // Add fade out effect
    projectDisplay.classList.add('fade-out');
    
    setTimeout(() => {
        // Update content
        projectNumber.textContent = project.number;
        projectTitle.textContent = project.title;
        projectDescription.textContent = project.description;
        projectTech.textContent = project.tech;
        projectImg.src = project.image;
        projectImg.alt = project.title;
        
        // Update counter
        currentProjectSpan.textContent = currentProjectIndex + 1;
        
        // Update navigation buttons
        prevBtn.classList.toggle('disabled', currentProjectIndex === 0);
        nextBtn.classList.toggle('disabled', currentProjectIndex === totalProjects - 1);
        
        // Remove fade out effect
        projectDisplay.classList.remove('fade-out');
    }, 150);
};

// Navigation event listeners
prevBtn.addEventListener('click', () => {
    if (currentProjectIndex > 0) {
        currentProjectIndex--;
        updateProject();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentProjectIndex < totalProjects - 1) {
        currentProjectIndex++;
        updateProject();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // Only work when portfolio section is active
    const portfolioSection = document.getElementById('portfolio');
    if (!portfolioSection.classList.contains('active')) return;
    
    if (e.key === 'ArrowLeft' && currentProjectIndex > 0) {
        currentProjectIndex--;
        updateProject();
    } else if (e.key === 'ArrowRight' && currentProjectIndex < totalProjects - 1) {
        currentProjectIndex++;
        updateProject();
    }
});

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

const handleSwipe = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (!portfolioSection.classList.contains('active')) return;
    
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0 && currentProjectIndex > 0) {
            // Swipe right - go to previous project
            currentProjectIndex--;
            updateProject();
        } else if (swipeDistance < 0 && currentProjectIndex < totalProjects - 1) {
            // Swipe left - go to next project
            currentProjectIndex++;
            updateProject();
        }
    }
};

projectDisplay.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

projectDisplay.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

// Initialize portfolio
document.addEventListener('DOMContentLoaded', () => {
    totalProjectsSpan.textContent = totalProjects;
    updateProject();
});
