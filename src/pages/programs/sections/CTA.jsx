import React from 'react'

const CTA = () => {
    const btnStyle = {
        padding: "12px 30px",
        borderRadius: "30px",
        fontWeight: 600,
        transition: "all 0.3s ease",
        fontSize: "var(--text-base)",
    };

    return (
        <div className="cta-section text-center" data-aos="fade-up">
            <div className="container">
                <h2>Ready to Make a Difference?</h2>
                <p>Join us in our mission to create a more equitable and sustainable world</p>
                <div className="cta-buttons">
                    <button className="btn btn-primary" style={btnStyle}>Donate Now</button>
                    <button className="btn btn-outline" style={btnStyle}>Volunteer</button>
                </div>
            </div>
        </div>
    )
}

export default CTA