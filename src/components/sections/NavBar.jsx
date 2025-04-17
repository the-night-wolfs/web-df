import React from "react";
import BrandLogo from '/vite.svg'
import { Link } from "react-router-dom";
import '../../styles/styles.css'
const Navbar = () => {
    return (
        <section className="nav-sec container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid px-3 px-xl-4">
                    {/* Brand Logo & Name */}
                    <div className="d-flex align-items-center">
                        <a className="navbar-brand py-1" href="#" aria-label="Durga Foundation Home">
                            <div className="d-flex align-items-center">
                                <img src={BrandLogo} alt="Durga Foundation Logo"
                                    width="auto" height="30" className="d-inline-block align-top me-2" />
                                <span className="fw-semibold">Durga-Foundation</span>
                            </div>
                        </a>
                    </div>

                    {/* Mobile Toggle Button */}
                    <button className="navbar-toggler border-0 px-2 toggle-btn" type="button"
                        data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                        <svg className="toggle-icon" width="24" height="24" viewBox="0 0 24 24">
                            <path className="top-line" d="M4 6h16" />
                            <path className="middle-line" d="M4 12h16" />
                            <path className="bottom-line" d="M4 18h16" />
                        </svg>
                    </button>

                    {/* Main Navbar Content */}
                    <div className="collapse navbar-collapse justify-content-between" id="mainNavbar">
                        {/* Navigation Links */}
                        <ul className="navbar-nav nav-underline me-auto mb-2 mb-lg-0 navbar-nav-scroll"
                            style={{ "--bs-scroll-height": "100px" }}>
                            <li className="nav-item mx-1 mx-lg-2">
                                <Link className="nav-link active" aria-current="page" to={'/'} >Home</Link>
                            </li>
                            <li className="nav-item mx-1 mx-lg-2">
                                <Link className="nav-link" to={'/about'}>About</Link>
                            </li>
                            <li className="nav-item mx-1 mx-lg-2">
                                <Link className="nav-link" to={'/ourwork'}>OurWork</Link>
                            </li>
                            <li className="nav-item mx-1 mx-lg-2">
                                <Link className="nav-link" to={'/youthcorner'}>Youth Corner</Link>
                            </li>
                            <li className="nav-item mx-1 mx-lg-2">
                                <Link className="nav-link" to={'/contact'}>Contact Us</Link>
                            </li>
                        </ul>

                        {/* Action Buttons */}
                        <div className="d-flex flex-column flex-lg-row gap-2 my-2 my-lg-0 ms-lg-3">
                            <div className="nav-action-item">
                                <Link to={'/donateus'}  className="btn btn-outline-primary px-3 px-lg-4 py-2">
                                    Donate Us
                                </Link>
                            </div>
                            <div className="nav-action-item">
                                <Link to={'/joinus'}  className="btn btn-primary px-3 px-lg-4 py-2 text-white">
                                    Join Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;