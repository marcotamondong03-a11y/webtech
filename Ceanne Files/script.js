/* Utility: smooth scroll with nav offset */
function smoothScrollTo(targetId) {
  const target = document.querySelector(targetId);
  if (!target) return;
  const navHeight = document.querySelector('.nav').offsetHeight;
  const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: 'smooth' });
}

/* Nav link clicks */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href?.startsWith('#')) return;
    e.preventDefault();
    smoothScrollTo(href);
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

/* Hero buttons (Know More + Contact Me) */
document.querySelectorAll('.hero-buttons a[href^="#"]').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    smoothScrollTo(this.getAttribute('href'));
  });
});

/* Highlight active nav link on scroll */
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section[id]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(l => l.classList.remove('active'));
    const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
    if (active) active.classList.add('active');
  });
}, { threshold: 0.35, rootMargin: '-60px 0px -40% 0px' });

sections.forEach(s => observer.observe(s));
