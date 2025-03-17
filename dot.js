const contactBtn = document.getElementById('contactNowBtn'); 

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const contactForm = document.getElementById('contactForm');

contactBtn.addEventListener('click', () => { 
  if (contactForm.style.display === 'none' || contactForm.style.display === '') {
    contactForm.style.display = 'block';
  } else {
    contactForm.style.display = 'none';
  }
});
