import React from 'react'
import HeroCarousel from './sections/HeroCarousel'
import Navbar from '../../sections/NavBar'
// const FeatureCard = ({ icon, title, description }) => {
//     return (

//         <div className="feature-card p-4 h-100 rounded-3 shadow-sm hover-shadow transition-all">
//             <div className="d-flex align-items-start">
//                 <div className="feature-icon bg-primary bg-opacity-10 rounded-circle p-3 me-3">
//                     <img
//                         src={icon}
//                         alt=""
//                         aria-hidden="true"
//                         className="img-fluid"
//                         width="24"
//                         height="24"
//                     />
//                 </div>
//                 <div>
//                     <h3 className="h5 fw-semibold mb-2">{title}</h3>
//                     <p className="text-muted mb-0">{description}</p>
//                 </div>
//             </div>
//         </div>
//     )

// }
// export const features = [
//     {
//         icon: "assets/icons/donate-us.svg",
//         title: "Become a Volunteer",
//         description: "Join our team to make a direct impact in community development programs."
//     },
//     {
//         icon: "assets/icons/donate-us.svg",
//         title: "Donate Resources",
//         description: "Support our cause through financial contributions or material donations."
//     },
//     {
//         icon: "assets/icons/donate-us.svg",
//         title: "Partner With Us",
//         description: "Collaborate with businesses for corporate social responsibility initiatives."
//     }
// ];

const header = () => {
    return (
        <>
            <header className="header">
                <Navbar />
                <HeroCarousel />
                <section className="more-func-sec my-3 py-5 bg-white">
                    <div className="more-func-box">
                        <div className="row row-cols-md-3 w-100 justify-content-center">
                            <div className="more-func row align-items-center p-3 rounded">
                                <div className="f-icon col-auto">
                                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center"
                                        style={{ width: "60px", height: "60px" }}>
                                        <img src="assets/icons/donate-us.svg" alt="Volunteer Icon"
                                            style={{ width: "32px", height: "32px" }} />
                                    </div>
                                </div>
                                <div className="f-text col ps-3">
                                    <h6 className="mb-1 fw-semibold fs-6">Become a Volunteer</h6>
                                    <p className="mb-0 text-muted small">We help companies develop powerful corporate social responsibility</p>
                                </div>
                            </div>
                            <div className="more-func row align-items-center p-3 rounded">
                                <div className="f-icon col-auto">
                                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center"
                                        style={{ width: "60px", height: "60px" }}>
                                        <img src="assets/icons/donate-us.svg" alt="Volunteer Icon"
                                            style={{ width: "32px", height: "32px" }} />
                                    </div>
                                </div>
                                <div className="f-text col ps-3">
                                    <h6 className="mb-1 fw-semibold fs-6">Become a Volunteer</h6>
                                    <p className="mb-0 text-muted small">We help companies develop powerful corporate social responsibility</p>
                                </div>
                            </div>
                            <div className="more-func row align-items-center p-3 rounded">
                                <div className="f-icon col-auto">
                                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center"
                                        style={{ width: "60px", height: "60px" }}>
                                        <img src="assets/icons/donate-us.svg" alt="Volunteer Icon"
                                            style={{ width: "32px", height: "32px" }} />
                                    </div>
                                </div>
                                <div className="f-text col ps-3">
                                    <h6 className="mb-1 fw-semibold fs-6">Become a Volunteer</h6>
                                    <p className="mb-0 text-muted small">We help companies develop powerful corporate social responsibility</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>

        </>
    )




}

export default header