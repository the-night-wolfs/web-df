// Main JavaScript file for additional functionality

// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out'
  });
  
  // Additional JavaScript functionality can be added here
  
  // Example: Back to top button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.style.display = 'none';
  document.body.appendChild(backToTopBtn);
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Add program card hover effect for non-React implementations
  const programCards = document.querySelectorAll('.program-card');
  programCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Add sticky header effect if needed
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 100) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
  }
  
  // Add a simple loader
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  loader.innerHTML = '<div class="loader-spinner"></div>';
  document.body.appendChild(loader);
  
  window.addEventListener('load', function() {
    setTimeout(function() {
      loader.style.opacity = '0';
      setTimeout(function() {
        loader.style.display = 'none';
      }, 500);
    }, 500);
  });
  
  // Additional CSS for the elements created by JS
  const style = document.createElement('style');
  style.textContent = `
    .back-to-top {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: var(--primary);
      color: white;
      border: none;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
      z-index: 1000;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }
    
    .back-to-top:hover {
      background-color: var(--primary-dark);
      transform: translateY(-5px);
    }
    
    .page-loader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      transition: opacity 0.5s ease;
    }
    
    .loader-spinner {
      width: 50px;
      height: 50px;
      border: 5px solid rgba(var(--primary-rgb), 0.2);
      border-radius: 50%;
      border-top-color: var(--primary);
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
    
    header.sticky {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: var(--white);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      animation: slideDown 0.5s ease;
    }
    
    @keyframes slideDown {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
});