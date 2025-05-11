const toggleButton = document.getElementById('theme-toggle');
const toggleIcon = document.getElementById('toggle-icon');
const htmlElement = document.documentElement;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  htmlElement.classList.add('dark');
  toggleIcon.textContent = '🌙';
} else {
  toggleIcon.textContent = '☀️';
}

toggleButton.addEventListener('click', () => {
  htmlElement.classList.toggle('dark');
  const isDark = htmlElement.classList.contains('dark');
  toggleIcon.textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});