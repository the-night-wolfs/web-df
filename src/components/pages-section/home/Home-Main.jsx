// import React, { useEffect, useState } from 'react'
import VolunteersSection from './sections/Volunteers'
import OurProgramsSection from './sections/OurPrograms';
import EventsSection from './sections/UpcomingEvents';
import OurWorkSection from './sections/OurWork';
import OurStorySection from './sections/OurStory';
// import homeData from '../../jsons/home-main.json';

const homeData= {
    "events": [
        {
            "date": "June 15, 2023",
            "title": "Community Charity Run",
            "description": "Join us for our annual 5K charity run through downtown. All proceeds will benefit local schools and education initiatives.",
            "details": [
                "7:00 AM - 11:00 AM",
                "Central Park, Main Street",
                "500+ Participants Expected"
            ],
            "buttonText": "Register Now"
        },
        {
            "date": "July 8-10, 2023",
            "title": "Summer Food Drive",
            "description": "Our three-day food collection event to support local food banks during the summer months when donations are typically low.",
            "details": [
                "9:00 AM - 5:00 PM Daily",
                "City Community Center",
                "Most Needed: Canned Goods & Dry Pasta"
            ],
            "buttonText": "Volunteer Signup"
        },
        {
            "date": "August 22, 2023",
            "title": "Youth Education Workshop",
            "description": "A full-day workshop for underprivileged youth featuring STEM activities, career guidance, and mentorship opportunities.",
            "details": [
                "10:00 AM - 4:00 PM",
                "University Tech Building",
                "For Students Ages 12-18"
            ],
            "buttonText": "Apply Now"
        }
    ],
    "volunteers": [
        {
            "name": "Sarah Johnson",
            "role": "Community Coordinator",
            "bio": "Passionate about education and youth development programs.",
            "social": [
                "twitter",
                "linkedin",
                "instagram"
            ],
            "image": "https://randomuser.me/api/portraits/women/43.jpg"
        },
        {
            "name": "Michael Chen",
            "role": "Event Organizer",
            "bio": "Specializes in fundraising and community engagement events.",
            "social": [
                "twitter",
                "linkedin"
            ],
            "image": "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            "name": "Priya Patel",
            "role": "Outreach Specialist",
            "bio": "Connects with local businesses for partnerships and sponsorships.",
            "social": [
                "facebook",
                "instagram"
            ],
            "image": "https://randomuser.me/api/portraits/women/65.jpg"
        },
        {
            "name": "David Wilson",
            "role": "Volunteer Trainer",
            "bio": "Develops training programs for new volunteers and team leaders.",
            "social": [
                "linkedin",
                "twitter"
            ],
            "image": "https://randomuser.me/api/portraits/men/75.jpg"
        },
        {
            "name": "Emma Rodriguez",
            "role": "Social Media Manager",
            "bio": "Shares our stories and impacts through digital platforms.",
            "social": [
                "instagram",
                "tiktok"
            ],
            "image": "https://randomuser.me/api/portraits/women/33.jpg"
        }
    ],
    "ourprograms": [
        {
            "title": "What We've Done",
            "image": {
                "src": "assets/images/premium_photo-1682125773446-259ce64f9dd7.avif",
                "alt": "Descriptive Alt Text"
            },
            "paragraphs": [
                "Integrating visuals with corresponding text enhances user engagement and comprehension. Proper alignment and placement of images alongside text create a cohesive and aesthetically pleasing layout.",
                "Consistent margins and thoughtful use of white space contribute to a clean design, guiding readers through the content seamlessly."
            ],
            "button": {
                "text": "Learn More",
                "link": "#",
                "showButton": true
            }
        },
        {
            "title": "Our Achievements",
            "image": {
                "src": "assets/images/premium_photo-1682125773446-259ce64f9dd7.avif",
                "alt": "Descriptive Alt Text"
            },
            "paragraphs": [
                "Visual storytelling combined with compelling text creates memorable experiences. Strategic image placement enhances message retention and user engagement.",
                "Careful attention to spacing and layout ensures content flows naturally, improving readability and user satisfaction."
            ],
            "button": {
                "text": "View Details",
                "link": "#",
                "showButton": true
            }
        },
        {
            "title": "Recent Projects",
            "image": {
                "src": "assets/images/premium_photo-1682125773446-259ce64f9dd7.avif",
                "alt": "Descriptive Alt Text"
            },
            "paragraphs": [
                "Combining powerful imagery with well-crafted text delivers impactful messages. Balanced compositions create professional, trustworthy presentations.",
                "White space and consistent margins establish visual hierarchy, making content more accessible and easier to navigate."
            ],
            "button": {
                "text": "See Projects",
                "link": "#",
                "showButton": false
            }
        }
    ]
}
const data = {
    image: 'assets/images/premium_photo-1682125773446-259ce64f9dd7.avif',
    heading: 'Our Impact/About Us',
    paraq: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, dicta! Praesentium ad sit placeat! Voluptatum expedita architecto consequuntur iste doloribusparaq",
    paraw: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, dicta! Praesentium ad sit placeat! Voluptatum expedita architecto consequuntur iste doloribusparaq",
    btn: true,
    btncont: 'Click Me'
}
const Main = () => {

    const StudentHelpSection = () => {
        return (
            <section className="or-srv-sec bg-white py-4 py-md-5">
                <div className="or-srv-box container px-3 px-md-0">
                    <div className="or-srv-text text-center pb-4 pb-md-5 px-md-5 mx-auto" style={{ maxWidth: "800px" }}>
                        <h5 className="fs-3 fw-semibold mb-3 text-primary">We Help Students in This Way</h5>
                        <p className="fs-6 text-muted mb-0">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet soluta deleniti
                            tenetur dicta totam, illum, sapiente debitis quas necessitatibus consequuntur
                            architecto.
                        </p>
                    </div>

                    <div className="or-srv-card-box row g-3 g-md-4 justify-content-center">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className={`modern-card or-srv col-12 col-sm-6 col-lg-3 or-srv-c${['q', 'w', 'e', 'r'][item - 1]}`}>
                                <div className="icon-wrapper or-srv-ic">
                                    <img src="assets/images/solidarity_colored.png" alt="Volunteer" className="or-srv-ic-i" />
                                </div>
                                <div className="card-text or-srv-card-text">
                                    <h5>Become a Volunteer</h5>
                                    <p>
                                        We help companies develop powerful corporate social responsibility
                                        strategies that make a real impact.
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
                                <img src="assets/images/children-in-a-computer-lab.webp"
                                    alt="Children learning in a computer lab" className="img-fluid w-100 h-auto"
                                    loading="lazy" width="600" height="400" />
                                <figcaption className="small text-muted mt-2 px-2">Empowering underprivileged children through education</figcaption>
                            </figure>
                        </div>

                        <div className="col-lg-6 order-lg-2 order-1">
                            <div className="pe-lg-4">
                                <h2 className="display-6 display-md-5 fw-bold text-primary mb-3 mb-md-4">
                                    <span className="d-inline-block pb-2 border-bottom border-3 border-warning highlight-text">Let your birthday</span>
                                    be the beginning of a better life for thousands!
                                </h2>

                                <p className="lead mb-3 mb-md-4 fade-in-text">
                                    Celebrate your special day by creating lasting change. Your fundraiser can provide
                                    education, meals, and hope to children in need.
                                </p>

                                <div className="d-flex flex-column flex-sm-row flex-wrap gap-3">
                                    <a href="#donate"
                                        className="btn btn-warning btn-lg fw-bold px-4 py-2 py-md-3 shadow-sm bounce-hover">
                                        <i className="bi bi-gift-fill me-2"></i> START FUNDRAISER NOW
                                    </a>
                                    <a href="#learn-more"
                                        className="btn btn-outline-primary btn-lg px-4 py-2 py-md-3 slide-hover">
                                        Learn How It Works <i className="bi bi-arrow-right ms-2"></i>
                                    </a>
                                </div>

                                <div className="mt-3 mt-md-4 d-flex align-items-center fade-in">
                                    <img src="assets/images/shield-check.svg" alt="Verified" width="24" height="24"
                                        className="me-2 pulse" />
                                    <small className="text-muted">100% of donations go directly to the cause</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    // getContent()
    return (
        <section className="main-sec conatiner-fluid">
            <main className="main">
                {/* Our Work Section */}
                <OurWorkSection props={data} />

                {/* How We Help Students */}
                <StudentHelpSection />

                {/* Our Story */}
                <OurStorySection props={data} />

                {/* Our Programs */}
                <OurProgramsSection programs={homeData.ourprograms} />

                {/* Our Volunteers */}
                <VolunteersSection volunteers={homeData.volunteers} />

                {/* Donation */}
                <DonationSection />

                {/* Upcoming Events */}
                <EventsSection events={homeData.events} />
            </main>
        </section>

    )

}

export default Main