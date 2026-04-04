// ============================================================
// Navigation — scroll state
// ============================================================
const nav = document.getElementById('nav');

function updateNavScroll() {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateNavScroll, { passive: true });
updateNavScroll();

// ============================================================
// Navigation — mobile hamburger
// ============================================================
const hamburger = document.getElementById('nav-hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu on nav link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ============================================================
// Navigation — Apps dropdown
// ============================================================
const appsToggle = document.getElementById('apps-toggle');
const appsDropdown = document.getElementById('apps-dropdown');

appsToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = appsDropdown.classList.toggle('open');
  appsToggle.setAttribute('aria-expanded', isOpen);
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!appsToggle.contains(e.target) && !appsDropdown.contains(e.target)) {
    appsDropdown.classList.remove('open');
    appsToggle.setAttribute('aria-expanded', 'false');
  }
});

// Close dropdown on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    appsDropdown.classList.remove('open');
    appsToggle.setAttribute('aria-expanded', 'false');
  }
});

// ============================================================
// Scroll reveal — IntersectionObserver
// ============================================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

// ============================================================
// Footer — current year
// ============================================================
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
