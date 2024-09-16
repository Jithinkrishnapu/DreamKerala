import ModalComponent from "@/src/components/modal/ModalComponent";
import PageBanner from "@/src/components/PageBanner";
import Popupform from "@/src/components/popupform/Popupform";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout header={1} setShowModal={(val) => setShowModal(val)} extraClass={"pt-160"}>
      {/* <PageBanner pageTitle={"About Us"} /> */}
      
      {/*====== Start We Section ======*/}
      <section className="who-we-section pt-100">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6 order-2 order-lg-1 mt-5">
              {/*=== We Image Box ===*/}
              <div className="we-image-box text-center text-lg-left wow fadeInDown">
                <img
                  src="assets/images/gallery/we-1.jpg"
                  className="radius-top-left-right-288"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 mt-5">
              {/*=== We Content Box ===*/}
              <div className="we-one_content-box">
                <div className="section-title mb-30 wow fadeInUp">
                  <span className="sub-title">Who We Are</span>
                  <h2>Dream Kerala Holidays &amp; Travels</h2>
                </div>
                <p className="wow fadeInDown">
                Dream Kerala Holidays offers premier vehicle rental services and curated tour packages to help you explore the enchanting beauty of Kerala. Whether you're looking to rent a vehicle for a leisurely road trip or seeking a complete tour experience, we provide tailored solutions to make your journey seamless and memorable.
                </p>
                <div className="skill-wrapper wow fadeInUp">
                  <div className="single-skill-circle text-center">
                    <div className="inner-circle">
                      <div className="line" />
                      <span className="number">99%</span>
                    </div>
                    <h5>Satisfied Clients</h5>
                  </div>
                  <div className="single-skill-circle text-center">
                    <div className="inner-circle">
                      <div className="line" />
                      <span className="number">93%</span>
                    </div>
                    <h5>Success Rate</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End We Section ======*/}
      {/*====== Start Team Section ======*/}
      
      {/*====== End Team Section ======*/}
      {/*====== Start What We Section ======*/}
      <section className="we-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-6">
              <div className="we-content-box mb-10 wow fadeInLeft">
                <div className="section-title mb-30">
                  <span className="sub-title">Who We Are</span>
                  <h2>Great Opportunity For Adventure &amp; Travels</h2>
                </div>
                <div className="features-list_one">
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-helmet" />
                      </div>
                    </div>
                    <div className="content">
                      <h4>Safety First Always</h4>
                      <p>
                      Your safety is our top priority. We ensure all our vehicles and tour services adhere to the highest safety standards for a worry-free experience.
                      </p>
                    </div>
                  </div>
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-best-price" />
                      </div>
                    </div>
                    <div className="content">
                      <h4>Low Price &amp; Friendly</h4>
                      <p>
                      Enjoy competitive rates and exceptional service. We offer affordable tour packages and vehicle rentals without compromising on quality.
                      </p>
                    </div>
                  </div>
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-travel" />
                      </div>
                    </div>
                    <div className="content">
                      <h4>Trusted Travel Guide</h4>
                      <p>
                      Rely on our expert guides for an authentic travel experience. We provide insightful, reliable, and engaging tours tailored to your interests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="we-two_image-box mb-20">
                <div className="row align-items-end">
                  <div className="col-md-6">
                    <div className="we-image mb-30 wow fadeInLeft">
                      <img
                        src="assets/images/gallery/we-3.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="we-image mb-30 wow fadeInRight">
                      <img
                        src="assets/images/gallery/we-4.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="we-image mb-30 pr-lg-30 text-md-end wow fadeInDown">
                      <img
                        src="assets/images/gallery/we-5.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End What We Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section
        className="cta-bg overlay bg_cover pt-150 pb-150"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*=== CTA Content Box ===*/}
              <div className="cta-content-box text-center text-white wow fadeInDown">
                <h2 className="mb-35">
                  Ready to Travel With Real Adventure and Enjoy Natural
                </h2>
                <Link legacyBehavior href="/about">
                  <a className="main-btn primary-btn">
                    Book Now
                    <i className="far fa-paper-plane" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      
      {/*====== Start Partners Section ======*/}
      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Popupform />
      </ModalComponent>
    </Layout>
  );
};
export default About;
