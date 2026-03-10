// 1. Mobile Menu Logic
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 2. Sticky Navbar Styling
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.padding = '12px 0';
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.background = '#0F172A';
    }
});

// 3. Live Animation Intersection Observer
const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Once it's revealed, we can stop observing it
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

// Select all elements to reveal
document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

// 4. Smooth Parallax for Hero Text
window.addEventListener('scroll', () => {
    const heroContent = document.querySelector('.hero-content');
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
});

// 5. Contact Form Validation & Success Animation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple visual feedback
    const btn = contactForm.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerText = "Sending...";
    btn.disabled = true;

    setTimeout(() => {
        alert("Your luxury experience begins now. A concierge will contact you shortly.");
        btn.innerText = originalText;
        btn.disabled = false;
        contactForm.reset();
    }, 1500);
});

// 6. Smooth Scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});