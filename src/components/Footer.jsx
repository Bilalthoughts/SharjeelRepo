import React from "react";

function Footer() {

    return (
        <>
            <section className="footer-area">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-9">
                            <h2>Contact Us</h2>
                            <p>
                                +19205043860 <br />
                                info@devopgenie.com <br />
                                40 Baria Sreet 133/2 <br />
                                NewYork City, USA <br />
                                Open hours: 8.00-18.00 Mon-Fri
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-9">
                            <h2>Important</h2>
                            <ul>
                                <li>
                                    <a href="index.php">Home</a>
                                </li>
                                <li>
                                    <a href="about.php">About Us</a>
                                </li>
                                <li>
                                    <a href="pricing.php">Pricing</a>
                                </li>
                                <li>
                                    <a href="review.php">Review</a>
                                </li>
                                <li>
                                    <a href="portfolio-details.php">Single Service</a>
                                </li>
                                <li>
                                    <a href="blog.php">Blog</a>
                                </li>
                                <li>
                                    <a href="contact.php">Contact</a>
                                </li>
                                <li>
                                    <a href="faq.php">Support</a>
                                </li>
                                <li>
                                    <a href="career.php">Career</a>
                                </li>
                                <li>
                                    <a href="about.php">Privacy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-9 col-12">
                            <h2>Our Newsletter</h2>
                            <p>
                                Subscribe to our mailing list to get the up dates to your email
                                inbox
                            </p>
                            <form action="index.php">
                                <input type="email" placeholder="E-mail" />
                                <input type="submit" defaultValue="Subscribe" />
                            </form>
                            <div className="footer-social mt-30">
                                <a href="https://www.facebook.com">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="https://twitter.com/">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="https://www.instagram.com/">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a href="https://www.youtube.com">
                                    <i className="fab fa-youtube" />
                                </a>
                                <a href="https://www.snapchat.com/">
                                    <i className="fab fa-snapchat m-0" />
                                </a>
                            </div>
                        </div>
                        <a className="go-to-top" href="#">
                            <i className="fas fa-chevron-up" />
                        </a>
                    </div>
                </div>
            </section>
            {/* =========================== 12. Copyright Section =========================================== */}
            <div className="container-fluid text-center copyright">
                <p className="mb-0">
                    Copyright ©2022-2023 Devopgenie . All Rights Reserved
                </p>
            </div>
        </>

    );
}
export default Footer;