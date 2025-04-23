import React, { useState, useEffect } from 'react';
import '../styles/global.css';

// SVG Icons as React Components
const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
  </svg>
);

const HandHeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 12c-1.1 0-2 .9-2 2v6h-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v12h-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v12H4v-6c0-1.1-.9-2-2-2s-2 .9-2 2v8h20v-8c0-1.1-.9-2-2-2z" />
    <path d="M15 4c-1.1 0-2 .9-2 2v2h2V6h4v2h-2v2h2V6c0-1.1-.9-2-2-2h-2z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
  </svg>
);

const ReloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
  </svg>
);

const DonationPage = () => {
  const [currentAmount, setCurrentAmount] = useState(10);
  const [currentFrequency, setCurrentFrequency] = useState('monthly');
  const [showCustomAmount, setShowCustomAmount] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
  const [donationCount, setDonationCount] = useState(247);
  const [amountRaised, setAmountRaised] = useState(7625);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false
  });

  // Predefined donation amounts
  const amounts = [10, 30, 50, 100, 250, 'custom'];

  // Update impact text based on amount and frequency
  const getImpactText = () => {
    const amount = currentAmount;
    const isMonthly = currentFrequency === 'monthly';

    if (isMonthly) {
      if (amount < 20) return `Your $${amount} monthly donation provides community support for 2 people`;
      if (amount < 50) return `Your $${amount} monthly donation provides community support for 5 people`;
      if (amount < 100) return `Your $${amount} monthly donation supports a small community event`;
      return `Your $${amount} monthly donation helps fund a major community project`;
    } else {
      if (amount < 20) return `Your one-time $${amount} donation helps with immediate community needs`;
      if (amount < 50) return `Your one-time $${amount} donation supports a family in need`;
      if (amount < 100) return `Your one-time $${amount} donation helps organize a neighborhood event`;
      return `Your one-time $${amount} donation makes a significant impact on our community projects`;
    }
  };

  // Handle amount selection
  const handleAmountSelect = (amount) => {
    if (amount === 'custom') {
      setShowCustomAmount(true);
      return;
    }

    setShowCustomAmount(false);
    setCurrentAmount(amount);
  };

  // Handle custom amount change
  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);

    if (value && !isNaN(value) && value > 0) {
      setCurrentAmount(Number(value));
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({ ...prev, [name]: false }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { ...formErrors };

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = true;
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = true;
      isValid = false;
    }

    setFormErrors(newErrors);

    if (isValid) {
      // Simulate API call
      setTimeout(() => {
        // Update stats
        setDonationCount(prev => prev + 1);
        setAmountRaised(prev => prev + currentAmount);
        setShowThankYou(true);
      }, 1000);
    }
  };

  // Reset form for another donation
  const handleDonateAgain = () => {
    setShowThankYou(false);
    setFormData({ name: '', email: '', phone: '' });
  };

  // Calculate progress percentage
  const progressPercentage = Math.min(100, (amountRaised / 10000) * 100);

  // Simulate occasional donor count increase
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIncrease = Math.floor(Math.random() * 3);
      if (randomIncrease > 0) {
        setDonationCount(prev => prev + randomIncrease);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="donation-container">
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-lg-6 col-md-12 text-center text-lg-start mb-5 mb-lg-0 animate-fade-in-left">
          <h1 className="title">
            Contribute to <span className="highlight">change</span><br /> in your community
          </h1>

          <p className="description">
            Help us bring companionship and community back to our streets. Your donation makes a real difference.
          </p>

          <div className="image-container">
            <img
              src="https://via.placeholder.com/400x300"
              className="community-image"
              alt="Community support"
              loading="lazy"
            />
            <div className="donation-badge">
              <HeartIcon />
              <span>{donationCount}</span> people donated this week
            </div>
          </div>

          <div className="donation-stats">
            <div>Target: $10,000</div>
            <div>Raised: ${amountRaised.toLocaleString()}</div>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-fill"
              style={{ width: `${progressPercentage}%` }}
              aria-valuenow={progressPercentage}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>

          <div className="features">
            <div className="feature">
              <LeafIcon />
              <div className="feature-text">
                <h6>Sustainable Impact</h6>
                <p>Your donation creates lasting change in communities that need it most.</p>
              </div>
            </div>

            <div className="feature">
              <HandHeartIcon />
              <div className="feature-text">
                <h6>Local Focus</h6>
                <p>100% of your contribution goes directly to community programs.</p>
              </div>
            </div>
          </div>

          <div className="testimonial">
            "The community support program has transformed our neighborhood. More than just financial aid, it's brought people together." - <strong>Sarah K.</strong>
          </div>
        </div>

        {/* Right Column - Donation Form */}
        <div className="col-lg-6 col-md-12 animate-fade-in-right">
          {!showThankYou ? (
            <div className="donation-card">
              <h4 className="section-title">Make Your Donation</h4>

              <div className="form-group">
                <label>Select Frequency</label>
                <div className="button-group">
                  <button className={currentFrequency === 'monthly' ? 'active' : ''}
                    onClick={() => setCurrentFrequency('monthly')}>
                    Monthly
                  </button>
                  <button className={currentFrequency === 'one-time' ? 'active' : ''}
                    onClick={() => setCurrentFrequency('one-time')}>
                    One-time
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Select Amount</label>
                <div className="button-group">
                  {amounts.map((amount) => (
                    <button key={amount}
                      className={currentAmount === amount ? 'active' : ''}
                      onClick={() => handleAmountSelect(amount)}>
                      ${amount}
                    </button>
                  ))}
                  <button className={showCustomAmount ? 'active' : ''}
                    onClick={() => setShowCustomAmount(true)}>
                    Custom
                  </button>
                </div>
              </div>
              <div className="impact-container">
                <h6>Your Impact</h6>
                <div className="impact-item">
                  <CheckCircleIcon />
                  <span>{getImpactText()}</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={formErrors.name ? 'invalid' : ''}
                    required
                  />
                  {formErrors.name && <div className="error-message">Please enter your name</div>}
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className={formErrors.email ? 'invalid' : ''}
                    required
                  />
                  {formErrors.email && <div className="error-message">Please enter a valid email address</div>}
                </div>

                <div className="form-group">
                  <label>Phone Number (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <button type="submit" className="donate-btn">
                  Donate ${currentAmount} {currentFrequency === 'monthly' ? 'Monthly' : ''}
                  <HeartIcon />
                </button>
              </form>

              <div className="security-badges">
                <div className="security-badge">
                  <LockIcon /> Secure Payment
                </div>
                <div className="security-badge">
                  <ShieldIcon /> SSL Encrypted
                </div>
              </div>
            </div>
          ) : (
            <div className="donation-card thank-you-message">
              <CheckCircleIcon className="animate-bounce-in" />
              <h4 className="thank-you-title">Thank You for Your Donation!</h4>
              <p>
                Your contribution will make a real difference in our community.
                A confirmation email has been sent to your inbox.
              </p>
              <button className="donate-again-btn" onClick={handleDonateAgain}>
                <ReloadIcon /> Make Another Donation
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonationPage;