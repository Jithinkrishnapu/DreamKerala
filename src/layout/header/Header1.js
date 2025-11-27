import Link from "next/link";
import Menu from "../Menu";
import { useState, useEffect } from "react";

const Header1 = ({ setShowModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`modern-header ${isScrolled ? "scrolled" : ""}`}>
      {/* Header Navigation */}
      <div className="modern-header-navigation">
        {isMobileMenuOpen && (
          <div className="nav-overlay" onClick={() => setIsMobileMenuOpen(false)} />
        )}
        
        <div className="container-fluid">
          <div className="header-content">
            
            {/* Logo Section */}
            <div className="header-logo">
              <Link legacyBehavior href="/">
                <a className="logo-link">
                  <img
                    src="assets/images/logo/logo-white.png"
                    alt="Dream Kerala Holidays"
                    className="logo-img"
                  />
                  <span className="logo-text">Dream Kerala</span>
                </a>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="header-nav-desktop">
              <Menu />
            </div>

            {/* Header Actions */}
            <div className="header-actions">
              {/* Contact Info */}
              <div className="header-contact d-none d-lg-flex">
                <div className="contact-item">
                  <i className="fas fa-phone-alt"></i>
                  <div className="contact-text">
                    <span className="contact-label">Call Us</span>
                    <a href="tel:+919048459086" className="contact-value">+91 90484 59086</a>
                  </div>
                </div>
              </div>

              {/* Book Now Button */}
              <button 
                className="header-cta-btn d-none d-md-flex" 
                onClick={() => setShowModal(true)}
              >
                <span className="btn-text">Book Now</span>
                <span className="btn-icon">
                  <i className="fas fa-paper-plane" />
                </span>
              </button>

              {/* Mobile Menu Toggle */}
              <button 
                className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="toggle-line"></span>
                <span className="toggle-line"></span>
                <span className="toggle-line"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <div className="mobile-menu-header">
            <Link legacyBehavior href="/">
              <a className="mobile-logo">
                <img
                  src="assets/images/logo/logo-black.png"
                  alt="Dream Kerala Holidays"
                />
              </a>
            </Link>
            <button 
              className="mobile-menu-close"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="mobile-menu-content">
            <Menu />
            
            <div className="mobile-menu-footer">
              <button 
                className="mobile-cta-btn" 
                onClick={() => {
                  setShowModal(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                <span>Book Your Journey</span>
                <i className="fas fa-arrow-right" />
              </button>

              <div className="mobile-contact-info">
                <a href="tel:+919048459086" className="mobile-contact-link">
                  <i className="fas fa-phone-alt"></i>
                  <span>+91 90484 59086</span>
                </a>
                <a href="mailto:Dreamkeralaholidays24@gmail.com" className="mobile-contact-link">
                  <i className="fas fa-envelope"></i>
                  <span>Email Us</span>
                </a>
              </div>

              <div className="mobile-social-links">
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;
