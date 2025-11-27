import ModalComponent from "@/src/components/modal/ModalComponent";
import PopularActivities from "@/src/components/popularActivities/PopularActivities";
import Popupform from "@/src/components/popupform/Popupform";
import VehicleTable from "@/src/components/VehicleTable";
import Layout from "@/src/layout/Layout";
import { useRouter } from "next/router";
import { useLayoutEffect, useState, useTransition } from "react";

const DestinationDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const { slug } = router.query;

  useLayoutEffect(() => {
    if (!slug) return;
    
    startTransition(async () => {
      try {
        const response = await fetch(`/api/detailById?slug=${slug}`);
        if (!response.ok) {
          throw new Error("Error fetching destination data");
        }
        const result = await response.json();
        setDetails(result[0]);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    });
  }, [slug, startTransition]);

  if (isLoading || !details) {
    return (
      <Layout header={1} setShowModal={(val) => setShowModal(val)}>
        <div className="detail-loading">
          <div className="loading-spinner"></div>
          <p>Loading destination...</p>
        </div>
      </Layout>
    );
  }

  const headline = details?.properties?.Headline?.rich_text[0]?.plain_text || "";
  const location = details?.properties?.Location?.rich_text[0]?.plain_text || "";
  const description = details?.properties?.Description?.rich_text[0]?.plain_text || "";
  const whyUs = details?.properties?.why_us?.rich_text[0]?.plain_text || "";
  const mainImage = details?.properties?.images?.files[0]?.file?.url;
  const secondImage = details?.properties?.images?.files[1]?.file?.url;
  const activities = details?.properties?.Activities?.multi_select || [];
  const activityImages = details?.properties?.Activities_Images?.files || [];
  const gallery = details?.properties?.Gallery?.files || [];
  const tableData = details?.properties?.table?.rich_text?.length 
    ? JSON.parse(details?.properties?.table?.rich_text[0]?.plain_text) 
    : null;

  return (
    <Layout header={1} setShowModal={(val) => setShowModal(val)}>
      {/* Hero Section */}
      <section className="detail-hero">
        <div className="hero-image-wrapper">
          <img 
            src={mainImage} 
            alt={headline}
            className="hero-image"
            loading="eager"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Back Button */}
        <button 
          className="back-button"
          onClick={() => router.back()}
          aria-label="Go back"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Back</span>
        </button>
        
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <div className="hero-badge">
                <i className="fas fa-map-marker-alt"></i>
                <span>{location}</span>
              </div>
              <h1 className="hero-title">{headline}</h1>
              <div className="hero-actions">
                <button 
                  className="hero-cta-btn"
                  onClick={() => setShowModal(true)}
                >
                  <span>Book This Destination</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
                <button 
                  className="hero-scroll-btn"
                  onClick={() => document.getElementById('detail-content').scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>Learn More</span>
                  <i className="fas fa-chevron-down"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="detail-content-section" id="detail-content">
        <div className="container">
          {/* Overview Section */}
          <div className="detail-overview">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="overview-content">
                  <div className="section-badge">
                    <i className="fas fa-info-circle"></i>
                    <span>Overview</span>
                  </div>
                  <h2 className="section-title">Discover {headline}</h2>
                  <p className="section-description">{description}</p>
                  
                  {activities.length > 0 && (
                    <div className="activities-tags">
                      <h4>Popular Activities</h4>
                      <div className="tags-wrapper">
                        {activities.map((activity, index) => (
                          <span key={index} className="activity-tag">
                            <i className="fas fa-check-circle"></i>
                            {activity.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="overview-image">
                  {secondImage && (
                    <img 
                      src={secondImage} 
                      alt={headline}
                      className="rounded-image"
                      loading="lazy"
                    />
                  )}
                  <div className="image-decoration"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          {whyUs && (
            <div className="why-choose-section">
              <div className="why-choose-card">
                <div className="card-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="card-content">
                  <h3>Why Choose Dream Kerala</h3>
                  <p>{whyUs}</p>
                </div>
              </div>
            </div>
          )}

          {/* Activities Section */}
          {activityImages.length > 0 && (
            <div className="activities-section">
              <PopularActivities images={activityImages} titles={activities} />
            </div>
          )}

          {/* Vehicle Table Section */}
          {tableData && (
            <div className="vehicle-section">
              <div className="section-header">
                <div className="section-badge">
                  <i className="fas fa-car"></i>
                  <span>Transportation</span>
                </div>
                <h2 className="section-title">Vehicle Options & Pricing</h2>
                <p className="section-description">
                  Choose from our fleet of well-maintained vehicles for your journey
                </p>
              </div>
              <VehicleTable data={tableData} />
            </div>
          )}

          {/* Gallery Section */}
          {gallery.length > 0 && (
            <div className="gallery-section">
              <div className="section-header">
                <div className="section-badge">
                  <i className="fas fa-images"></i>
                  <span>Gallery</span>
                </div>
                <h2 className="section-title">Explore More Views</h2>
                <p className="section-description">
                  Get a glimpse of what awaits you at this beautiful destination
                </p>
              </div>
              <div className="gallery-grid">
                {gallery.map((item, index) => (
                  <div key={index} className="gallery-item">
                    <img 
                      src={item?.file?.url} 
                      alt={`${headline} - Image ${index + 1}`}
                      loading="lazy"
                    />
                    <div className="gallery-overlay">
                      <i className="fas fa-search-plus"></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="detail-bottom-cta">
            <div className="cta-content">
              <h3>Ready to Experience {headline}?</h3>
              <p>Book your journey now and create unforgettable memories</p>
            </div>
            <button 
              className="cta-button"
              onClick={() => setShowModal(true)}
            >
              <span>Book Now</span>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </section>

      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Popupform />
      </ModalComponent>
    </Layout>
  );
};

export default DestinationDetails;
