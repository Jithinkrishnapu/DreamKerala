import ModalComponent from "@/src/components/modal/ModalComponent";
import PageBanner from "@/src/components/PageBanner";
import Popupform from "@/src/components/popupform/Popupform";
import Layout from "@/src/layout/Layout";
import { galleryItems } from "@/src/utils/constants";
import { useEffect, useState, useTransition } from "react";
const Gallery = () => {
  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/gallery");
        if (!response.ok) {
          throw new Error("Error fetching carousel data");
        }
        const result = await response.json();
        setData(result[0]);
      } catch (err) {
        setError(err.message);
      }
    });
  }, [startTransition]);

  return (
    <Layout header={1} setShowModal={(val) => setShowModal(val)}>
      {/*====== Start Gallery Section ======*/}
      <section className="gallery-area pt-150 pb-70">
        <div className="container">
          <div className="row">
            {data?.properties?.images?.files?.map((item, index) => (
              <GalleryItem key={index} imgSrc={item?.file.url} {...item} />
            ))}
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            {/*=== Single Gallery Item ===*/}
          </div>
        </div>
      </section>
      {/*====== End Gallery Section ======*/}

      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Popupform />
      </ModalComponent>
    </Layout>
  );
};
export default Gallery;

const GalleryItem = ({ imgSrc, altText, linkHref, colClasses }) => (
  <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="single-gallery-item mb-30 wow fadeInUp">
      <div className="gallery-img">
        <img loading="lazy" src={imgSrc} alt={altText} />
        <div className="hover-overlay">
          <a href={imgSrc} className="icon-btn img-popup">
            <i className="far fa-plus" />
          </a>
        </div>
      </div>
    </div>
  </div>
);
