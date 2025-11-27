import React from "react";

function Footer() {
  return (
    <>
      {/* Curved Divider */}
      <div className="footer-curve-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            fill="#0F172A"
            d="M0,40 Q360,0 720,40 T1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </div>

      <footer className="modern-footer-v2">
        <div className="footer-container">
          <div className="container">
            
            {/* Main Footer - Horizontal Layout */}
            <div className="footer-main-horizontal">
              
              {/* Brand & Social */}
              <div className="footer-brand-section">
                <a href="/" className="footer-logo-link">
                  <img
                    src="assets/images/logo/logo-white.png"
                    alt="Dream Kerala Holidays"
                    className="footer-logo-img"
                  />
                </a>
                <p className="footer-tagline">
                  Experience God's Own Country
                </p>
                <div className="footer-social-row">
                  <a href="#" className="social-btn facebook" aria-label="Facebook">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#" className="social-btn instagram" aria-label="Instagram">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#" className="social-btn twitter" aria-label="Twitter">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" className="social-btn youtube" aria-label="YouTube">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="footer-links-section">
                <h5 className="footer-section-title">Quick Links</h5>
                <div className="footer-links-grid">
                  <a href="#" className="footer-link">24hrs Taxi</a>
                  <a href="#" className="footer-link">Tour Packages</a>
                  <a href="#" className="footer-link">Hotel Booking</a>
                  <a href="#" className="footer-link">Houseboat</a>
                </div>
              </div>

              {/* Contact Info - Compact */}
              <div className="footer-contact-section">
                <h5 className="footer-section-title">Contact</h5>
                <div className="footer-contact-compact">
                  <div className="contact-item-inline">
                    <i className="fas fa-phone-alt contact-icon-inline"></i>
                    <div className="contact-text-inline">
                      <a href="tel:+919048459086">+91 90484 59086</a>
                      <a href="tel:+919567132777">+91 95671 32777</a>
                    </div>
                  </div>
                  <div className="contact-item-inline">
                    <i className="fas fa-envelope contact-icon-inline"></i>
                    <a href="mailto:Dreamkeralaholidays24@gmail.com" className="contact-text-inline">
                      Dreamkeralaholidays24@gmail.com
                    </a>
                  </div>
                  <div className="contact-item-inline">
                    <i className="fas fa-map-marker-alt contact-icon-inline"></i>
                    <span className="contact-text-inline">
                      Nedumbassery, Kerala 683111
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer Bottom - Single Line */}
            <div className="footer-bottom-bar">
              <p className="footer-copyright">
                © 2024 <span className="brand-name">Dream Kerala Holidays</span> • All Rights Reserved
              </p>
              <div className="footer-legal-links">
                <a href="#">Privacy</a>
                <span className="dot">•</span>
                <a href="#">Terms</a>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
