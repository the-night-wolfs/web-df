import React,{useEffect} from "react";
import '../styles/global.css';


// Icon components
const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red" className="bi bi-heart-fill mx-2" viewBox="0 0 16 16">
    <path d="M8 2.748l-.717-.737C5.6.281 2.514 3.408 8 8.158c5.486-4.75 2.4-7.877.717-6.147L8 2.748z" />
  </svg>
);

const DonateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cash-coin mx-2" viewBox="0 0 16 16">
    <path d="M11 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    <path d="M1 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3z" />
  </svg>
);

const VolunteerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-people-fill mx-2" viewBox="0 0 16 16">
    <path d="M13 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm7 1c-1.105 0-2 .672-2 1.5V12h4v-1.5c0-.828-.895-1.5-2-1.5zM6 9c-1.105 0-2 .672-2 1.5V12h4v-1.5c0-.828-.895-1.5-2-1.5z" />
  </svg>
);

function DonationPage() {
  useEffect(()=>{
    let script=document.createElement('script')
    script.src='/js/donateUs.js'
    script.async = true;
    document.body.insertBefore(script,document.body.firstChild);
},[])
  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 text-center text-lg-start mb-5 mb-lg-0 animate__animated animate__fadeInLeft">
            <h1 className="fw-bold mb-3">Contribute to <span className="highlight">change</span> <br/> in your community</h1>
            <p className="text-muted mb-4">Help us bring companionship and community back to our streets. Your donation makes a real difference.</p>
            <div className="position-relative">
              <img src="/api/placeholder/400/300" className="img-fluid rounded-3 shadow-sm" alt="Community image"/>
                <div className="badge bg-accent position-absolute bottom-0 end-0 m-3 py-2 px-3 shadow-sm rounded-pill">
                  <i className="fas fa-heart"></i> <span id="donationCounter">247</span> people donated this week
                </div>
            </div>

            <div className="donation-stats mt-4">
              <div>Target: $10,000</div>
              <div>Raised: $<span id="amountRaised">7,625</span></div>
            </div>

            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width:'76%'}} aria-valuenow="76" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <div className="feature-items mt-4">
              <div className="feature-item">
                <i className="fas fa-leaf"></i>
                <div className="feature-text">
                  <h6>Sustainable Impact</h6>
                  <p>Your donation creates lasting change in communities that need it most.</p>
                </div>
              </div>
              <div className="feature-item">
                <i className="fas fa-hand-holding-heart"></i>
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

          <div className="col-lg-6 col-md-12 animate__animated animate__fadeInRight">
            <div className="donation-card" id="donationForm">
              <h4 className="section-title mb-4">Make Your Donation</h4>

              <div className="mb-4">
                <label className="form-label">Select Frequency</label>
                <div className="d-flex">
                  <button className="frequency-btn active me-2" data-frequency="monthly">Monthly</button>
                  <button className="frequency-btn" data-frequency="one-time">One-time</button>
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label">Select Amount</label>
                <div className="d-flex flex-wrap">
                  <button className="amount-btn active" data-amount="10">$10</button>
                  <button className="amount-btn" data-amount="30">$30</button>
                  <button className="amount-btn" data-amount="50">$50</button>
                  <button className="amount-btn" data-amount="100">$100</button>
                  <button className="amount-btn" data-amount="250">$250</button>
                  <button className="amount-btn" data-amount="custom">Custom</button>
                </div>

                <div className="custom-amount mt-3">
                  <div className="input-group">
                    <span className="input-group-text">$</span>
                    <input type="number" className="form-control" id="customAmountInput" placeholder="Enter amount" min="1"/>
                  </div>
                </div>
              </div>

              <div className="donation-impact mb-4">
                <h6>Your Impact</h6>
                <div className="impact-item" id="impactText">
                  <i className="fas fa-check-circle"></i>
                  <span>Your $10 monthly donation provides community support for 2 people</span>
                </div>
              </div>

              <form id="paymentForm">
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="nameInput" placeholder="Enter your full name" required />
                    <div className="invalid-feedback">Please enter your name</div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="emailInput" placeholder="Enter your email" required />
                    <div className="invalid-feedback">Please enter a valid email address</div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number (Optional)</label>
                  <input type="tel" className="form-control" id="phoneInput" placeholder="Enter your phone number" />
                </div>

                <button type="submit" className="donate-btn w-100 pulse">
                  Donate $<span id="donationAmount">10</span> <span id="frequencyLabel">Monthly</span>
                  <i className="fas fa-heart icon"></i>
                </button>
              </form>

              <div className="badge-container">
                <div className="security-badge">
                  <i className="fas fa-lock"></i> Secure Payment
                </div>
                <div className="security-badge">
                  <i className="fas fa-shield-alt"></i> SSL Encrypted
                </div>
              </div>
            </div>

            <div className="donation-card thank-you-message" id="thankYouMessage">
              <i className="fas fa-check-circle animate__animated animate__bounceIn"></i>
              <h4 className="text-primary">Thank You for Your Donation!</h4>
              <p>Your contribution will make a real difference in our community. A confirmation email has been sent to your inbox.</p>
              <button className="btn btn-outline-primary mt-3" id="donateAgainBtn">
                <i className="fas fa-redo"></i> Make Another Donation
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )

}
export default DonationPage;
