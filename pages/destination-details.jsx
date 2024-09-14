import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { sliderActive3Item, sliderActive3ItemDot } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const DestinationDetails = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Destination Details"} />
      {/*====== Start Destination Details Section ======*/}
      <section className="destination-details-section pt-100 pb-70">
        <div className="container">
          <div className="destination-details-wrapper">
            <div className="destination-info wow fadeInUp">
              <h3 className="title">Floating Villa On Beach</h3>
              <div className="meta">
                <span className="location">
                  <i className="fas fa-map-marker-alt" />
                  Gaafu Dhaalu Atoll, Maldives
                </span>
                <ul className="ratings">
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <a href="#">(4.9)</a>
                  </li>
                </ul>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa
                quae abillo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam nisut aliquid
                exea commodi consequatur
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <img
                    src="assets/images/place/des-single-1.jpg"
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
                <div className="col-lg-6">
                  <img
                    src="assets/images/place/des-single-2.jpg"
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
              </div>
              <h3>Why Choose Maldives</h3>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue and equal
                blame belongs those who fail their duty through weakness of will
                which the same saying through shrinking from toil and pain.
              </p>
              <ul className="features-list mb-40">
                <li>
                  <span>
                    <i className="fas fa-badge-check" />
                    Family Camping
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fas fa-badge-check" />
                    Wild Camping
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fas fa-badge-check" />
                    Fishing
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fas fa-badge-check" />
                    Mountain Biking
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fas fa-badge-check" />
                    Free Wi-fi Internet
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fas fa-badge-check" />
                    Transportation
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fas fa-badge-check" />
                    Spa &amp; GYM
                  </span>
                </li>
              </ul>
              <div className="col-lg-12 my-4">
                  <div className="form_group text-start">
                    <button type="submit" className="main-btn primary-btn">
                      Book Now
                      <i className="fas fa-paper-plane" />
                    </button>
                  </div>
                </div>
            </div>
            <div className="gallery-area wow fadeInUp">
              <Slider {...sliderActive3Item} className="slider-active-3-item">
                {/*=== Single Gallery Item ===*/}
                <div className="single-gallery-item mb-30">
                  <div className="gallery-img">
                    <img
                      src="assets/images/gallery/gallery-1.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="assets/images/gallery/gallery-1.jpg"
                        className="icon-btn img-popup"
                      >
                        <i className="far fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
                {/*=== Single Gallery Item ===*/}
                <div className="single-gallery-item mb-30">
                  <div className="gallery-img">
                    <img
                      src="assets/images/gallery/gallery-2.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="assets/images/gallery/gallery-2.jpg"
                        className="icon-btn img-popup"
                      >
                        <i className="far fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
                {/*=== Single Gallery Item ===*/}
                <div className="single-gallery-item mb-30">
                  <div className="gallery-img">
                    <img
                      src="assets/images/gallery/gallery-3.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="assets/images/gallery/gallery-3.jpg"
                        className="icon-btn img-popup"
                      >
                        <i className="far fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
     
    </Layout>
  );
};
export default DestinationDetails;
