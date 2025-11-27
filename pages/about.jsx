import ModalComponent from "@/src/components/modal/ModalComponent";
import Popupform from "@/src/components/popupform/Popupform";
import Layout from "@/src/layout/Layout";
import { useState } from "react";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout header={1} setShowModal={(val) => setShowModal(val)}>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <div className="hero-badge">
                <i className="fas fa-heart"></i>
                <span>About Us</span>
              </div>
              <h1 className="hero-title">
                Your Gateway to
                <span className="title-gradient"> God's Own Country</span>
              </h1>
              <p className="hero-description">
                Crafting unforgettable journeys through Kerala's enchanting landscapes, 
                rich culture, and timeless traditions since our inception
              </p>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Discover our story</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="story-content">
                <div className="section-badge">
                  <i className="fas fa-book-open"></i>
                  <span>Our Story</span>
                </div>
                <h2 className="section-title">Dream Kerala Holidays & Travels</h2>
                <p className="section-description">
                  Dream Kerala Holidays was born from a passion for showcasing the unparalleled 
                  beauty of Kerala to travelers from around the world. We specialize in premier 
                  vehicle rental services and curated tour packages designed to help you explore 
                  every corner of this tropical paradise.
                </p>
                <p className="section-description">
                  Whether you're seeking a leisurely road trip through winding backwaters, 
                  an adventure in the misty hills, or a complete cultural immersion, we provide 
                  tailored solutions that make your journey seamless, memorable, and authentically Kerala.
                </p>
                
                <div className="story-stats">
                  <div className="stat-item">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Happy Travelers</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Destinations</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">99%</div>
                    <div className="stat-label">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="story-image-grid">
                <div className="image-item large">
                  <img 
                    src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800" 
                    alt="Kerala Backwaters"
                    loading="lazy"
                  />
                </div>
                <div className="image-item small">
                  <img 
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400" 
                    alt="Kerala Culture"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <i className="fas fa-gem"></i>
              <span>Our Values</span>
            </div>
            <h2 className="section-title">What Makes Us Different</h2>
            <p className="section-description">
              Our commitment to excellence and authentic experiences sets us apart
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="card-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Safety First Always</h3>
              <p>
                Your safety is our top priority. We ensure all our vehicles and tour services 
                adhere to the highest safety standards for a worry-free experience.
              </p>
            </div>

            <div className="value-card">
              <div className="card-icon">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h3>Best Value Pricing</h3>
              <p>
                Enjoy competitive rates and exceptional service. We offer affordable tour 
                packages and vehicle rentals without compromising on quality.
              </p>
            </div>

            <div className="value-card">
              <div className="card-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3>Expert Local Guides</h3>
              <p>
                Rely on our expert guides for an authentic travel experience. We provide 
                insightful, reliable, and engaging tours tailored to your interests.
              </p>
            </div>

            <div className="value-card">
              <div className="card-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Eco-Friendly Tourism</h3>
              <p>
                We're committed to sustainable tourism practices that preserve Kerala's 
                natural beauty for future generations to enjoy.
              </p>
            </div>

            <div className="value-card">
              <div className="card-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>24/7 Support</h3>
              <p>
                Our dedicated team is available round the clock to assist you with any 
                queries or concerns during your journey.
              </p>
            </div>

            <div className="value-card">
              <div className="card-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Personalized Service</h3>
              <p>
                Every traveler is unique. We customize our services to match your preferences, 
                pace, and interests for a truly personal experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="about-experience-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="experience-images">
                <div className="image-row">
                  <img 
                    src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400" 
                    alt="Kerala Tea Plantations"
                    className="exp-img"
                    loading="lazy"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400" 
                    alt="Kerala Houseboat"
                    className="exp-img"
                    loading="lazy"
                  />
                </div>
                <div className="image-row">
                  <img 
                    src="https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=800" 
                    alt="Kerala Beach"
                    className="exp-img wide"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="experience-content">
                <div className="section-badge">
                  <i className="fas fa-star"></i>
                  <span>The Experience</span>
                </div>
                <h2 className="section-title">Unforgettable Adventures Await</h2>
                <p className="section-description">
                  From the serene backwaters of Alleppey to the misty peaks of Munnar, 
                  from the pristine beaches of Kovalam to the wildlife sanctuaries of Thekkady, 
                  we bring you closer to Kerala's diverse landscapes and rich cultural heritage.
                </p>
                
                <div className="experience-features">
                  <div className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Handpicked destinations and experiences</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Well-maintained, comfortable vehicles</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Knowledgeable local guides</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Flexible itineraries to suit your pace</span>
                  </div>
                </div>

                <button 
                  className="experience-cta-btn"
                  onClick={() => setShowModal(true)}
                >
                  <span>Start Your Journey</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="cta-overlay"></div>
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience the Magic of Kerala?</h2>
            <p>Let us craft your perfect Kerala adventure. Book now and create memories that last a lifetime.</p>
            <div className="cta-buttons">
              <button 
                className="cta-primary-btn"
                onClick={() => setShowModal(true)}
              >
                <span>Book Your Trip</span>
                <i className="fas fa-paper-plane"></i>
              </button>
              <a href="/destination" className="cta-secondary-btn">
                <span>Explore Destinations</span>
                <i className="fas fa-compass"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Popupform />
      </ModalComponent>
    </Layout>
  );
};

export default About;
