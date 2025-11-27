import ModalComponent from "@/src/components/modal/ModalComponent";
import Popupform from "@/src/components/popupform/Popupform";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useLayoutEffect, useState, useTransition } from "react";

const Destination = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCard, setActiveCard] = useState(null);
  const [isPending, startTransition] = useTransition();

  useLayoutEffect(() => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/destination");
        if (!response.ok) {
          throw new Error("Error fetching destination data");
        }
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    });
  }, [startTransition]);

  const sortedData = data.sort(
    (a, b) =>
      (a.properties.order?.rich_text[0]?.plain_text || 0) -
      (b.properties.order?.rich_text[0]?.plain_text || 0)
  );

  return (
    <Layout header={1} setShowModal={(val) => setShowModal(val)}>
      {/* Hero Section */}
      <section className="destinations-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-map-marked-alt"></i>
            <span>Explore Kerala</span>
          </div>
          <h1 className="hero-title">
            Discover All Our
            <span className="title-gradient"> Destinations</span>
          </h1>
          <p className="hero-description">
            From serene backwaters to misty hill stations, explore the complete collection 
            of handpicked destinations across God's Own Country
          </p>
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <div className="stat-info">
                <div className="stat-number">{data.length}+</div>
                <div className="stat-label">Destinations</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <div className="stat-info">
                <div className="stat-number">100%</div>
                <div className="stat-label">Authentic</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-headset"></i>
              </div>
              <div className="stat-info">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* Destinations Grid Section */}
      <section className="modern-destinations-section">
        {/* Background Elements */}
        <div className="destinations-bg-pattern">
          <div className="pattern-circle circle-1"></div>
          <div className="pattern-circle circle-2"></div>
          <div className="pattern-circle circle-3"></div>
        </div>

        <div className="container">
          {isLoading ? (
            <div className="destinations-loading">
              <div className="loading-spinner"></div>
              <p>Loading destinations...</p>
            </div>
          ) : (
            <>
              {/* Destinations Grid */}
              <div className="destinations-grid">
                {sortedData.map((destination, index) => {
                  const headline = destination?.properties?.Headline?.rich_text[0]?.plain_text || "Destination";
                  const description = destination?.properties?.Description?.rich_text[0]?.plain_text || "";
                  const shortDescription = destination?.properties?.Short_Description?.rich_text[0]?.plain_text || "";
                  const imageUrl = destination?.properties?.images?.files[0]?.file?.url;
                  const slug = destination?.properties?.slug?.rich_text[0]?.plain_text;

                  return (
                    <div
                      key={index}
                      className={`destination-card ${activeCard === index ? 'active' : ''}`}
                      onMouseEnter={() => setActiveCard(index)}
                      onMouseLeave={() => setActiveCard(null)}
                    >
                      {/* Card Number */}
                      <div className="card-number">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* Image Container */}
                      <div className="card-image-wrapper">
                        <div className="image-overlay"></div>
                        <img
                          src={imageUrl}
                          alt={headline}
                          className="card-image"
                          loading="lazy"
                        />
                        <div className="image-badge">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>Kerala</span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="card-content">
                        <h3 className="card-title">{headline}</h3>
                        <p className="card-description">
                          {(shortDescription || description).substring(0, 120)}
                          {(shortDescription || description).length > 120 ? '...' : ''}
                        </p>

                        {/* Card Features */}
                        <div className="card-features">
                          <div className="feature-item">
                            <i className="fas fa-camera"></i>
                            <span>Scenic Views</span>
                          </div>
                          <div className="feature-item">
                            <i className="fas fa-hiking"></i>
                            <span>Adventures</span>
                          </div>
                        </div>

                        {/* Card Action */}
                        <Link href={`/${slug}`} className="card-action-btn">
                          <span>Explore Destination</span>
                          <div className="btn-icon">
                            <i className="fas fa-arrow-right"></i>
                          </div>
                        </Link>
                      </div>

                      {/* Hover Effect Border */}
                      <div className="card-border-effect"></div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom CTA */}
              <div className="destinations-bottom-cta">
                <div className="cta-content">
                  <h3>Ready to Start Your Kerala Adventure?</h3>
                  <p>Let us help you plan the perfect itinerary for your dream vacation</p>
                </div>
                <button 
                  className="cta-button"
                  onClick={() => setShowModal(true)}
                >
                  <span>Plan My Trip</span>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Popupform />
      </ModalComponent>
    </Layout>
  );
};

export default Destination;
