// ── Glassmorphism header on scroll
const header = document.getElementById('mainHeader');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
});

// ── Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

const updateActiveNav = () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const h = section.offsetHeight;
        const id = section.getAttribute('id');
        if (scrollY >= top && scrollY < top + h) {
            navLinks.forEach(a => a.classList.remove('active'));
            const active = document.querySelector(`.nav-menu a[href="#${id}"]`);
            if (active) active.classList.add('active');
        }
    });
};
window.addEventListener('scroll', updateActiveNav);

// ── Scroll reveal with Intersection Observer
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ── Animated counter
const counters = document.querySelectorAll('[data-target]');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = +el.getAttribute('data-target');
        const suffix = target === 99 ? '%' : target >= 1000 ? '+' : '+';
        let current = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = current + suffix;
            if (current >= target) clearInterval(timer);
        }, 24);
        counterObserver.unobserve(el);
    });
}, { threshold: 0.5 });
counters.forEach(el => counterObserver.observe(el));

// ── Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ── Theme toggle logic
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-theme');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
