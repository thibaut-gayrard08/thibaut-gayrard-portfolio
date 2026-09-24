/* ============================================
   ANIMATIONS AVANCÉES AU SCROLL
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Configuration Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajouter la classe d'animation
                entry.target.classList.add('visible');
                
                // Observer seulement une fois
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer tous les éléments animés
    const animatedElements = document.querySelectorAll(
        '.service-card, .pricing-card, .step, .profil-image, .profil-text, .skills, .contact-info'
    );

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Animation pour les mots du hero (déjà animés au chargement)
    const heroText = document.querySelector('.hero-text-animated');
    if (heroText) {
        // Les délais sont déjà définis en CSS
    }
});

// Scroll smooth pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

