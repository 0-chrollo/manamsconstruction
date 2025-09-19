  // Burger Menu Toggle
  const burgerMenu = document.getElementById('burger-menu');
  const navMenu = document.getElementById('nav-menu');
  
  burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('active');
      navMenu.classList.toggle('active');
  });
  
  // Close menu when clicking a nav link (for mobile)
  const navLinks = document.querySelectorAll('#nav-menu li a');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          burgerMenu.classList.remove('active');
          navMenu.classList.remove('active');
      });
  });
  
  // Close menu when scrolling (for better UX on mobile)
  window.addEventListener('scroll', () => {
      if (navMenu.classList.contains('active')) {
          burgerMenu.classList.remove('active');
          navMenu.classList.remove('active');
      }
  });

