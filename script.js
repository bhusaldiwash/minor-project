// ===== DARK / LIGHT MODE TOGGLE =====

const html = document.documentElement;
const toggleBtn = document.getElementById('theme-toggle');

// Check if a theme was saved before, otherwise default to light
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
toggleBtn.textContent = savedTheme === 'dark' ? '🌙':'☀️' ;

// When the button is clicked, switch the theme and save it
toggleBtn.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';

  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  toggleBtn.textContent = newTheme === 'dark' ? '🌙':'☀️' ;
});
