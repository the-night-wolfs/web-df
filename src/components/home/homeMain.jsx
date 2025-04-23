import React, { useRef, useEffect, useState } from "react";
import TextMedia from '../ui/TextMedia'
import Team_identity from '../ui/Team_identity'
const homeData = {
  events: [
    {
      date: "June 15, 2023",
      title: "Community Charity Run",
      description:
        "Join us for our annual 5K charity run through downtown. All proceeds will benefit local schools and education initiatives.",
      details: [
        "7:00 AM - 11:00 AM",
        "Central Park, Main Street",
        "500+ Participants Expected",
      ],
      buttonText: "Register Now",
    },
    {
      date: "July 8-10, 2023",
      title: "Summer Food Drive",
      description:
        "Our three-day food collection event to support local food banks during the summer months when donations are typically low.",
      details: [
        "9:00 AM - 5:00 PM Daily",
        "City Community Center",
        "Most Needed: Canned Goods & Dry Pasta",
      ],
      buttonText: "Volunteer Signup",
    },
    {
      date: "August 22, 2023",
      title: "Youth Education Workshop",
      description:
        "A full-day workshop for underprivileged youth featuring STEM activities, career guidance, and mentorship opportunities.",
      details: [
        "10:00 AM - 4:00 PM",
        "University Tech Building",
        "For Students Ages 12-18",
      ],
      buttonText: "Apply Now",
    },
  ],
  volunteers: [
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
  ],
  ourprograms: [
    {
      title: "What We've Done",
      image: {
        src: "assets/images/premium_photo-1682125773446-259ce64f9dd7.avif",
        alt: "Descriptive Alt Text",
      },
      paragraphs: [
        "Integrating visuals with corresponding text enhances user engagement and comprehension. Proper alignment and placement of images alongside text create a cohesive and aesthetically pleasing layout.",
        "Consistent margins and thoughtful use of white space contribute to a clean design, guiding readers through the content seamlessly.",
      ],
      button: {
        text: "Learn More",
        link: "#",
        showButton: true,
      },
    },
    {
      title: "Our Achievements",
      image: {
        src: "assets/images/premium_photo-1682125773446-259ce64f9dd7.avif",
        alt: "Descriptive Alt Text",
      },
      paragraphs: [
        "Visual storytelling combined with compelling text creates memorable experiences. Strategic image placement enhances message retention and user engagement.",
        "Careful attention to spacing and layout ensures content flows naturally, improving readability and user satisfaction.",
      ],
      button: {
        text: "View Details",
        link: "#",
        showButton: true,
      },
    },
    {
      title: "Recent Projects",
      image: {
        src: "assets/images/premium_photo-1682125773446-259ce64f9dd7.avif",
        alt: "Descriptive Alt Text",
      },
      paragraphs: [
        "Combining powerful imagery with well-crafted text delivers impactful messages. Balanced compositions create professional, trustworthy presentations.",
        "White space and consistent margins establish visual hierarchy, making content more accessible and easier to navigate.",
      ],
      button: {
        text: "See Projects",
        link: "#",
        showButton: false,
      },
    },
  ],
};
const data = {
  image: "assets/images/premium_photo-1682125773446-259ce64f9dd7.avif",
  heading: "Our Impact/About Us",
  paraq:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, dicta! Praesentium ad sit placeat! Voluptatum expedita architecto consequuntur iste doloribusparaq",
  paraw:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, dicta! Praesentium ad sit placeat! Voluptatum expedita architecto consequuntur iste doloribusparaq",
  btn: true,
  btncont: "Click Me",
};
const Main = () => {
  const OurProgramsSection = ({ programs }) => {
    return (
      <section className="or-prgms-sec py-5 bg-white">
        <div className="or-prgms-box">
          <div
            id="or-prgms-c"
            className="carousel carousel-dark slide u-event-c-box"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#or-prgms-c"
                data-bs-slide-to="0"
                className="rounded-circle active"
                aria-label="Slide 1"
                aria-current="true"
              ></button>
              <button
                type="button"
                data-bs-target="#or-prgms-c"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className="rounded-circle"
              ></button>
              <button
                type="button"
                data-bs-target="#or-prgms-c"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                className="rounded-circle"
              ></button>
            </div>

            <div className="carousel-inner">
              {programs?.map((item, index) => {
                return (
                  <div
                    className={`carousel-item${index === 0 ? " active" : ""}`}
                    data-bs-interval="10000"
                    key={index}
                  >
                    <div className="container content-section py-4">
                      <div className="row align-items-center g-4 g-lg-5">
                        <div className="col-md-5 image-container">
                          <img
                            src={item.image.src}
                            alt={item.image.alt}
                            className="img-fluid rounded-3 shadow-sm"
                            loading="lazy"
                          />
                        </div>
                        <div className="col-md-7 text-container ps-md-4">
                          <h2 className="display-5 fw-bold mb-4">
                            {item.title}
                          </h2>

                          <p className="lead mb-3">{item.paragraphs[0]}</p>
                          <p className="mb-0">{item.paragraphs[1]}</p>

                          {item.button.showButton && (
                            <a
                              href={item.button.link}
                              className="btn btn-primary mt-4 px-4 py-2"
                            >
                              {item.button.text}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#or-prgms-c"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#or-prgms-c"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    );
  };
  const OurStorySection = ({ props }) => {
    return (
      <section className="or-wrk-wy-sec bg-light">
        <div className="or-wrk-wy-box container-fluid">
          <TextMedia props={props} />
        </div>
      </section>
    );
  };
  const StudentHelpSection = () => {
    return (
      <section className="or-srv-sec bg-white py-4 py-md-5">
        <div className="or-srv-box container px-3 px-md-0">
          <div
            className="or-srv-text text-center pb-4 pb-md-5 px-md-5 mx-auto"
            style={{ maxWidth: "800px" }}
          >
            <h5 className="fs-3 fw-semibold mb-3 text-primary">
              We Help Students in This Way
            </h5>
            <p className="fs-6 text-muted mb-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
              soluta deleniti tenetur dicta totam, illum, sapiente debitis quas
              necessitatibus consequuntur architecto.
            </p>
          </div>

          <div className="or-srv-card-box row g-3 g-md-4 justify-content-center">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className={`modern-card or-srv col-12 col-sm-6 col-lg-3 or-srv-c${
                  ["q", "w", "e", "r"][item - 1]
                }`}
              >
                <div className="icon-wrapper or-srv-ic">
                  <img
                    src="assets/images/solidarity_colored.png"
                    alt="Volunteer"
                    className="or-srv-ic-i"
                  />
                </div>
                <div className="card-text or-srv-card-text">
                  <h5>Become a Volunteer</h5>
                  <p>
                    We help companies develop powerful corporate social
                    responsibility strategies that make a real impact.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  const DonationSection = () => {
    return (
      <section className="donation-cta bg-white py-4 py-md-5">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5 bg-white p-3 p-md-4 p-lg-5 rounded-3 shadow-sm hover-shadow transition-all">
            <div className="col-lg-6 order-lg-1 order-2">
              <figure className="m-0 overflow-hidden rounded-3 border border-3 border-primary transition-all hover-scale">
                <img
                  src="assets/images/children-in-a-computer-lab.webp"
                  alt="Children learning in a computer lab"
                  className="img-fluid w-100 h-auto"
                  loading="lazy"
                  width="600"
                  height="400"
                />
                <figcaption className="small text-muted mt-2 px-2">
                  Empowering underprivileged children through education
                </figcaption>
              </figure>
            </div>

            <div className="col-lg-6 order-lg-2 order-1">
              <div className="pe-lg-4">
                <h2 className="display-6 display-md-5 fw-bold text-primary mb-3 mb-md-4">
                  <span className="d-inline-block pb-2 border-bottom border-3 border-warning highlight-text">
                    Let your birthday
                  </span>
                  be the beginning of a better life for thousands!
                </h2>

                <p className="lead mb-3 mb-md-4 fade-in-text">
                  Celebrate your special day by creating lasting change. Your
                  fundraiser can provide education, meals, and hope to children
                  in need.
                </p>

                <div className="d-flex flex-column flex-sm-row flex-wrap gap-3">
                  <a
                    href="#donate"
                    className="btn btn-warning btn-lg fw-bold px-4 py-2 py-md-3 shadow-sm bounce-hover"
                  >
                    <i className="bi bi-gift-fill me-2"></i> START FUNDRAISER
                    NOW
                  </a>
                  <a
                    href="#learn-more"
                    className="btn btn-outline-primary btn-lg px-4 py-2 py-md-3 slide-hover"
                  >
                    Learn How It Works{" "}
                    <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                </div>

                <div className="mt-3 mt-md-4 d-flex align-items-center fade-in">
                  <img
                    src="assets/images/shield-check.svg"
                    alt="Verified"
                    width="24"
                    height="24"
                    className="me-2 pulse"
                  />
                  <small className="text-muted">
                    100% of donations go directly to the cause
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const OurWorkSection = ({ props }) => {
    return (
      <section className="or-wrk-wy-sec bg-light">
        <div className="or-wrk-wy-box container-fluid">
          <TextMedia props={props} />
        </div>
      </section>
    );
  };
  const EventsSection = ({ events }) => {
    return (
      <section className="u-events-sec py-5 bg-light">
        <div className="u-events-box">
          <div
            id="upcoming-events-c"
            className="carousel carousel-dark slide u-event-c-box"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {events?.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#upcoming-events-c"
                  data-bs-slide-to={index}
                  className={
                    index === 0 ? "active rounded-circle" : "rounded-circle"
                  }
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="carousel-inner">
              {events?.map((event, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  data-bs-interval="10000"
                >
                  <div className="container content-section py-4">
                    <div className="row align-items-center g-4 g-lg-5">
                      <div className="col-md-5 image-container">
                        <img
                          src="assets/images/premium_photo-1682125773446-259ce64f9dd7.avif"
                          alt={event.title}
                          className="img-fluid rounded-3 shadow-sm"
                          loading="lazy"
                        />
                      </div>
                      <div className="col-md-7 text-container ps-md-4">
                        <div className="badge bg-primary mb-3">
                          {event.date}
                        </div>
                        <h2 className="display-6 fw-bold mb-3">
                          {event.title}
                        </h2>
                        <p className="mb-3">{event.description}</p>
                        <ul className="list-unstyled mb-4">
                          {event.details.map((detail, i) => (
                            <li key={i} className="mb-2">
                              <i
                                className={`bi ${
                                  i === 0
                                    ? "bi-clock"
                                    : i === 1
                                    ? "bi-geo-alt"
                                    : "bi-people"
                                } me-2`}
                              ></i>
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <a href="#" className="btn btn-outline-primary px-4">
                          {event.buttonText}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  const VolunteersSection = ({ volunteers }) => {
    const scrollBoxRef = useRef(null);
    const [showPrevBtn, setShowPrevBtn] = useState(false);
    const [showNextBtn, setShowNextBtn] = useState(true);

    const scrollAmount = () => {
      if (!scrollBoxRef.current || !scrollBoxRef.current.firstChild) return 320;
      const card = scrollBoxRef.current.firstChild;
      const cardStyle = window.getComputedStyle(card);
      const cardWidth = card.offsetWidth + parseInt(cardStyle.marginRight);
      return cardWidth * 2; // Scroll 2 cards at a time
    };

    const handleNext = () => {
      scrollBoxRef.current.scrollBy({
        left: scrollAmount(),
        behavior: "smooth",
      });
    };

    const handlePrev = () => {
      scrollBoxRef.current.scrollBy({
        left: -scrollAmount(),
        behavior: "smooth",
      });
    };

    const updateButtonVisibility = () => {
      if (!scrollBoxRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollBoxRef.current;
      setShowPrevBtn(scrollLeft > 0);
      setShowNextBtn(scrollLeft < scrollWidth - clientWidth);
    };

    useEffect(() => {
      const scrollBox = scrollBoxRef.current;
      if (!scrollBox) return;

      updateButtonVisibility();
      scrollBox.addEventListener("scroll", updateButtonVisibility);
      window.addEventListener("resize", updateButtonVisibility);

      return () => {
        scrollBox.removeEventListener("scroll", updateButtonVisibility);
        window.removeEventListener("resize", updateButtonVisibility);
      };
    }, []);

    return (
      <section className="our-volunteers-section bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <h2 className="display-5 fw-bold text-primary mb-3">
                Our Volunteers
              </h2>
              <p className="lead text-muted">
                Meet our dedicated team of volunteers who work tirelessly to
                make a difference in our community. Their passion and commitment
                drive our mission forward every day.
              </p>
            </div>
          </div>

          <div className="position-relative">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="btn btn-primary btn-nav position-absolute start-0 top-50 translate-middle-y z-3 rounded-circle"
              style={{ visibility: showPrevBtn ? "visible" : "hidden" }}
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              onClick={handleNext}
              className="btn btn-primary btn-nav position-absolute end-0 top-50 translate-middle-y z-3 rounded-circle"
              style={{ visibility: showNextBtn ? "visible" : "hidden" }}
            >
              <i className="bi bi-chevron-right"></i>
            </button>

            {/* Scrollable Volunteer Cards */}
            <div
              ref={scrollBoxRef}
              className="d-flex overflow-hidden gap-4 px-2 py-3 scroll-box"
              style={{ scrollBehavior: "smooth" }}
            >
              {volunteers.map((elem, index) => {
                return <Team_identity details={elem} key={index} />;
              })}
            </div>
          </div>

          <div className="text-center mt-5">
            <button className="btn btn-primary btn-lg px-4">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>
    );
  };
  return (
    <section className="main-sec conatiner-fluid">
      <main className="main">
        <OurWorkSection props={data} />
        <StudentHelpSection />
        <OurStorySection props={data} />
        <OurProgramsSection programs={homeData.ourprograms} />
        <VolunteersSection volunteers={homeData.volunteers} />
        <DonationSection />
        <EventsSection events={homeData.events} />
      </main>
    </section>
  );
};

export default Main;
