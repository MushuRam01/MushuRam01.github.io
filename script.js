// Dark/Light mode toggle
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const html = document.documentElement;
  const headerBackground = document.querySelector('.header-background');
  
  // Check for saved theme preference or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);
  
  // Theme toggle click handler
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
  
  function updateThemeIcon(theme) {
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }
  
  // Multi-image flip on scroll
  const bgImages = document.querySelectorAll('.bg-image');
  const totalImages = bgImages.length;
  let currentImageIndex = 0;
  let lastScrollPosition = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Hide header background when scrolled down
    if (headerBackground) {
      if (currentScroll > 100) {
        headerBackground.classList.add('hidden');
      } else {
        headerBackground.classList.remove('hidden');
        
        // Flip through images based on scroll position
        // Calculate which image should be shown based on scroll
        const scrollDelta = Math.abs(currentScroll - lastScrollPosition);
        
        // Flip every 50 pixels of scroll (slowed down from 30)
        if (scrollDelta > 50) {
          // Remove active class from current image
          bgImages[currentImageIndex].classList.remove('active');
          
          // Move to next image
          currentImageIndex = (currentImageIndex + 1) % totalImages;
          
          // Add active class to new image
          bgImages[currentImageIndex].classList.add('active');
          
          lastScrollPosition = currentScroll;
        }
      }
    }
  });
  
  // Add fade-in animation on load
  const content = document.getElementById('content');
  if (content) {
    content.style.opacity = '0';
    content.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
      content.style.opacity = '1';
    }, 100);
  }
  
  // Add copy email functionality
  const emailElements = document.querySelectorAll('p');
  emailElements.forEach(el => {
    const text = el.textContent.trim();
    if (text.includes('@') && text.split(' ').length === 1) {
      el.style.cursor = 'pointer';
      el.title = 'Click to copy email';
      
      el.addEventListener('click', function() {
        navigator.clipboard.writeText(text).then(() => {
          const originalText = this.textContent;
          this.textContent = 'Email copied!';
          
          setTimeout(() => {
            this.textContent = originalText;
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy email:', err);
        });
      });
    }
  });
});
