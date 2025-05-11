const navArea = document.getElementById('navbar-cta');
const navToggle = document.querySelector('[data-collapse-toggle="navbar-cta"]');

if (navArea && navToggle) {
  navToggle.addEventListener('click', () => {
    navArea.classList.toggle('hidden');
  });
}