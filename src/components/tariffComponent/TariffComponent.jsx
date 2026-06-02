import React, { useLayoutEffect, useState, useTransition } from "react";
import TariffTable from "./TariffTable";

function TariffComponent() {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [error, setError] = useState(null);
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
      } catch (err) {
        setError(err.message);
      }
    });
  }, [startTransition]);

  const sortedData = data?.sort(
    (a, b) =>
      a.properties.order?.rich_text[0]?.plain_text -
      b.properties.order?.rich_text[0]?.plain_text
  );

  const activeItem = sortedData[activeTab];

  return (
    <section className="tariff-section">
      <div className="container">
        <div className="tariff-header">
          <span className="tariff-badge">Affordable & Flexible Pricing</span>
          <h2>Explore Your Destination with Ease and Comfort</h2>
          <p>Choose your vehicle type and see transparent pricing — no hidden charges</p>
        </div>

        {/* Vehicle selector pills */}
        <div className="tariff-pills">
          {sortedData.map((tab, i) => (
            <button
              key={i}
              className={`tariff-pill ${i === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              {tab?.properties?.Headline?.rich_text[0]?.plain_text}
            </button>
          ))}
        </div>

        {/* Active vehicle content */}
        {activeItem && (
          <div className="tariff-content">
            <div className="tariff-content__left">
              <div className="tariff-vehicle-card">
                <img
                  src={activeItem?.properties?.images?.files[0]?.file?.url}
                  alt={activeItem?.properties?.Headline?.rich_text[0]?.plain_text}
                  className="tariff-vehicle-img"
                />
                <div className="tariff-vehicle-info">
                  <h3>{activeItem?.properties?.Headline?.rich_text[0]?.plain_text}</h3>
                  <div className="tariff-features">
                    <span><i className="fas fa-snowflake" /> AC</span>
                    <span><i className="fas fa-shield-alt" /> Insured</span>
                    <span><i className="fas fa-map-marker-alt" /> GPS Tracked</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tariff-content__right">
              {activeItem?.properties?.table?.rich_text?.length ? (
                <TariffTable
                  data={JSON.parse(
                    activeItem?.properties?.table?.rich_text[0]?.plain_text
                  )}
                />
              ) : (
                <p className="text-muted text-center p-4">Pricing coming soon</p>
              )}
              <p className="tariff-note">
                <i className="fas fa-info-circle" /> Rates include toll, parking & driver bata. Subject to change based on availability, fuel rates & seasonal demand.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default TariffComponent;
