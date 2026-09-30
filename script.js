/**
 * Mulbex Website Scripts
 * Features: Dark/Light Mode, Interactive Spotlight, Live Amsterdam Clock
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initSpotlightEffect();
  initAmsterdamClock();
  initDynamicYear();
});

/**
 * Dark / Light Theme Toggle with persistence
 */
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) {
    document.documentElement.setAttribute('data-theme', 'light');
    return;
  }

  const savedTheme = localStorage.getItem('mulbex-theme') || 'light';
  applyTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('mulbex-theme', newTheme);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const isDark = theme === 'dark';
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    themeToggle.setAttribute('title', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  }
}

/**
 * Interactive Spotlight Glow Effect on Cards
 */
function initSpotlightEffect() {
  const cards = document.querySelectorAll('.interactive-card');
  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}


/**
 * Live Amsterdam / Netherlands Clock
 */
function initAmsterdamClock() {
  const localTimeEl = document.getElementById('local-time');
  if (!localTimeEl) return;

  function updateClock() {
    try {
      const formatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Amsterdam',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZoneName: 'short'
      });
      const parts = formatter.format(new Date());
      localTimeEl.textContent = `Amsterdam • ${parts}`;
    } catch (e) {
      localTimeEl.textContent = `Netherlands • Europe/Amsterdam`;
    }
  }

  updateClock();
  setInterval(updateClock, 30000);
}

/**
 * Footer Dynamic Year
 */
function initDynamicYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
