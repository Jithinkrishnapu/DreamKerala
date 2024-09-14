import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { galleryItems } from "@/src/utils/constants";
const Gallery = () => {
  return (
    <Layout>
      {/*====== Start Gallery Section ======*/}
      <section className="gallery-area pt-150 pb-70">
        <div className="container">
          <div className="row">
            {galleryItems.map((item, index) => (
              <GalleryItem key={index} {...item} />
            ))}
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            {/*=== Single Gallery Item ===*/}
          </div>
        </div>
      </section>
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default Gallery;

const GalleryItem = ({ imgSrc, altText, linkHref, colClasses }) => (
  <div className={colClasses}>
    <div className="single-gallery-item mb-30 wow fadeInUp">
      <div className="gallery-img">
        <img src={imgSrc} alt={altText} />
        <div className="hover-overlay">
          <a href={linkHref} className="icon-btn img-popup">
            <i className="far fa-plus" />
          </a>
        </div>
      </div>
    </div>
  </div>
);
