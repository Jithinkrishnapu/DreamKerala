import React, { useLayoutEffect, useState, useTransition } from "react";
import TariffTable from "./TariffTable";

function TariffComponent() {
  const [data, setData] = useState([]);
  const [activeVehicle, setActiveVehicle] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  useLayoutEffect(() => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/tariff");
        if (!response.ok) {
          throw new Error("Error fetching tariff data");
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

  if (isLoading) {
    return (
      <section className="modern-tariff-section">
        <div className="container">
          <div className="tariff-loading">
            <div className="loading-spinner"></div>
            <p>Loading vehicles...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="modern-tariff-section">
      {/* Background Elements */}
      <div className="tariff-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="tariff-header">
          <div className="header-badge">
            <i className="fas fa-car"></i>
            <span>Our Fleet</span>
          </div>
          <h2 className="tariff-title">
            Choose Your Perfect Ride
          </h2>
          <p className="tariff-subtitle">
            Transparent pricing for all vehicle types. No hidden charges, just honest rates.
          </p>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="vehicle-cards-grid">
          {sortedData.map((vehicle, index) => {
            const headline = vehicle?.properties?.Headline?.rich_text[0]?.plain_text || "Vehicle";
            const imageUrl = vehicle?.properties?.images?.files[0]?.file?.url;
            const isActive = activeVehicle === index;

            return (
              <div
                key={index}
                className={`vehicle-card ${isActive ? 'active' : ''}`}
                onClick={() => setActiveVehicle(index)}
              >
                <div className="vehicle-card-inner">
                  {/* Vehicle Image */}
                  <div className="vehicle-image-wrapper">
                    <img
                      src={imageUrl}
                      alt={headline}
                      className="vehicle-image"
                    />
                    <div className="vehicle-overlay">
                      <span className="view-details">View Pricing</span>
                    </div>
                  </div>

                  {/* Vehicle Info */}
                  <div className="vehicle-info">
                    <h3 className="vehicle-name">{headline}</h3>
                    <div className="vehicle-features">
                      <span className="feature">
                        <i className="fas fa-users"></i>
                        {index < 2 ? '4-5' : index < 4 ? '6-7' : '12+'} Seats
                      </span>
                      <span className="feature">
                        <i className="fas fa-snowflake"></i>
                        AC
                      </span>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {isActive && (
                    <div className="active-indicator">
                      <i className="fas fa-check-circle"></i>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Details Panel */}
        {sortedData.length > 0 && (
          <div className="pricing-details-panel">
            <div className="panel-header">
              <div className="panel-title-wrapper">
                <h3 className="panel-title">
                  {sortedData[activeVehicle]?.properties?.Headline?.rich_text[0]?.plain_text} - Pricing Details
                </h3>
                <div className="vehicle-counter">
                  {activeVehicle + 1} / {sortedData.length}
                </div>
              </div>
              <div className="panel-header-actions">
                <div className="panel-badge">
                  <i className="fas fa-shield-alt"></i>
                  <span>Best Price Guaranteed</span>
                </div>
                <div className="panel-navigation">
                  <button
                    className="nav-arrow nav-prev"
                    onClick={() => setActiveVehicle(activeVehicle === 0 ? sortedData.length - 1 : activeVehicle - 1)}
                    aria-label="Previous vehicle"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button
                    className="nav-arrow nav-next"
                    onClick={() => setActiveVehicle(activeVehicle === sortedData.length - 1 ? 0 : activeVehicle + 1)}
                    aria-label="Next vehicle"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="panel-content">
              <div className="row align-items-center">
                {/* Pricing Table */}
                <div className="col-lg-7">
                  <div className="pricing-table-wrapper">
                    {sortedData[activeVehicle]?.properties?.table?.rich_text?.length ? (
                      <TariffTable
                        data={JSON.parse(
                          sortedData[activeVehicle]?.properties?.table?.rich_text[0]?.plain_text
                        )}
                      />
                    ) : (
                      <div className="no-pricing">
                        <i className="fas fa-info-circle"></i>
                        <p>Pricing information not available</p>
                      </div>
                    )}
                  </div>

                  {/* Disclaimer */}
                  <div className="pricing-disclaimer">
                    <i className="fas fa-info-circle"></i>
                    <p>
                      <strong>Note:</strong> Rates include toll, parking, and driver allowance. 
                      Subject to change based on availability, fuel rates, and seasonal periods.
                    </p>
                  </div>
                </div>

                {/* Vehicle Image */}
                <div className="col-lg-5">
                  <div className="featured-vehicle-image">
                    <div className="image-frame">
                      <img
                        src={sortedData[activeVehicle]?.properties?.images?.files[0]?.file?.url}
                        alt={sortedData[activeVehicle]?.properties?.Headline?.rich_text[0]?.plain_text}
                      />
                    </div>
                    <div className="image-badge">
                      <i className="fas fa-star"></i>
                      <span>Popular Choice</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="panel-footer">
              <div className="footer-features">
                <div className="footer-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>24/7 Support</span>
                </div>
                <div className="footer-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Professional Drivers</span>
                </div>
                <div className="footer-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Clean Vehicles</span>
                </div>
              </div>
              <button className="book-now-btn">
                <span>Book This Vehicle</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default TariffComponent;
