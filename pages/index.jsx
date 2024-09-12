import BookingForm from "@/src/components/bookingform/BookingForm";
import Features from "@/src/components/features";
import FormModal from "@/src/components/modal/ModalComponent";
import GallerySection from "@/src/components/GallerySection";
import Popupform from "@/src/components/popupform/Popupform";
import SliderComponent from "@/src/components/sliderComponent/SliderComponent";
import TariffComponent from "@/src/components/tariffComponent/TariffComponent";
import Layout from "@/src/layout/Layout";
import {
  home1Slider,
  sliderActive3Item,
  sliderActive4Item,
  testimonialSliderOne,
} from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";

import Slider from "react-slick";
import ModalComponent from "@/src/components/modal/ModalComponent";
import BoatBanner from "@/src/components/boatBanner/BoatBanner";
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const Index = () => {
  const [showModal, setShowModal] = useState(false);

  // const handleClose = () => setShow(false);
  const handleShowModal = () => setShowModal(true);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      try {
        const response = await fetch('/api/carousel');
        if (!response.ok) {
          throw new Error('Error fetching carousel data');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    });
  }, [startTransition]);

  if(isPending){
    // console.log(isPending)
    <div>Loading......</div>
  }

  return (
    <Layout header={1} setShowModal={(val)=>setShowModal(val)} noFooter>
      {/*====== Start Hero Section ======*/}
      <section className="hero-section">
        {/*=== Hero Wrapper ===*/}
        <div className="hero-wrapper black-bg">
          {/*=== Hero Slider ===*/}
          <Slider {...home1Slider} className="hero-slider-one">
            {/*=== Single Slider ===*/}
            {data?.map((val,index)=>{
              return (
                <div className="single-slider">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white">
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        {val?.properties?.Headline?.rich_text[0]?.plain_text}
                      </h1>
                      <div onClick={handleShowModal} className="text-button d-flex align-items-center">
                        <p data-animation="fadeInLeft" data-delay=".5s">
                         {val?.properties?.Description?.rich_text[0]?.plain_text}
                        </p>
                        <div
                          className="hero-button"
                          data-animation="fadeInRight"
                          data-delay=".6s"
                        >
                          <Link legacyBehavior href="/about">
                            <a className="main-btn primary-btn">
                              Explore More
                              <i className="fas fa-paper-plane" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    {/*=== Hero Image ===*/}
                    <div className="hero-image" data-animation="fadeInRight">
                      <img
                        loading="lazy"
                        src={val?.properties?.images?.files[0]?.file?.url}
                        alt="Hero Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
              )
            })}
            {/*=== Single Slider ===*/}
          </Slider>
        </div>
      </section>
      {/*====== End Hero Section ======*/}

      {/*====== Modal Popup form  ======*/}

      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Popupform />
      </ModalComponent>
      
      {/*====== Modal Popup form  ======*/}

      {/*====== End Hero Section ======*/}
      {/*====== Start About Section ======*/}

      <section className="about-section pt-100">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-9">
              {/*=== About Content Box ===*/}
              <div className="about-content-box text-center mb-55 wow fadeInDown">
                <div className="section-title mb-30">
                  <span className="sub-title">Dream Kerala</span>
                  <h2>Your Gateway to Kerala's Enchanting Wonders</h2>
                </div>
                <p>
                  Discover the magic of Kerala with DreamKerala, your premier
                  travel partner for unforgettable experiences in God's Own
                  Country. Whether you're seeking serene backwaters, lush hill
                  stations, or vibrant cultural adventures, we offer bespoke
                  travel packages designed to showcase the best of Kerala.
                </p>
              </div>
            </div>
          </div>
          <SliderComponent setShowModal={(val)=>setShowModal(val)}  />
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Booking Section ======*/}
      <BookingForm />
      {/*====== End Hero Section ======*/}
      {/*====== Start Activity Section ======*/}

      <TariffComponent />

      {/*====== End Activity Section ======*/}
      {/*====== Start Services Section ======*/}
      <section className="services-seciton pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Popular Services</span>
                <h2>Amazing Adventure Camping Services for Enjoyed</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Services Section ======*/}
      {/*====== Start Features Section ======*/}

      {/*====== End Features Section ======*/}
      {/*====== Start CTA Section ======*/}
      <div className="mb-40">
        <BoatBanner />
      </div>
      {/*====== End CTA Section ======*/}
      {/*====== Start Fact Section ======*/}
      <div className="container">
        <Features />
      </div>
      {/*====== End Fact Section ======*/}
      {/*====== Start Testimonial Section ======*/}

      {/*====== End Testimonial Section ======*/}
      {/*====== Start Blog Section ======*/}

      {/*====== End Blog Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <GallerySection />
      {/*====== End Gallery Section ======*/}
      <footer className="main-footer  pt-230">
        <div className="container">
          {/*=== Footer Top ===*/}
          <div className="footer-top pt-40 wow fadeInUp">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                {/*=== Single Info Item ===*/}
                <div className="single-info-item mb-40">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="info">
                    <span className="title">Location</span>
                    <p>Near Kochi Airport, Thrissur Guruvayoor.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 me-4">
                {/*=== Single Info Item ===*/}
                <div className="single-info-item mb-40">
                  <div className="icon">
                    <i className="far fa-envelope-open" />
                  </div>
                  <div className="info">
                    <span className="title">Email</span>
                    <p>
                      <a href="mailto:support@gmail.com">
                        Dreamkeralaholidays24@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Single Info Item ===*/}
                <div className="single-info-item mb-40">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="info">
                    <span className="title">Hotline</span>
                    <p>
                      <a href="tel:+000(123)456898">+91 90484 59086</a>
                      <a href="tel:+000(123)456898">+91 95671 32777</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Social Box ===*/}
                <div className="social-box mb-40 float-lg-start">
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*=== Footer Widget ===*/}
          <div className="footer-widget-area pt-75 pb-30">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                {/*=== Footer Widget ===*/}
                <div className="footer-widget about-company-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">About</h4>
                  <div className="footer-content">
                    <p>
                      Discover effortless travel with our top-notch cab rentals
                      and exciting tour packages, tailored for you.
                    </p>
                    <a href="#" className="footer-logo">
                      <img
                        src="assets/images/logo/logo-test.png"
                        alt="Site Logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                {/*=== Footer Widget ===*/}
                <div className="footer-widget service-nav-widget mb-40 pl-lg-70 wow fadeInDown">
                  <h4 className="widget-title">Services</h4>
                  <div className="footer-content">
                    <ul className="footer-widget-nav">
                      <li>
                        <a href="#">Caravan Soler Tent</a>
                      </li>
                      <li>
                        <a href="#">Family Tent Camping</a>
                      </li>
                      <li>
                        <a href="#">Classic Tent Camping</a>
                      </li>
                      <li>
                        <a href="#">Wild Tent Camping</a>
                      </li>
                      <li>
                        <a href="#">Small Cabin Wood</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div style={{ color: "white" }} className="col-lg-4 col-md-6">
                {/*=== Footer Widget ===*/}
                <div className="footer-widget footer-newsletter-widget mb-40 pl-lg-100 wow fadeInUp">
                  <h4 className="widget-title">Newsletter</h4>
                  <div className="footer-content">
                    <p>
                      Which of us ever undertake laborious physical exercise
                      except obtain
                    </p>
                    <form>
                      <div className="form_group">
                        <label>
                          <i className="far fa-paper-plane" />
                        </label>
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Footer Copyright ===*/}
          <div className="footer-copyright">
            <div className="row">
              <div className="col-lg-6">
                {/*=== Footer Text ===*/}
                <div className="footer-text">
                  <p>
                    Copyright@ 2024{" "}
                    <span style={{ color: "black" }}>Dream Holidays</span>, All
                    Right Reserved
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                {/*=== Footer Nav ===*/}
                <div className="footer-nav float-lg-end">
                  <ul>
                    <li>
                      <a href="#">Setting &amp; privacy</a>
                    </li>
                    <li>
                      <a href="#">Faqs</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
};
export default Index;
