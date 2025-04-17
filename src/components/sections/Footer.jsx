import React from 'react'

const Footer = () => {
    return (
        <>
            <section className="footer-sec">
                <footer className="bg-dark text-light pt-5 pb-4">
                    <div className="container text-md-left">
                        <div className="row text-md-left">
                            {/* Brand */}
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                                <h5 className="text-uppercase fw-bold">YourBrand</h5>
                                <p>
                                    Making the world a better place, one step at a time. Join us in our
                                    mission to help those in need.
                                </p>
                            </div>
                            {/* Quick Links */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className="text-light text-decoration-none">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-light text-decoration-none">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-light text-decoration-none">
                                            Events
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-light text-decoration-none">
                                            Donate
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* Contact */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
                                <p>
                                    <i className="bi bi-geo-alt-fill me-2" /> 123 Street Name, City
                                </p>
                                <p>
                                    <i className="bi bi-envelope-fill me-2" /> info@yourcharity.org
                                </p>
                                <p>
                                    <i className="bi bi-phone-fill me-2" /> +91 9876543210
                                </p>
                            </div>
                            {/* Newsletter */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-3">Newsletter</h6>
                                <form className="d-flex">
                                    <input
                                        type="email"
                                        className="form-control me-2"
                                        placeholder="Email address"
                                    />
                                    <button className="btn btn-primary">Subscribe</button>
                                </form>
                                {/* Social Media */}
                                <div className="mt-3">
                                    <a href="#" className="text-light me-3">
                                        <i className="bi bi-facebook" />
                                    </a>
                                    <a href="#" className="text-light me-3">
                                        <i className="bi bi-instagram" />
                                    </a>
                                    <a href="#" className="text-light me-3">
                                        <i className="bi bi-twitter" />
                                    </a>
                                    <a href="#" className="text-light">
                                        <i className="bi bi-youtube" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center pt-3 border-top mt-4">
                        <p className="mb-0">© 2025 YourBrand. All rights reserved.</p>
                    </div>
                </footer>
                {/* Bootstrap Icons CDN */}
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
                    rel="stylesheet"
                />
            </section>

        </>
    )
}

export default Footer