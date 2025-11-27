import React, { useState, useEffect } from "react";
import Slider from "react-slick";

const ModernHero = ({ data, setShowModal }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
    pauseOnHover: false,
    beforeChange: (current, next) => setActiveSlide(next),
    appendDots: (dots) => (
      <div className="modern-hero-dots">
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <button className="modern-dot">
        <span className="dot-progress"></span>
      </button>
    ),
  };

  if (!data || data.length === 0) {
    return (
      <section className="modern-hero-section">
        <div className="modern-hero-slide">
          <div className="hero-background-overlay"></div>
          <div className="hero-background-image" style={{
            backgroundImage: "url('assets/images/hero/default-hero.jpg')"
          }}></div>
          <div className="container">
            <div className="modern-hero-content">
              <div className="hero-badge">
                <span className="badge-icon">✨</span>
                <span className="badge-text">Discover Kerala</span>
              </div>
              <h1 className="hero-title">
                Experience God's Own Country
              </h1>
              <p className="hero-description">
                Embark on unforgettable journeys through Kerala's pristine backwaters, 
                lush hill stations, and vibrant culture.
              </p>
              <div className="hero-actions">
                <button onClick={() => setShowModal(true)} className="hero-btn hero-btn-primary">
                  <span>Start Your Journey</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
                <button className="hero-btn hero-btn-secondary">
                  <span>Explore Tours</span>
                  <i className="fas fa-compass"></i>
                </button>
              </div>
              <div className="hero-features">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Best Price Guarantee</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>24/7 Support</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Expert Guides</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <div className="scroll-mouse">
              <div className="scroll-wheel"></div>
            </div>
            <span>Scroll to explore</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`modern-hero-section ${isLoaded ? 'loaded' : ''}`}>
      <Slider {...sliderSettings} className="modern-hero-slider">
        {data.map((slide, index) => {
          const headline = slide?.properties?.Headline?.rich_text[0]?.plain_text || "Discover Kerala";
          const description = slide?.properties?.Description?.rich_text[0]?.plain_text || "Experience the beauty of God's Own Country";
          const imageUrl = slide?.properties?.images?.files[0]?.file?.url || "assets/images/hero/default-hero.jpg";
          const slug = slide?.properties?.slug?.rich_text[0]?.plain_text;

          return (
            <div key={index} className="modern-hero-slide">
              {/* Background Image with Parallax Effect */}
              <div className="hero-background-overlay"></div>
              <div 
                className="hero-background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
              ></div>

              {/* Animated Shapes */}
              <div className="hero-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>

              {/* Content */}
              <div className="container">
                <div className="modern-hero-content">
                  {/* Badge */}
                  {/* <div className="hero-badge" data-aos="fade-down">
                    <span className="badge-icon">✨</span>
                    <span className="badge-text">Dream Kerala Holidays</span>
                  </div> */}

                  {/* Main Title */}
                  <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
                    {headline}
                  </h1>

                  {/* Description */}
                  <p className="hero-description" data-aos="fade-up" data-aos-delay="200">
                    {description}
                  </p>

                  {/* Action Buttons */}
                  <div className="hero-actions" data-aos="fade-up" data-aos-delay="300">
                    {slug ? (
                      <a href={`/${slug}`} className="hero-btn hero-btn-primary">
                        <span>Explore More</span>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    ) : (
                      <button onClick={() => setShowModal(true)} className="hero-btn hero-btn-primary">
                        <span>Book Now</span>
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    )}
                    <button onClick={() => setShowModal(true)} className="hero-btn hero-btn-secondary">
                      <span>Get Quote</span>
                      <i className="fas fa-phone-alt"></i>
                    </button>
                  </div>

                  {/* Features */}
                  <div className="hero-features" data-aos="fade-up" data-aos-delay="400">
                    <div className="feature-item">
                      <i className="fas fa-check-circle"></i>
                      <span>Best Price Guarantee</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check-circle"></i>
                      <span>24/7 Support</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check-circle"></i>
                      <span>Expert Guides</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator */}
              {index === 0 && (
                <div className="hero-scroll-indicator">
                  <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                  </div>
                  <span>Scroll to explore</span>
                </div>
              )}

              {/* Slide Counter */}
              <div className="hero-slide-counter">
                <span className="current">{String(index + 1).padStart(2, '0')}</span>
                <span className="separator">/</span>
                <span className="total">{String(data.length).padStart(2, '0')}</span>
              </div>
            </div>
          );
        })}
      </Slider>

      {/* Social Links */}
      <div className="hero-social-links">
        <a href="#" aria-label="Facebook" className="social-link">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="Instagram" className="social-link">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="Twitter" className="social-link">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </section>
  );
};

export default ModernHero;
