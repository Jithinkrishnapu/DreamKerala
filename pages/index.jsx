import BookingForm from "../src/components/bookingform/BookingForm";
import Features from "../src/components/Features";
import GallerySection from "@/src/components/GallerySection";
import Popupform from "@/src/components/popupform/Popupform";
import SliderComponent from "@/src/components/sliderComponent/SliderComponent";
import TariffComponent from "@/src/components/tariffComponent/TariffComponent";
import Layout from "@/src/layout/Layout";
import { home1Slider } from "@/src/sliderProps";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useLayoutEffect, useState, useTransition } from "react";

import Slider from "react-slick";
import ModalComponent from "@/src/components/modal/ModalComponent";
import BoatBanner from "../src/components/boatBanner/BoatBanner";
import PopularServices from "@/src/components/popularServices/PopularServices";
import Footer from "@/src/components/footer/Footer";
import HeroSection from "./DefaultHeroSection";
import HoverPlayVideo from "@/src/components/HoverToPlayVideo";
import ExitIntentPopup from "@/src/components/exitIntent/ExitIntentPopup";
import Testimonials from "@/src/components/testimonials/Testimonials";
import FAQ from "@/src/components/faq/FAQ";

const Index = () => {
  const [showModal, setShowModal] = useState(false);

  // const handleClose = () => setShow(false);
  const handleShowModal = () => setShowModal(true);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  useLayoutEffect(() => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/carousel");
        if (!response.ok) {
          throw new Error("Error fetching carousel data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    });
  }, [startTransition]);

  return (
    <Layout header={1} setShowModal={(val) => setShowModal(val)} noFooter>
      <Head>
        <title>Dream Kerala Holidays | Tour Packages & Vehicle Rentals in Kerala</title>
        <meta name="description" content="Book Kerala tour packages, houseboat rides, taxi services & vehicle rentals. Explore backwaters, hill stations & beaches with Dream Kerala Holidays, Kochi." />
        <meta property="og:title" content="Dream Kerala Holidays | Tour Packages & Vehicle Rentals" />
        <meta property="og:description" content="Book Kerala tour packages, houseboat rides, taxi services & vehicle rentals. Explore God's Own Country with Dream Kerala Holidays." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://dreamkeralaholidays.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Dream Kerala Holidays",
              "description": "Kerala tour packages, vehicle rentals, taxi services, houseboat bookings, camping and trekking experiences.",
              "url": "https://dreamkeralaholidays.com",
              "telephone": "+919567132777",
              "email": "Dreamkeralaholidays24@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5C34+W78, Kanjoor-Airport Rd",
                "addressLocality": "Nedumbassery",
                "addressRegion": "Kerala",
                "postalCode": "683111",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 10.154712,
                "longitude": 76.403130
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              },
              "priceRange": "$$",
              "sameAs": []
            })
          }}
        />
      </Head>
      {/*====== Start Hero Section ======*/}
      <section className="hero-section">
        {/*=== Hero Wrapper ===*/}
        <div className="hero-wrapper black-bg">
          {/*=== Hero Slider ===*/}
          <Slider {...home1Slider} className="hero-slider-one">
            {/*=== Single Slider ===*/}
            {data?.length !== 0 ? data?.map((val, index) => {
              return (
                <div className="single-slider">
                  <div className="container-fluid">
                    <div className="row align-items-center">
                      <div className="col-xl-6">
                        {/*=== Hero Content ===*/}
                        <div className="hero-content text-white">
                          <h1 data-animation="fadeInDown" data-delay=".4s">
                            {
                              val?.properties?.Headline?.rich_text[0]
                                ?.plain_text
                            }
                          </h1>
                          <div className="text-button d-flex align-items-center">
                            <p data-animation="fadeInLeft" data-delay=".5s">
                              {
                                val?.properties?.Description?.rich_text[0]
                                  ?.plain_text
                              }
                            </p>
                            <div
                              className="hero-button"
                              data-animation="fadeInRight"
                              data-delay=".6s"
                            >
                              {val?.properties?.slug?.rich_text[0]
                                ?.plain_text ? (
                                <Link
                                  legacyBehavior
                                  href={`/${val?.properties?.slug?.rich_text[0]?.plain_text}`}
                                >
                                  <a className="main-btn primary-btn">
                                    Explore More
                                    <i className="fas fa-paper-plane" />
                                  </a>
                                </Link>
                              ) : (
                                <div onClick={() => setShowModal(true)}>
                                  <a className="main-btn primary-btn">
                                    Explore More
                                    <i className="fas fa-paper-plane" />
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        {/*=== Hero Image ===*/}
                        <div
                          className="hero-image"
                          data-animation="fadeInRight"
                        >
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
              );
            }):
            
            <HeroSection setShowModal={setShowModal} />
            
            
            }
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

      <section className="about-section pt-100">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-9">
              {/*=== About Content Box ===*/}
              <div className="about-content-box text-center wow fadeInDown">
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

          <HoverPlayVideo/>

          <SliderComponent setShowModal={(val) => setShowModal(val)} />
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Booking Section ======*/}
      <BookingForm />
      {/*====== End Hero Section ======*/}
      {/*====== Start Activity Section ======*/}

      <TariffComponent />

      {/*====== Start Popular Services Section ======*/}

      <PopularServices />

      {/*====== End Popular Services Section ======*/}

      {/*====== Start CTA Section ======*/}
      <div className="mb-40">
        <BoatBanner onClick={() => setShowModal(true)} />
      </div>
      {/*====== Start Fact Section ======*/}
      <div className="container">
        <Features />
      </div>

      {/*====== Start Testimonials Section ======*/}
      <Testimonials />

      {/*====== Start FAQ Section ======*/}
      <FAQ />

      {/*====== Start Gallery Section ======*/}
      {/* <GallerySection /> */}
      {/*====== End Gallery Section ======*/}

      <div  className="">
        <div  className="fixed-bottom p-2 text-end d-flex gap-2 justify-content-end align-items-end text-end flex-sm-row flex-column">
          <a style={{width:'fit-content'}} href="tel:+91 95671 32777" onClick={() => { if(typeof window !== 'undefined' && window.fbq) fbq('track', 'Contact'); }}>
            <img
              style={{ height: "70px" }}
              className=""
              src="assets/images/icon/phone-call.svg"
              alt="Call Dream Kerala Holidays"
            />
          </a>
          <a style={{width:'fit-content'}} href="https://api.whatsapp.com/send?phone=919567132777&text=Hi%2C%20I%27m%20interested%20in%20your%20Kerala%20tour%20packages.%20Please%20share%20details." onClick={() => { if(typeof window !== 'undefined' && window.fbq) fbq('track', 'Contact'); }}>
            <img
              style={{ height: "70px" }}
              src="assets/images/icon/whatsapp.svg"
              alt="WhatsApp Dream Kerala Holidays"
            />
          </a>
        </div>
      </div>
      <Footer />
      <ExitIntentPopup />
    </Layout>
  );
};
export default Index;
