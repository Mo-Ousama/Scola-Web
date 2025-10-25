// Scola Educational Platform - Main JavaScript
// Handles all animations, interactions, and dynamic content

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initTypewriter();
    initScrollReveal();
    initStatsCounters();
    initParticles();
    initCarousel();
    initSmoothScrolling();
    initParallaxEffect();
    
    console.log('Scola platform initialized successfully!');
});

// Typewriter effect for hero section
function initTypewriter() {
    const typed = new Typed('#typed-text', {
        strings: [
            'Age 7',
            'Any Age',
            'Beginners',
            'Experts',
            'Everyone'
        ],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true
    });
}

// Scroll reveal animations
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

// Animated statistics counters
function initStatsCounters() {
    const counters = document.querySelectorAll('.stats-counter');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        
        updateCounter();
    };

    // Trigger animation when stats section is visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stats-counter');
                counters.forEach(counter => {
                    setTimeout(() => animateCounter(counter), Math.random() * 500);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    });

    const heroSection = document.querySelector('.hero-bg');
    if (heroSection) {
        statsObserver.observe(heroSection);
    }
}

// Particle background effect using p5.js
function initParticles() {
    let particles = [];
    let canvas;
    
    new p5((p) => {
        p.setup = function() {
            canvas = p.createCanvas(p.windowWidth, p.windowHeight);
            canvas.parent('particles-bg');
            canvas.style('position', 'absolute');
            canvas.style('top', '0');
            canvas.style('left', '0');
            canvas.style('z-index', '-1');
            
            // Create particles
            for (let i = 0; i < 50; i++) {
                particles.push(new Particle(p));
            }
        };
        
        p.draw = function() {
            p.clear();
            
            // Update and display particles
            particles.forEach(particle => {
                particle.update();
                particle.display();
                particle.connect(particles);
            });
        };
        
        p.windowResized = function() {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
        
        // Particle class
        function Particle(p) {
            this.pos = p.createVector(p.random(p.width), p.random(p.height));
            this.vel = p.createVector(p.random(-0.5, 0.5), p.random(-0.5, 0.5));
            this.size = p.random(2, 6);
            this.opacity = p.random(0.3, 0.8);
            
            this.update = function() {
                this.pos.add(this.vel);
                
                // Wrap around edges
                if (this.pos.x < 0) this.pos.x = p.width;
                if (this.pos.x > p.width) this.pos.x = 0;
                if (this.pos.y < 0) this.pos.y = p.height;
                if (this.pos.y > p.height) this.pos.y = 0;
            };
            
            this.display = function() {
                p.fill(255, 255, 255, this.opacity * 255);
                p.noStroke();
                p.ellipse(this.pos.x, this.pos.y, this.size);
            };
            
            this.connect = function(particles) {
                particles.forEach(other => {
                    let distance = p5.Vector.dist(this.pos, other.pos);
                    if (distance < 100) {
                        let alpha = p.map(distance, 0, 100, 0.3, 0);
                        p.stroke(255, 255, 255, alpha * 255);
                        p.strokeWeight(1);
                        p.line(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
                    }
                });
            };
        }
    });
}

// Initialize carousel for student showcase
function initCarousel() {
    const splide = new Splide('#student-showcase', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: '2rem',
        autoplay: true,
        interval: 4000,
        pauseOnHover: true,
        breakpoints: {
            1024: {
                perPage: 2,
            },
            768: {
                perPage: 1,
            }
        }
    });
    
    splide.mount();
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Parallax effect for hero section
function initParallaxEffect() {
    let ticking = false;
    
    const updateParallax = () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-animation');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    };
    
    const requestParallaxUpdate = () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    };
    
    window.addEventListener('scroll', requestParallaxUpdate);
}

// Enhanced hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Card hover effects
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.02,
                translateY: -8,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                translateY: 0,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                duration: 200,
                easing: 'easeOutCubic'
            });
        });
        
        button.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 200,
                easing: 'easeOutCubic'
            });
        });
    });
    
    // Navigation link hover effects
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                color: '#0D4F4F',
                duration: 200,
                easing: 'easeOutCubic'
            });
        });
        
        link.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                color: '#374151',
                duration: 200,
                easing: 'easeOutCubic'
            });
        });
    });
});

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// Form validation and submission
function handleFormSubmission(formId, callback) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('border-red-500');
                } else {
                    input.classList.remove('border-red-500');
                }
            });
            
            if (isValid && callback) {
                callback(new FormData(form));
            }
        });
    }
}

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
    } text-white`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutCubic'
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        anime({
            targets: notification,
            translateX: 300,
            opacity: 0,
            duration: 300,
            easing: 'easeInCubic',
            complete: () => {
                document.body.removeChild(notification);
            }
        });
    }, 3000);
}

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Export functions for use in other modules
window.ScolaJS = {
    showNotification,
    handleFormSubmission,
    toggleMobileMenu,
    debounce
};