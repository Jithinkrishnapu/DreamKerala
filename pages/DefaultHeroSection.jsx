import React, { useState } from 'react';

const HeroSection = ({setShowModal,showModal}) => {
  return (
    <div className="single-slider">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-6">
            {/*=== Hero Content ===*/}
            <div className="hero-content text-white">
              <h1 data-animation="fadeInDown" data-delay=".4s">
                Visit Sabarimala, feel divine
              </h1>
              <div className="text-button d-flex align-items-center">
                <p data-animation="fadeInLeft" data-delay=".5s">
                  This journey isn't just about reaching a destination; it's about immersing yourself in the spirituality, tradition, and sanctity that each temple offers along the way.
                </p>
                <div
                  className="hero-button"
                  data-animation="fadeInRight"
                  data-delay=".6s"
                >
                  <div onClick={() => setShowModal(true)}>
                    <a className="main-btn primary-btn">
                      Explore More
                      <i className="fas fa-paper-plane" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            {/*=== Hero Image ===*/}
            <div
              className="hero-image"
              data-animation="fadeInRight"
            >
              <img
                loading="lazy"
                src={'assets/images/hero/sabarimala.jpg'}
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;