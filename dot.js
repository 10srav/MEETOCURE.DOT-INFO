// Function to toggle the mobile menu
function toggleMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('active');
}

// Function to handle smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Add mobile menu to DOM
  const header = document.querySelector('header');
  
  // Create mobile menu toggle button
  const mobileMenuToggle = document.createElement('button');
  mobileMenuToggle.className = 'mobile-menu-toggle';
  mobileMenuToggle.innerHTML = '☰';
  mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  
  // Create mobile menu container
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'mobile-menu';
  
  // Clone the navigation for mobile
  const mainNav = document.querySelector('nav ul');
  const mobileNavUl = document.createElement('ul');
  
  // Copy nav items to mobile menu
  Array.from(mainNav.children).forEach(item => {
      const newItem = item.cloneNode(true);
      mobileNavUl.appendChild(newItem);
  });
  
  mobileMenu.appendChild(mobileNavUl);
  
  // Add the elements to the DOM
  header.appendChild(mobileMenuToggle);
  document.body.appendChild(mobileMenu);
  
  // Handle Contact Form
  const contactButton = document.getElementById('contactNowBtn');
  const contactForm = document.getElementById('contactForm');
  
  if (contactButton && contactForm) {
      contactButton.addEventListener('click', function() {
          if (contactForm.style.display === 'block') {
              contactForm.style.display = 'none';
          } else {
              contactForm.style.display = 'block';
          }
      });
  }
  
  // Handle form submission
  const form = contactForm?.querySelector('form');
  if (form) {
      form.addEventListener('submit', function(e) {
          e.preventDefault();
          // Collect form data
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;
          
          // You would typically send this data to a server here
          console.log('Form submitted:', {name, email, message});
          
          // Show confirmation message
          alert('Thank you for your message! We will get back to you soon.');
          
          // Clear form and hide it
          form.reset();
          contactForm.style.display = 'none';
      });
  }
  
  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Close mobile menu if open
          if (mobileMenu.classList.contains('active')) {
              mobileMenu.classList.remove('active');
          }
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });
});