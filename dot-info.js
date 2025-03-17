





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



contactBtn.addEventListener('click', () => { 
  if (contactForm.style.display === 'none' || contactForm.style.display === '') {
    contactForm.style.display = 'block';
  } else {
    contactForm.style.display = 'none';
  }
});
