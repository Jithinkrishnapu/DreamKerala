import BoatBanner from "@/src/components/boatBanner/boatBanner";
import BookingForm from "@/src/components/bookingform/BookingForm";
import GallerySection from "@/src/components/GallerySection";
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

import Slider from "react-slick";
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout header={1} noFooter>
      {/*====== Start Hero Section ======*/}
      <section className="hero-section">
        {/*=== Hero Wrapper ===*/}
        <div className="hero-wrapper black-bg">
          {/*=== Hero Slider ===*/}
          <Slider {...home1Slider} className="hero-slider-one">
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white">
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Travel &amp; Adventure Camping
                      </h1>
                      <div className="text-button d-flex align-items-center">
                        <p data-animation="fadeInLeft" data-delay=".5s">
                          Nunc et dui nullam aliquam eget velit. Consectetur
                          nulla convallis viverra quisque eleifend
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
                        src="assets/images/hero/hero-one_img-1.jpg"
                        alt="Hero Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white">
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Travel &amp; Adventure Tour
                      </h1>
                      <div className="text-button d-flex align-items-center">
                        <p data-animation="fadeInLeft" data-delay=".5s">
                          Nunc et dui nullam aliquam eget velit. Consectetur
                          nulla convallis viverra quisque eleifend
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
                        src="assets/images/hero/hero-one_img-2.jpg"
                        alt="Hero Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
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
                  <h2>
                    Your Gateway to Kerala's Enchanting
                    Wonders
                  </h2>
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
          <SliderComponent/>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Booking Section ======*/}
      <BookingForm/>
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
          <Slider
            {...sliderActive3Item}
            className="slider-active-3-item wow fadeInUp"
          >
            {/*=== Single Service Item ===*/}
            <div className="single-service-item mb-40">
              <div className="content">
                <h3 className="title">
                  <Link legacyBehavior href="/tour-details">
                    <a>Classic Tents</a>
                  </Link>
                </h3>
                <p>
                  Sit amet consecteturauris natoque name pellentue augue mattis
                  faucibus
                </p>
                <div className="meta">
                  <span className="icon">
                    <i className="flaticon-blanket" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-cat" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-tent" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-fire" />
                  </span>
                </div>
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
              <div className="img-holder">
                <img
                  src="assets/images/service/service-1.jpg"
                  alt="Service Image"
                />
              </div>
            </div>
            {/*=== Single Service Item ===*/}
            <div className="single-service-item mb-40">
              <div className="content">
                <h3 className="title">
                  <Link legacyBehavior href="/tour-details">
                    Glamping Cabin
                  </Link>
                </h3>
                <p>
                  Sit amet consecteturauris natoque name pellentue augue mattis
                  faucibus
                </p>
                <div className="meta">
                  <span className="icon">
                    <i className="flaticon-blanket" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-cat" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-tent" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-fire" />
                  </span>
                </div>
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
              <div className="img-holder">
                <img
                  src="assets/images/service/service-2.jpg"
                  alt="Service Image"
                />
              </div>
            </div>
            {/*=== Single Service Item ===*/}
            <div className="single-service-item mb-40">
              <div className="content">
                <h3 className="title">
                  <Link legacyBehavior href="/tour-details">
                    RV Luxury Tent
                  </Link>
                </h3>
                <p>
                  Sit amet consecteturauris natoque name pellentue augue mattis
                  faucibus
                </p>
                <div className="meta">
                  <span className="icon">
                    <i className="flaticon-blanket" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-cat" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-tent" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-fire" />
                  </span>
                </div>
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
              <div className="img-holder">
                <img
                  src="assets/images/service/service-3.jpg"
                  alt="Service Image"
                />
              </div>
            </div>
            {/*=== Single Service Item ===*/}
            <div className="single-service-item mb-40">
              <div className="content">
                <h3 className="title">
                  <Link legacyBehavior href="/tour-details">
                    RV Luxury Tent
                  </Link>
                </h3>
                <p>
                  Sit amet consecteturauris natoque name pellentue augue mattis
                  faucibus
                </p>
                <div className="meta">
                  <span className="icon">
                    <i className="flaticon-blanket" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-cat" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-tent" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-fire" />
                  </span>
                </div>
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
              <div className="img-holder">
                <img
                  src="assets/images/service/service-2.jpg"
                  alt="Service Image"
                />
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Services Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-rabbit" />
                </div>
                <div className="text">
                  <h4 className="title">Best Security</h4>
                  <p>
                    we denounce with righteous indignation and dislike men who
                    are so beguiled
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-wifi-router" />
                </div>
                <div className="text">
                  <h4 className="title">Free Internet</h4>
                  <p>
                    we denounce with righteous indignation and dislike men who
                    are so beguiled
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-solar-energy" />
                </div>
                <div className="text">
                  <h4 className="title">Solar Energy</h4>
                  <p>
                    we denounce with righteous indignation and dislike men who
                    are so beguiled
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-cycling" />
                </div>
                <div className="text">
                  <h4 className="title">Mountain Biking</h4>
                  <p>
                    we denounce with righteous indignation and dislike men who
                    are so beguiled
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-fishing" />
                </div>
                <div className="text">
                  <h4 className="title">Swimming &amp; Fishing </h4>
                  <p>
                    we denounce with righteous indignation and dislike men who
                    are so beguiled
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-gym" />
                </div>
                <div className="text">
                  <h4 className="title">GYM and Yoga</h4>
                  <p>
                    we denounce with righteous indignation and dislike men who
                    are so beguiled
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start CTA Section ======*/}
      <BoatBanner/>
      {/*====== End CTA Section ======*/}
      {/*====== Start Fact Section ======*/}
      
      {/*====== End Fact Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Blog Section ======*/}
      
      {/*====== End Blog Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <GallerySection />
      {/*====== End Gallery Section ======*/}
      <footer className="main-footer black-bg pt-230">
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
                    <p>55 Main Street, Australia</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Single Info Item ===*/}
                <div className="single-info-item mb-40">
                  <div className="icon">
                    <i className="far fa-envelope-open" />
                  </div>
                  <div className="info">
                    <span className="title">Email</span>
                    <p>
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
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
                      <a href="tel:+000(123)456898">+000 (123) 456 898</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Social Box ===*/}
                <div className="social-box mb-40 float-lg-end">
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
                      To take trivial example which us ever undertakes laborious
                      physica exercise except obsome
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
                    <ul className="footer-widget-nav">
                      <li>
                        <a href="#">Need a Career ?</a>
                      </li>
                      <li>
                        <a href="#">Latest News &amp; Blog</a>
                      </li>
                      <li>
                        <a href="#">Core Features</a>
                      </li>
                      <li>
                        <a href="#">Meet Our teams</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
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
                    Copy@ 2023 <span style={{ color: "#F7921E" }}>GoWilds</span>
                    , All Right Reserved
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
