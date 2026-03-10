// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => revealObserver.observe(el));

// ── STAGGERED CHILDREN REVEAL ──
document.querySelectorAll('.services-grid, .why-grid, .steps-track').forEach(parent => {
  const children = parent.querySelectorAll('.service-card, .why-card, .step');
  children.forEach((child, i) => {
    child.style.transitionDelay = `${i * 80}ms`;
    child.classList.add('reveal');
    revealObserver.observe(child);
  });
});

// ── NAV SCROLL SHRINK ──
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 40;
  navbar.style.padding = scrolled ? '12px 40px' : '20px 40px';
}, { passive: true });

// ── MOBILE MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});
