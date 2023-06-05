import React from "react";
import HeroSection from "../components/HeroSection";
function Contact() {

    return (
        <>
        <HeroSection pageTitle={'Contact Us'}/>
            {/* =========================== 4. Contact Section =========================================== */}
            <section className="contact-area">
                <div className="container">
                    <div className="section-heading text-center mx-auto wow animate__animated animate__slideInUp">
                        <h2>Feel Free To Knock Us</h2>
                        <p>
                            We have people of multiple kind in the house. Together we canprovide
                            high quality work to satisfy you.
                        </p>
                    </div>
                    {/* Location */}
                    <div className="location-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2544.9970179245997!2d90.37933665546187!3d23.764471837688824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c755f321f80b%3A0x5b87cdb2ee46b9a1!2sPresidential%20Plaza%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1605596229502!5m2!1sen!2sbd"
                            height={601}
                            style={{ border: 0, width: "100%" }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex={0}
                        />
                    </div>
                    {/* Address */}
                    <div className="address-container wow animate__animated animate__fadeIn">
                        <div className="row">
                            <div className="col-sm-4 col-6 d-flex align-items-center">
                                <div className="address-box mx-auto">
                                    <img className="mx-auto" src="assets/images/svgs/map.png" alt="map" />
                                    <p>
                                        22 B, Bakerstreet,
                                        <br /> London, UK
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-6 d-flex align-items-center">
                                <div className="address-box mx-auto">
                                    <img
                                        className="mx-auto"
                                        src="assets/images/svgs/chatting.png"
                                        alt="map"
                                    />
                                    <a href="tel:+44236523658">+44 2365 23658</a>
                                    <a href="tel:+1232533654">+1 2325 33654</a>
                                </div>
                            </div>
                            <div className="col-sm-4 col-6 mx-auto d-flex align-items-center">
                                <div className="address-box mx-auto">
                                    <img
                                        className="mx-auto"
                                        src="assets/images/svgs/message.png"
                                        alt="map"
                                    />
                                    <a href="mailto:asalam.jes@gmail.com">asalam.jes@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <div className="contact-form-area wow animate__animated animate__fadeIn">
                        <h2>Leave a message</h2>
                        <div className="row">
                            <form action="#">
                                <div className="col-md-4">
                                    <input type="text" placeholder="Your Name" />
                                </div>
                                <div className="col-md-4">
                                    <input type="email" placeholder="Your Email" />
                                </div>
                                <div className="col-md-4">
                                    <input type="text" placeholder="Subject" />
                                </div>
                                <div className="col-12">
                                    <textarea placeholder="Your Message" defaultValue={""} />
                                    <input
                                        className="large-blue-button"
                                        type="submit"
                                        defaultValue="Send Message"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* =========================== 5. Custom Project Section =========================================== */}
            <div className="custom-projects">
                <div className="container d-lg-flex align-items-center">
                    <div className="section-heading">
                        <h1>Custom Projects</h1>
                        <p>
                            We have people of multiple kind in the house. Together we can provide
                            high quality work to satisfy you. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="custom-project-button ml-auto">
                        <button>Get A Quote</button>
                    </div>
                </div>
                <div className="custom-projects-shape-2">
                    <img src="assets/images/shapes/shape-02.png" alt="Habu" />
                </div>
                <div className="custom-projects-circle-1">
                    <img
                        src="assets/images/shapes/shape-circle.png"
                        className="wow animate__animated animate__pulse animate__infinite"
                        alt="Habu"
                    />
                </div>
                <div className="custom-projects-circle-2">
                    <img src="assets/images/shapes/shape-circle.png" alt="Habu" />
                </div>
                <div className="custom-projects-circle-3">
                    <img
                        src="assets/images/shapes/shape-circle.png"
                        className="wow animate__animated animate__pulse animate__infinite"
                        alt="Habu"
                    />
                </div>
                <div className="custom-projects-circle-4" />
            </div>
        </>

    );
}
export default Contact;