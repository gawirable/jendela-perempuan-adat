// Welcome Section scroll logic
document.addEventListener('DOMContentLoaded', function() {
    var welcomeSection = document.getElementById('welcome-section');
    var scrollBtn = document.getElementById('welcome-scroll-btn');
    var mainHero = document.getElementById('main-hero-content');
    function showHero() {
      mainHero.classList.remove('opacity-0', 'pointer-events-none');
      mainHero.classList.add('opacity-100');
    }
    function hideWelcome() {
      welcomeSection.classList.add('opacity-0', 'pointer-events-none');
      setTimeout(function() {
        welcomeSection.style.display = 'none';
        showHero();
      }, 700);
    }
    welcomeSection.addEventListener('click', function(e) {
      e.preventDefault();
      hideWelcome();
    });
    scrollBtn.addEventListener('click', function(e) {
      e.preventDefault();
      hideWelcome();
    });
    // Optional: hide on scroll
    window.addEventListener('scroll', function() {
      if(window.scrollY > 10 && welcomeSection.style.display !== 'none') hideWelcome();
    });
    // Show hero if welcome is hidden (refresh fallback)
    if(welcomeSection.style.display === 'none') showHero();
  });