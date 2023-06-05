import React from "react";
import { Link, Outlet } from 'react-router-dom';


function Header() {

    return (
        <>
            {/* start-preloader */}
            {/* <div
                id="preloader"
                style={{
                    background: "#fff",
                    height: "100%",
                    left: 0,
                    opacity: 1,
                    position: "fixed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    top: 0,
                    width: "100%",
                    zIndex: 999999999,
                    overflowX: "hidden !important"
                }}
            >
                <div
                    className="preloader"
                    style={{ display: "flex", alignItem: "center", justifyContent: "center" }}
                >
                    <img
                        src="assets/images/preloader/preloader.gif"
                        style={{ width: "40%" }}
                        alt="Pre-loader"
                    />
                </div>
            </div>   */}
            {/* End-preloader */}
            {/* =========================== 1. Top Header Section =========================================== */}
            <div className="top-header d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-4 col-lg-5 col-md-6 col-12">
                            <div className="top-header-contact">
                                <a href="tel:+19205043860">
                                    <i className="fas fa-phone-alt" />
                                    +19205043860
                                </a>
                            </div>
                            <div className="top-header-contact">
                                <a href="mailto:info@devopgenie.com">
                                    <i className="fas fa-envelope" />
                                    info@devopgenie.com
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-0 text-right top-header-social">
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
                </div>
            </div>
            {/* =========================== 2. Menu Section =========================================== */}
            <div className="menu-header d-flex align-items-center">
                <div className="container main-h-con">
                    <div className="row justify-content-between">
                        <div className="col-2 d-flex align-items-center">
                            <Link to={'/'}>
                                <a>
                                    <img
                                        className="logo"
                                        src="assets/images/logo/site-logo/logo.png"
                                        alt="Habu"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="col-10 d-flex align-items-center">
                            <nav
                                id="mobile-menu"
                                className="menu-area d-lg-flex align-items-center ml-auto"
                            >
                                <ul>
                                    <li className="current-menu-item">
                                        <Link to={'/'}>
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'about'}>
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="#">Services</a>
                                        <ul className="grid-container">
                                            <li className="grid-item">
                                                <a href="seo.php">SEO</a>
                                            </li>
                                            <li className="grid-item">
                                                <Link to={'illustration'}>
                                                    <a href="illustration.php">Illustration</a>
                                                </Link>
                                            </li>
                                            <li className="grid-item">
                                                <a href="animation.php">Animation</a>
                                            </li>
                                            <li className="grid-item">
                                                <a href="logo-design.php">Logo Design</a>
                                            </li>
                                            <li className="grid-item">
                                                <a href="digital-marketing.php">Digital Marketing</a>
                                            </li>
                                            <li className="grid-item">
                                                <a href="mobile-application.php">Mobile Application</a>
                                            </li>
                                            <li className="grid-item">
                                                <a href="marketing-collateral.php">Marketing Collateral</a>
                                            </li>
                                            <li className="grid-item">
                                                <a href="creative-copywriting.php">Creative Copywriting</a>
                                            </li>
                                            <li className="grid-item">
                                                <a href="e-commerce-website.php">E-commerce Website</a>
                                            </li>
                                            <li className="grid-item">
                                                <a href="website-development.php">Website Development</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to={'pricing'}>
                                            <a>Pricing</a>
                                        </Link>
                                    </li>
                                    {/* <li><a href="portfolio.php">Pages</a>
                          <ul>                                    
                              <li><a href="portfolio.php">Portfolio</a></li>
                              <li><a href="portfolio-details.php">Portfolio Details</a></li>
                              <li><a href="team-member.php">Member Details</a></li>
                              <li><a href="faq.php">FAQ</a></li>
                              <li><a href="career.php">Career</a></li>                                    
                          </ul>
                      </li> */}
                                    <li>
                                        <Link to={'review'}>
                                            <a>Review</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'blog'}>
                                            <a>Blog</a>
                                        </Link>
                                        <ul>
                                            <li>
                                                <Link to={'blogdetails'}>
                                                    <a>Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to={'contact'}>
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="mobile-menu" />
                            <Link to={'contact'}  className="large-blue-button menu-button">
                                <a>
                                    Get a quote
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* =========================== 3. Banner Section =========================================== */}
            <Outlet />
        </>

    );
}
export default Header;