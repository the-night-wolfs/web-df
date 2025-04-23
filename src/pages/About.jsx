import React, { useEffect } from "react";
import Team_identity from "../components/ui/Team_identity";
const ourmission = [
  {
    heading: "Education for All",
    description:
      "We believe education is a fundamental right. Our programs provide learning opportunities and resources to underserved communities, helping children build a brighter future.",
    icon: "fa-book-open",
    btnCont: "Learn More",
    btnLink: "#",
  },
  {
    heading: "Health Care",
    description:
      "Our healthcare initiatives include medical camps, health awareness drives, and emergency assistance programs to ensure everyone has access to basic healthcare",
    icon: "fa-heartbeat",
    btnCont: "Learn More",
    btnLink: "#",
  },
  {
    heading: "Green Earth",
    description:
      "Through tree plantation drives, clean water campaigns, and climate education, we work to protect the environment for future generations.",
    icon: "fa-leaf",
    btnCont: "Learn More",
    btnLink: "#",
  },
];

const ourvalues = [
  {
    heading: "Integrity",
    description:
      "We uphold the highest ethical standards in all our actions and decisions.",
    icon: "fa-handshake",
  },
  {
    heading: "Compassion",
    description:
      "Every initiative stems from genuine care for people and the planet.",
    icon: "fa-heart",
  },
  {
    heading: "Inclusivity",
    description:
      "We embrace diversity and ensure our programs reach all communities.",
    icon: "fa-users",
  },
  {
    heading: "Sustainability",
    description:
      "Creating long-term solutions that empower communities to thrive.",
    icon: "fa-seedling",
  },
];
const ourimpact = [
  {
    work: "Student Educated",
    targetNumber: "5000",
    icon: "fa-user-graduate",
  },
  {
    work: "Healthcare Beneficiaries",
    targetNumber: "8750",
    icon: "fa-heartbeat",
  },
  {
    work: "Trees Planted",
    targetNumber: "15000",
    icon: "fa-tree",
  },
  {
    work: "Communities Served",
    targetNumber: "120",
    icon: "fa-home",
  },
];
const ourjourney = [
  {
    year: "2012",
    title: "The Beginning",
    description:
      "Founded as a small initiative to provide educational support to 50 children in a local village.",
  },
  {
    year: "2015",
    title: "Expanding Horizons",
    description:
      "Expanded to 10 villages and added healthcare initiatives to our portfolio.",
  },
  {
    year: "2018",
    title: "Registered NGO",
    description:
      "Officially registered as a non-profit organization with a dedicated team of 25 members.",
  },
  {
    year: "2020",
    title: "Going National",
    description:
      "Expanded our operations to 5 states with over 100 volunteers.",
  },
  {
    year: "2024",
    title: "Today",
    description:
      "Operating in 12 states with over 50 programs and impacting more than 100,000 lives annually.",
  },
];

