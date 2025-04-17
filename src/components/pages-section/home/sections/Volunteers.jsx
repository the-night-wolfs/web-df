import React, { useRef, useEffect, useState } from 'react';

const VolunteersSection = ({volunteers}) => {
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
            behavior: 'smooth'
        });
    };

    const handlePrev = () => {
        scrollBoxRef.current.scrollBy({
            left: -scrollAmount(),
            behavior: 'smooth'
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
        scrollBox.addEventListener('scroll', updateButtonVisibility);
        window.addEventListener('resize', updateButtonVisibility);

        return () => {
            scrollBox.removeEventListener('scroll', updateButtonVisibility);
            window.removeEventListener('resize', updateButtonVisibility);
        };
    }, []);

    return (
        <section className="our-volunteers-section bg-light py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center mb-5">
                        <h2 className="display-5 fw-bold text-primary mb-3">Our Volunteers</h2>
                        <p className="lead text-muted">
                            Meet our dedicated team of volunteers who work tirelessly to make a difference in
                            our community. Their passion and commitment drive our mission forward every day.
                        </p>
                    </div>
                </div>

                <div className="position-relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="btn btn-primary btn-nav position-absolute start-0 top-50 translate-middle-y z-3 rounded-circle"
                        style={{ visibility: showPrevBtn ? 'visible' : 'hidden' }}
                    >
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    <button
                        onClick={handleNext}
                        className="btn btn-primary btn-nav position-absolute end-0 top-50 translate-middle-y z-3 rounded-circle"
                        style={{ visibility: showNextBtn ? 'visible' : 'hidden' }}
                    >
                        <i className="bi bi-chevron-right"></i>
                    </button>

                    {/* Scrollable Volunteer Cards */}
                    <div
                        ref={scrollBoxRef}
                        className="d-flex overflow-hidden gap-4 px-2 py-3 scroll-box"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {volunteers?.map((volunteer, index) => (
                            <div key={index} className="volunteer-card flex-shrink-0">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="card-body text-center p-4">
                                        <div className="user-picture mx-auto mb-3">
                                            <img
                                                src={volunteer.image}
                                                alt={volunteer.name}
                                                className="img-fluid rounded-circle"
                                                width="100"
                                                height="100"
                                            />
                                        </div>
                                        <h5 className="fw-bold mb-1">{volunteer.name}</h5>
                                        <p className="text-muted small mb-3">{volunteer.role}</p>
                                        <p className="mb-3">{volunteer.bio}</p>
                                        <div className="social-links d-flex justify-content-center gap-2">
                                            {volunteer.social.map((platform, i) => (
                                                <a key={i} href="#" className="text-primary">
                                                    <i className={`bi bi-${platform}`}></i>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-5">
                    <button className="btn btn-primary btn-lg px-4">Become a Volunteer</button>
                </div>
            </div>
        </section>
    );
};

export default VolunteersSection;