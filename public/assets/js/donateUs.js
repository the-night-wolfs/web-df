document.addEventListener('DOMContentLoaded', function() {
    // Variables
    let currentAmount = 10;
    let currentFrequency = 'monthly';
    const donationForm = document.getElementById('donationForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const donationAmountEl = document.getElementById('donationAmount');
    const frequencyLabelEl = document.getElementById('frequencyLabel');
    const customAmountContainer = document.querySelector('.custom-amount');
    const customAmountInput = document.getElementById('customAmountInput');
    const impactTextEl = document.getElementById('impactText').querySelector('span');
    const donationCounter = document.getElementById('donationCounter');
    const amountRaised = document.getElementById('amountRaised');
    const paymentForm = document.getElementById('paymentForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    
    // Frequency button functionality
    document.querySelectorAll('.frequency-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.frequency-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentFrequency = this.getAttribute('data-frequency');
        updateDonationButton();
        updateImpactText();
      });
    });
    
    // Amount button functionality
    document.querySelectorAll('.amount-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const amount = this.getAttribute('data-amount');
        
        if (amount === 'custom') {
          customAmountContainer.classList.add('active');
          customAmountInput.focus();
          
          if (customAmountInput.value && !isNaN(customAmountInput.value) && customAmountInput.value > 0) {
            currentAmount = parseFloat(customAmountInput.value);
          }
        } else {
          customAmountContainer.classList.remove('active');
          currentAmount = parseInt(amount);
        }
        
        updateDonationButton();
        updateImpactText();
      });
    });
    
    // Custom amount input
    customAmountInput.addEventListener('input', function() {
      if (this.value && !isNaN(this.value) && this.value > 0) {
        currentAmount = parseFloat(this.value);
        updateDonationButton();
        updateImpactText();
      }
    });
    
    // Update donation button text
    function updateDonationButton() {
      donationAmountEl.textContent = currentAmount;
      frequencyLabelEl.textContent = currentFrequency === 'monthly' ? 'Monthly' : '';
    }
    
    // Update impact text based on amount and frequency
    function updateImpactText() {
      let impactMessage = '';
      
      if (currentFrequency === 'monthly') {
        if (currentAmount < 20) {
          impactMessage = `Your $${currentAmount} monthly donation provides community support for 2 people`;
        } else if (currentAmount < 50) {
          impactMessage = `Your $${currentAmount} monthly donation provides community support for 5 people`;
        } else if (currentAmount < 100) {
          impactMessage = `Your $${currentAmount} monthly donation supports a small community event`;
        } else {
          impactMessage = `Your $${currentAmount} monthly donation helps fund a major community project`;
        }
      } else {
        if (currentAmount < 20) {
          impactMessage = `Your one-time $${currentAmount} donation helps with immediate community needs`;
        } else if (currentAmount < 50) {
          impactMessage = `Your one-time $${currentAmount} donation supports a family in need`;
        } else if (currentAmount < 100) {
          impactMessage = `Your one-time $${currentAmount} donation helps organize a neighborhood event`;
        } else {
          impactMessage = `Your one-time $${currentAmount} donation makes a significant impact on our community projects`;
        }
      }
      
      impactTextEl.textContent = impactMessage;
    }
    
    // Form validation
    paymentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let isValid = true;
      
      // Validate name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('is-invalid');
        isValid = false;
      } else {
        nameInput.classList.remove('is-invalid');
      }
      
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
        emailInput.classList.add('is-invalid');
        isValid = false;
      } else {
        emailInput.classList.remove('is-invalid');
      }
      
      // If valid, show thank you message
      if (isValid) {
        // Simulate form submission with loading state
        const donateBtn = document.querySelector('.donate-btn');
        const originalText = donateBtn.innerHTML;
        
        donateBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Processing...';
        donateBtn.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
          // Update stats with the new donation
          updateStats();
          
          // Show thank you message
          donationForm.style.display = 'none';
          thankYouMessage.style.display = 'block';
          thankYouMessage.classList.add('animate__animated', 'animate__fadeIn');
          
          // Reset form for future use
          donateBtn.innerHTML = originalText;
          donateBtn.disabled = false;
          paymentForm.reset();
        }, 1500);
      }
    });
    
    // Donate again button
    document.getElementById('donateAgainBtn').addEventListener('click', function() {
      thankYouMessage.style.display = 'none';
      donationForm.style.display = 'block';
    });
    
    // Update statistics when a donation is made
    function updateStats() {
      // Increment donor count
      const currentCount = parseInt(donationCounter.textContent);
      donationCounter.textContent = currentCount + 1;
      
      // Update amount raised
      const currentRaised = parseFloat(amountRaised.textContent.replace(',', ''));
      const newTotal = currentRaised + currentAmount;
      amountRaised.textContent = newTotal.toLocaleString();
      
      // Update progress bar
      const progressBar = document.querySelector('.progress-bar');
      const newProgress = Math.min(100, (newTotal / 10000) * 100);
      progressBar.style.width = `${newProgress}%`;
      progressBar.setAttribute('aria-valuenow', newProgress);
    }
    
    // Animation for donation counter
    setInterval(() => {
      const randomIncrease = Math.floor(Math.random() * 3);
      if (randomIncrease > 0) {
        const currentCount = parseInt(donationCounter.textContent);
        donationCounter.textContent = currentCount + randomIncrease;
      }
    }, 30000);
    
    // Initialize with default values
    updateDonationButton();
    updateImpactText();
  });