// Dark mode with persistence
const toggle = document.getElementById('dark-mode-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Initialize dark mode
function initDarkMode() {
  const saved = localStorage.getItem('darkMode');
  const shouldBeDark = saved ? saved === 'true' : prefersDark.matches;
  
  if (shouldBeDark) {
    document.body.classList.add('dark-mode');
  }
}

// Toggle dark mode
toggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDark);
});

// Listen for system preference changes
prefersDark.addEventListener('change', (e) => {
  if (!localStorage.getItem('darkMode')) {
    document.body.classList.toggle('dark-mode', e.matches);
  }
});

// Initialize on load
initDarkMode();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Lazy load animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0s';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.section, .hero, .footer').forEach(el => {
  observer.observe(el);
});
