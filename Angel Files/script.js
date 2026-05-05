// ── 3. ACTIVE NAV HIGHLIGHT ──
// As you scroll, highlight the nav link for the section you're in
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('nav#navbar .nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 130) {
      current = sec.id;
    }
  });

  navAs.forEach(a => {
    const isActive = a.getAttribute('href') === `#${current}`;
    a.style.color = isActive ? 'var(--red)' : '';
  });
});