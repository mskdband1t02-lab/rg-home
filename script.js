// Main JavaScript functionality for Raccoon Gang

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.remove('active');
            }
        });
    }
});

// Smooth scroll to screensavers section
function scrollToScreensavers() {
    const screensaversSection = document.getElementById('screensavers');
    if (screensaversSection) {
        screensaversSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Intersection Observer for animation triggers
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.feature-card, .screensaver-card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// Add dynamic particle effects to hero section
document.addEventListener('DOMContentLoaded', function() {
    const heroParticles = document.querySelector('.hero-particles');
    
    if (heroParticles) {
        // Create additional floating particles
        for (let i = 0; i < 10; i++) {
