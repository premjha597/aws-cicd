/**
 * Prem Jha - Personal Portfolio Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Hamburger Toggle Logic
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu gracefully when link items are chosen
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // 2. Sticky Navbar Visual Shift during window scrolling
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // 3. Scroll-to-Top Button Visibility Toggle
    const scrollTopBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 4. Advanced Scroll Reveal Engine using Intersection Observer API
    const revealElements = document.querySelectorAll('.scroll-reveal, .skill-card, .project-card');
    
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // stop observing once active class is injected
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15, // trigger execution when 15% element context intersects viewport
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        // Programmatically guarantee base reveal style classes mapping
        element.classList.add('scroll-reveal');
        revealOnScroll.observe(element);
    });
});