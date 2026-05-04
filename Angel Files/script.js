// ── Hamburger menu ──
const ham = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
ham.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ── Scroll Reveal ──
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 90);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => revealObserver.observe(el));

// ── Active nav highlight on scroll ──
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('nav#navbar .nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 130) current = sec.id;
  });
  navAs.forEach(a => {
    const isActive = a.getAttribute('href') === `#${current}`;
    a.style.color = isActive ? 'var(--red)' : '';
  });
});