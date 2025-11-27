import React, { useEffect, useState, useTransition } from "react";
import Link from "next/link";

function PopularServices() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCard, setActiveCard] = useState(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
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

  const sortedData = data
    .sort(
      (a, b) =>
        (a.properties.order?.rich_text[0]?.plain_text || 0) -
        (b.properties.order?.rich_text[0]?.plain_text || 0)
    )
    .slice(0, 3);

  if (isLoading) {
    return (
      <section className="modern-services-section">
        <div className="container">
          <div className="services-loading">
            <div className="loading-spinner"></div>
            <p>Loading destinations...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="modern-services-section">
      {/* Background Elements */}
      <div className="services-bg-pattern">
        <div className="pattern-circle circle-1"></div>
        <div className="pattern-circle circle-2"></div>
        <div className="pattern-circle circle-3"></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="services-header">
          <div className="services-header-content">
            <div className="services-header-badge">
              <i className="fas fa-compass"></i>
              <span>Popular Destinations</span>
            </div>
            <h2 className="services-title">
              Discover Kerala's Most
              <span className="title-accent"> Sought-After Experiences</span>
            </h2>
            <p className="services-description">
              From tranquil backwaters to misty mountains, explore our handpicked destinations 
              that showcase the very best of God's Own Country
            </p>
          </div>
          <Link href="/destination" className="view-all-btn">
            <span>View All Destinations</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {sortedData.map((destination, index) => {
            const headline = destination?.properties?.Headline?.rich_text[0]?.plain_text || "Destination";
            const description = destination?.properties?.Description?.rich_text[0]?.plain_text || "";
            const imageUrl = destination?.properties?.images?.files[0]?.file?.url;
            const slug = destination?.properties?.slug?.rich_text[0]?.plain_text;

            return (
              <div
                key={index}
                className={`service-card ${activeCard === index ? 'active' : ''}`}
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
                    <i className="fas fa-star"></i>
                    <span>Featured</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-content">
                  <h3 className="card-title">{headline}</h3>
                  <p className="card-description">
                    {description.substring(0, 100)}
                    {description.length > 100 ? '...' : ''}
                  </p>

                  {/* Card Features */}
                  <div className="card-features">
                    <div className="feature-item">
                      <i className="fas fa-map-marked-alt"></i>
                      <span>Guided Tours</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-camera"></i>
                      <span>Photo Spots</span>
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
        <div className="services-bottom-cta">
          <div className="cta-content">
            <h3>Can't Find What You're Looking For?</h3>
            <p>Let us create a custom itinerary just for you</p>
          </div>
          <Link href="/contact" className="cta-button">
            <span>Contact Us</span>
            <i className="fas fa-paper-plane"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PopularServices;
