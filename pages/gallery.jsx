import ModalComponent from "@/src/components/modal/ModalComponent";
import Popupform from "@/src/components/popupform/Popupform";
import Layout from "@/src/layout/Layout";
import { useEffect, useState, useTransition } from "react";

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/gallery");
        if (!response.ok) {
          throw new Error("Error fetching gallery data");
        }
        const result = await response.json();
        setData(result[0]);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    });
  }, [startTransition]);

  const images = data?.properties?.images?.files || [];

  return (
    <Layout header={1} setShowModal={(val) => setShowModal(val)}>
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <div className="hero-badge">
                <i className="fas fa-camera"></i>
                <span>Our Gallery</span>
              </div>
              <h1 className="hero-title">
                Moments from
                <span className="title-gradient"> God's Own Country</span>
              </h1>
              <p className="hero-description">
                Explore the breathtaking beauty of Kerala through our curated collection 
                of stunning photographs and memorable experiences
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fas fa-images"></i>
                  </div>
                  <div className="stat-info">
                    <div className="stat-number">{images.length}+</div>
                    <div className="stat-label">Photos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="modern-gallery-section">
        <div className="container">
          {isLoading ? (
            <div className="gallery-loading">
              <div className="loading-spinner"></div>
              <p>Loading gallery...</p>
            </div>
          ) : (
            <div className="gallery-grid">
              {images.map((item, index) => (
                <div
                  key={index}
                  className={`gallery-item ${index % 7 === 0 ? 'large' : ''}`}
                  onClick={() => setSelectedImage(item?.file?.url)}
                >
                  <img
                    src={item?.file?.url}
                    alt={`Kerala Gallery ${index + 1}`}
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <div className="overlay-content">
                      <i className="fas fa-search-plus"></i>
                      <span>View Image</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <button className="modal-close" onClick={() => setSelectedImage(null)}>
            <i className="fas fa-times"></i>
          </button>
          <img src={selectedImage} alt="Full size" />
        </div>
      )}

      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Popupform />
      </ModalComponent>
    </Layout>
  );
};

export default Gallery;