const faqs = [
  {
    question: "How can I volunteer with Dugra Foundation?",
    answer:
      "You can volunteer with us by filling out the volunteer form on our website. We have various volunteering opportunities ranging from short-term to long-term commitments, both in-person and remote options are available.",
  },
  {
    question: "How are donations utilized by the foundation?",
    answer:
      "We ensure that at least 85% of all donations go directly to our programs. The remaining 15% is used for administrative costs, fundraising efforts, and maintaining our operations. We publish detailed financial reports annually for complete transparency.",
  },
  {
    question: "Can I specify which program I want my donation to support?",
    answer:
      "Yes, absolutely! When making a donation, you can specify which program you would like to support. If you don't specify, your donation will be allocated to where it's needed most.",
  },
  {
    question: "Does the foundation provide tax receipts for donations?",
    answer:
      "Yes, we provide tax receipts for all donations. Donations to Dugra Foundation are tax-deductible as allowed by law. You will receive a receipt via email shortly after your donation is processed.",
  },
];
const volunteers = [
  {
    name: "Sarah Johnson",
    role: "Community Coordinator",
    bio: "Passionate about education and youth development programs.",
    social: ["twitter", "linkedin", "instagram"],
    image: "https://randomuser.me/api/portraits/women/43.jpg",
  },
  {
    name: "Michael Chen",
    role: "Event Organizer",
    bio: "Specializes in fundraising and community engagement events.",
    social: ["twitter", "linkedin"],
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Patel",
    role: "Outreach Specialist",
    bio: "Connects with local businesses for partnerships and sponsorships.",
    social: ["facebook", "instagram"],
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "David Wilson",
    role: "Volunteer Trainer",
    bio: "Develops training programs for new volunteers and team leaders.",
    social: ["linkedin", "twitter"],
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Emma Rodriguez",
    role: "Social Media Manager",
    bio: "Shares our stories and impacts through digital platforms.",
    social: ["instagram", "tiktok"],
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];
const About = () => {
  const Hero = () => {
    return (
      <section className="hero-section">
        <div className="container hero-content" data-aos="fade-up">
          <h1 className="hero-title">About Dugra Foundation</h1>
          <p className="hero-subtitle">
            Empowering communities through sustainable development and
            compassionate action
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="#mission" className="btn btn-primary-custom">
              <i className="fas fa-arrow-down me-2"></i>Learn More
            </a>
            <a href="#" className="btn btn-outline-custom">
              <i className="fas fa-hand-holding-heart me-2"></i>Donate Now
            </a>
          </div>
        </div>
      </section>
    );
  };

  const OurMission = () => {
    return (
      <section id="mission" className="section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Our Mission</h2>
            <p className="lead">
              Committed to creating lasting change through our core initiatives
            </p>
          </div>
          <div className="row g-4">
            {ourmission.map((elem, index) => {
              return (
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  key={index}
                >
                  <div className="mission-card">
                    <div className="mission-icon">
                      <i className={"fas " + elem.icon}></i>
                    </div>
                    <h3 className="h4 text-center mb-3">{elem.heading}</h3>
                    <p className="text-muted text-center">
                      {" "}
                      {elem.description}{" "}
                    </p>
                    <div className="text-center mt-3">
                      <a
                        href={elem.btnLink}
                        className="btn btn-outline-custom btn-sm"
                      >
                        {elem.btnCont}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  const OurValues = () => {
    return (
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Our Core Values</h2>
            <p className="lead">
              The principles that guide our work and shape our impact
            </p>
          </div>

          <div className="row g-4">
            {ourvalues.map((elem, index) => {
              return (
                <div
                  className="col-md-3"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  key={index}
                >
                  <div className="value-card">
                    <div className="value-icon">
                      <i className={"fas " + elem.icon}></i>
                    </div>
                    <h3 className="h5 fw-bold">{elem.heading}</h3>
                    <p className="text-muted">{elem.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  const OurImpact = () => {
    return (
      <section className="section stats-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title text-white">Our Impact</h2>
            <p className="lead text-white-50">
              Numbers that tell our story of progress and change
            </p>
          </div>

          <div className="row g-4">
            {ourimpact.map((elem, index) => {
              return (
                <div
                  className="col-md-3"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  key={index}
                >
                  <div className="stats-card">
                    <div className="stats-icon">
                      <i className={"fas " + elem.icon}></i>
                    </div>
                    <div
                      className="stats-number counter"
                      data-target={elem.targetNumber}
                    >
                      0
                    </div>
                    <p className="stats-label">{elem.work}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  const OurTeam = () => {
    return (
      <section className="section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="lead">
              Dedicated individuals working tirelessly for positive change
            </p>
          </div>

          <div className="row g-4">
            {volunteers.map((elem, index) => {
              return (
                <div
                  className="col-md-3 m-6"
                  data-aos="fade-up"
                  data-aos-delay={index*100}
                  key={index}
                >
                  <Team_identity key={index} details={elem} />
                </div>
              );
            })}
          </div>

          <div className="text-center mt-5" data-aos="fade-up">
            <a href="#" className="btn btn-primary-custom">
              <i className="fas fa-users me-2"></i>Meet Full Team
            </a>
          </div>
        </div>
      </section>
    );
  };
  const OurJourney = () => {
    return (
      <section className="py-5 py-md-7 bg-light section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-7 text-center">
              <h2 className="fw-bold mb-3" data-aos="fade-up">
                Our Journey
              </h2>
              <p className="text-muted" data-aos="fade-up" data-aos-delay="100">
                From humble beginnings to where we are today, our journey has
                been one of perseverance and dedication.
              </p>
            </div>
          </div>

          <div className="timeline">
            {ourjourney.map((elem, index) => {
              return (
                <div
                  className={`timeline-item${
                    index % 2 == 0 ? " right" : " left"
                  }`}
                  data-aos={index % 2 == 0 ? "fade-left" : "fade-right"}
                  key={index}
                >
                  <div className="timeline-content">
                    <span className="timeline-year">{elem.year}</span>
                    <h5 className="fw-bold mt-2">{elem.title}</h5>
                    <p className="text-muted">{elem.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  const ContactUs = () => {
    return (
      <section className="py-5 py-md-7 section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
              <h2 className="fw-bold section-title">Get in Touch</h2>
              <p className="text-muted mb-4">
                Have questions or want to collaborate? Reach out to us.
              </p>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Our Location</h5>
                  <p className="text-muted">
                    123 NGO Street, New Delhi, 110001, India
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Email Us</h5>
                  <p className="text-muted">info@dugrafoundation.org</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Call Us</h5>
                  <p className="text-muted">+91 98765 43210</p>
                </div>
              </div>

              <div className="mt-4">
                <h5 className="fw-bold mb-3">Follow Us</h5>
                <div className="social-links">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              <div className="card border-0 shadow-lg rounded-4">
                <div className="card-body p-4 p-md-5">
                  <h4 className="fw-bold mb-4">Send us a message</h4>
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="nameInput"
                            placeholder="Your Name"
                          />
                          <label htmlFor="nameInput">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="emailInput"
                            placeholder="Your Email"
                          />
                          <label htmlFor="emailInput">Your Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="subjectInput"
                            placeholder="Subject"
                          />
                          <label htmlFor="subjectInput">Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <textarea
                            className="form-control"
                            id="messageInput"
                            placeholder="Your Message"
                            style={{ height: "150px" }}
                          ></textarea>
                          <label htmlFor="messageInput">Your Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary rounded-pill px-4 py-3 w-100"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Faqs = () => {
    return (
      <section className="py-5 py-md-7 bg-light section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-7 text-center">
              <h2 className="fw-bold mb-3" data-aos="fade-up">
                Frequently Asked Questions
              </h2>
              <p className="text-muted" data-aos="fade-up" data-aos-delay="100">
                Find answers to common questions about our work and how you can
                get involved.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                {faqs.map((elem, index) => (
                  <div
                    className="accordion-item border-0 shadow-sm rounded mb-3"
                    data-aos="fade-up"
                    key={index}
                  >
                    <h3 className="accordion-header" id={`heading${index}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse${index}`}
                      >
                        {elem.question}
                      </button>
                    </h3>
                    <div
                      id={`collapse${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">{elem.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Cta = () => {
    return (
      <section className="cta-section text-white text-center section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8" data-aos="zoom-in">
              <h2 className="display-5 fw-bold mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="lead mb-5">
                Join us in our mission to create a better world for all. Every
                contribution, big or small, helps us make a difference.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="#" className="btn btn-light cta-btn">
                  Donate Now
                </a>
                <a href="#" className="btn btn-outline-light cta-btn">
                  Become a Volunteer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Footer = () => {
    return (
      <>
        <footer className="footer">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="footer-logo">Dugra Foundation</div>
                <p className="text-white-50">
                  Empowering communities through sustainable development and
                  compassionate action since 2015.
                </p>
              </div>

              <div className="col-lg-2 col-md-4">
                <div className="footer-links">
                  <h5>Quick Links</h5>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Programs</a>
                    </li>
                    <li>
                      <a href="#">Get Involved</a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-md-4">
                <div className="footer-links">
                  <h5>Programs</h5>
                  <ul>
                    <li>
                      <a href="#">Education</a>
                    </li>
                    <li>
                      <a href="#">Healthcare</a>
                    </li>
                    <li>
                      <a href="#">Environment</a>
                    </li>
                    <li>
                      <a href="#">Women Empowerment</a>
                    </li>
                    <li>
                      <a href="#">Disaster Relief</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-4">
                <div className="footer-links">
                  <h5>Newsletter</h5>
                  <p className="text-white-50">
                    Subscribe to our newsletter to receive updates on our work.
                  </p>
                  <form className="mt-3">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                      <button className="btn btn-primary" type="submit">
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="copyright">
              <p className="mb-0">
                &copy; 2025 Dugra Foundation. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
        <a href="#" className="back-to-top">
          <i className="fas fa-arrow-up"></i>
        </a>
      </>
    );
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/customScript.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Hero />
      <OurMission />
      <OurValues />
      <OurImpact />
      <OurTeam />
      <OurJourney />
      <ContactUs />
      <Faqs />
      <Cta />
      <Footer />
    </>
  );
};

export default About;
