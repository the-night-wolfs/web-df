import { useEffect } from "react";
import React from "react";
import "../styles/contact.css";
import FAQ from "../components/ui/FAQ";
import Data from "../data/StaticContent/faqs.json";
import BackToTop from "../components/ui/BacktoTop";
function Contact() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      const notification = document.getElementById("copyNotification");
      notification.classList.add("show");
      setTimeout(() => {
        notification.classList.remove("show");
      }, 2000);
    });
  };
  const handleClip = () => {
    copyToClipboard("info@yourbrand.com");
  };
  const Hero = () => {
    return (
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
            Get in Touch With Us
          </h1>
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
            Have questions or need assistance? We're here to help! Reach out to
            our dedicated team using the contact information below or send us a
            message directly.
          </p>
          <a
            href="#contact-form"
            className="btn btn-primary"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <i className="fas fa-envelope me-2"></i> Contact Us Now
          </a>
        </div>
      </section>
    );
  };
  const Contactinfo = () => {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="contact-card clickable" onClick={handleClip}>
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3>Our Location</h3>
                <p>
                  123 Business Avenue, Suite 200
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="contact-card clickable" onClick={handleClip}>
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <h3>Phone Number</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="contact-card clickable" onClick={handleClip}>
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>Email Address</h3>
                <p>info@yourbrand.com</p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>Business Hours</h3>
                <p>
                  Mon-Fri: 9AM - 5PM
                  <br />
                  Sat: 10AM - 2PM
                  <br />
                  Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Contactform = () => {
    const validateForm = (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      const submitBtn = form.querySelector("button[type='submit']");
      const submitText = submitBtn.querySelector(".submit-text");
      const spinner = submitBtn.querySelector(".spinner-border");
      const successMsg = document.getElementById("success-message");
      const errorMsg = document.getElementById("error-message");

      // Validate form
      let isValid = true;
      form.querySelectorAll("[required]").forEach((field) => {
        if (!field.value) {
          field.classList.add("is-invalid");
          isValid = false;
        } else {
          field.classList.remove("is-invalid");
        }
        if (
          field.type === "email" &&
          field.value &&
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)
        ) {
          field.classList.add("is-invalid");
          field.nextElementSibling.textContent =
            "Please enter a valid email address.";
          isValid = false;
        }
      });

      if (!isValid) {
        form.classList.add("shake");
        setTimeout(() => {
          form.classList.remove("shake");
        }, 400);
        return;
      }

      // Show loading state
      submitText.textContent = "Sending...";
      spinner.classList.remove("d-none");
      submitBtn.disabled = true;

      // Simulate form submission
      setTimeout(() => {
        // Hide loading state
        submitText.textContent = "Send Message";
        spinner.classList.add("d-none");
        submitBtn.disabled = false;

        // Show success message
        successMsg.classList.remove("d-none");
        errorMsg.classList.add("d-none");
        form.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          successMsg.classList.add("d-none");
        }, 5000);
      }, 1500);
    };
    return (
      <section className="py-5 bg-light" id="contact-form">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-7 mb-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="form-section">
                <h2 className="section-title">Send Us a Message</h2>

                <div
                  className="alert alert-success d-none"
                  id="success-message"
                >
                  <i className="fas fa-check-circle alert-icon"></i> Your
                  message has been sent successfully! We'll get back to you
                  soon.
                </div>

                <div className="alert alert-danger d-none" id="error-message">
                  <i className="fas fa-exclamation-circle alert-icon"></i> There
                  was an error sending your message. Please try again.
                </div>

                <form
                  id="contactForm"
                  noValidate
                  onSubmit={validateForm}
                  // onInput={realtimeValidate}
                >
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                    <label htmlFor="name">Your Name</label>
                    <div className="invalid-feedback">
                      Please provide your name.
                    </div>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                    <label htmlFor="email">Your Email</label>
                    <div className="invalid-feedback">
                      Please provide a valid email address.
                    </div>
                  </div>
                  <div className="form-floating">
                    <select className="form-select" id="subject" required>
                      <option value={""} selected disabled>
                        Select a subject
                      </option>
                      <option value={"General Inquiry"}>General Inquiry</option>
                      <option value={"Support"}>Support</option>
                      <option value={"Feedback"}>Feedback</option>
                      <option value={"Partnership"}>Partnership</option>
                    </select>
                    <label htmlFor="subject">Subject</label>
                    <div className="invalid-feedback">
                      Please select a subject.
                    </div>
                  </div>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Your Message"
                      required
                    ></textarea>
                    <label htmlFor="message">Your Message</label>
                    <div className="invalid-feedback">
                      Please enter your message.
                    </div>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="consent"
                      required
                    />
                    <label className="form-check-label" htmlFor="consent">
                      I agree to the{" "}
                      <a href="#" className="text-primary">
                        privacy policy
                      </a>{" "}
                      and terms of service
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    <span className="submit-text">Send Message</span>
                    <span
                      className="spinner-border spinner-border-sm d-none"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  </button>
                </form>
              </div>
            </div>

            {/* <!-- Team Section --> */}
            <div className="col-lg-5" data-aos="fade-left" data-aos-delay="200">
              <div className="team-card">
                <div className="team-img-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Harsh Mishra - Support Manager"
                    className="team-img"
                  />
                </div>
                <h4>Harsh Mishra</h4>
                <p>Support Manager</p>
                <p className="small text-muted">
                  Average response time: 2 hours
                </p>
                <a
                  href="mailto:harsh@example.com"
                  className="btn btn-outline-primary"
                >
                  Email Harsh
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const FAQS = () => {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <FAQ faqs={Data.support} />
            </div>
          </div>
        </div>
      </section>
    );
  };
  const MapLocation = () => {
    return (
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12" data-aos="fade-up">
              <h2 className="section-title text-center mb-4">
                Find Us on the Map
              </h2>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.21557488971!2d-73.9878449240963!3d40.74844097138966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1690833879811!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="map-card">
                  <h4>Our Headquarters</h4>
                  <div className="map-card-item">
                    <i className="fas fa-map-marker-alt map-card-icon"></i>
                    <span>123 Business Avenue, NY 10001</span>
                  </div>
                  <div className="map-card-item">
                    <i className="fas fa-phone-alt map-card-icon"></i>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="map-card-item">
                    <i className="fas fa-envelope map-card-icon"></i>
                    <span>info@yourbrand.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  {
    useEffect(() => {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
      });
    }, []);
    document.querySelectorAll(".contact-card.clickable").forEach((card) => {
      card.addEventListener("click", function () {
        this.classList.add("pulse");
        setTimeout(() => {
          this.classList.remove("pulse");
        }, 500);
      });
    });
  }
  return (
    <>
      <BackToTop />
      <Hero />
      <Contactinfo />
      <Contactform />
      <FAQS />
      <MapLocation />
    </>
  );
}

export default React.memo(Contact);
