import React from "react";
import FuturisticVideo from "../video/FuturisticVideo";
import SliderComponent from "../sliderComponent/SliderComponent";

const ModernAbout = ({ setShowModal }) => {
  return (
    <section className="modern-about-section">
      {/* Background Elements */}
      <div className="about-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
      </div>

      <div className="container-fluid">
        {/* Section Header */}
        <div className="about-header">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="about-intro">
                <div className="intro-badge">
                  <span className="badge-icon">🌴</span>
                  <span className="badge-text">About Dream Kerala</span>
                </div>
                <h2 className="about-title">
                  Your Gateway to Kerala's
                  <span className="title-highlight"> Enchanting Wonders</span>
                </h2>
                <p className="about-description">
                  Discover the magic of Kerala with DreamKerala, your premier travel partner 
                  for unforgettable experiences in God's Own Country. Whether you're seeking 
                  serene backwaters, lush hill stations, or vibrant cultural adventures, we 
                  offer bespoke travel packages designed to showcase the best of Kerala.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="about-stats">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">10,000+</h3>
                    <p className="stat-label">Happy Travelers</p>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fas fa-map-marked-alt"></i>
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">50+</h3>
                    <p className="stat-label">Destinations</p>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">4.9/5</h3>
                    <p className="stat-label">Customer Rating</p>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fas fa-award"></i>
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">15+</h3>
                    <p className="stat-label">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="about-video-section">
          <FuturisticVideo />
        </div>

        {/* Services Slider */}
        <div className="about-services-section">
          <div className="services-header">
            <h3 className="services-title">Explore Our Services</h3>
            <p className="services-subtitle">
              From luxury houseboats to mountain retreats, we've got you covered
            </p>
          </div>
          <SliderComponent setShowModal={(val) => setShowModal(val)} />
        </div>
      </div>
    </section>
  );
};

export default ModernAbout;
