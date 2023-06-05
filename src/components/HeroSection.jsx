import React from 'react';

const HeroSection = ({ pageTitle }) => {
  return (
    <div className="page-header">
      <div className="about-banner-shape-left wow animate__animated animate__fadeInLeft">
        <img
          src="assets/images/shapes/03_shape-01.png"
          className="wow animate__animated animate__pulse animate__infinite"
          alt="habu"
        />
      </div>
      <div className="about-banner-shape-right wow animate__animated animate__fadeInRight animate__delay-1s">
        <img
          src="assets/images/shapes/03_shape-02.png"
          className="wow animate__animated animate__pulse animate__infinite"
          alt="habu"
        />
      </div>
      <div className="container">
        <div className="page-header-text wow animate__animated animate__fadeInDown">
          <h1 className="page-title">{pageTitle}</h1>
          <span>Home</span>
          <span className="span-divider font-weight-bold">|</span>
          <span className="font-weight-bold">{pageTitle}</span>
          <div className="page-banner-shape-title">
            <img
              src="assets/images/shapes/03_shape-03.png"
              className="wow animate__animated animate__fadeInUp animate__delay-1s"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
