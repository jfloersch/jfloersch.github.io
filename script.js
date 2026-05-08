const siteHeader = document.getElementById("site-header");
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
const yearEl = document.getElementById("year");

function syncHeaderState() {
  if (!siteHeader) {
    return;
  }

  siteHeader.classList.toggle("scrolled", window.scrollY > 8);
}

if (siteHeader) {
  syncHeaderState();
  window.addEventListener("scroll", syncHeaderState, { passive: true });
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
