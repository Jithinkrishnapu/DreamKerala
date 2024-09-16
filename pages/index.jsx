import BookingForm from "../src/components/bookingform/BookingForm";
import Features from "../src/components/Features";
import GallerySection from "@/src/components/GallerySection";
import Popupform from "@/src/components/popupform/Popupform";
import SliderComponent from "@/src/components/sliderComponent/SliderComponent";
import TariffComponent from "@/src/components/tariffComponent/TariffComponent";
import Layout from "@/src/layout/Layout";
import { home1Slider } from "@/src/sliderProps";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState, useTransition } from "react";

import Slider from "react-slick";
import ModalComponent from "@/src/components/modal/ModalComponent";
import BoatBanner from "../src/components/boatBanner/BoatBanner";
import PopularServices from "@/src/components/popularServices/PopularServices";
import Footer from "@/src/components/footer/Footer";

import WhatsappIcon from "@/public/assets/images/icon/whatsapp.svg";

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

  if (isPending) {
    // console.log(isPending)
    <div>Loading......</div>;
  }

  return (
    <Layout header={1} setShowModal={(val) => setShowModal(val)} noFooter>
      {/*====== Start Hero Section ======*/}
      <section className="hero-section">
        {/*=== Hero Wrapper ===*/}
        <div className="hero-wrapper black-bg">
          {/*=== Hero Slider ===*/}
          <Slider {...home1Slider} className="hero-slider-one">
            {/*=== Single Slider ===*/}
            {data?.map((val, index) => {
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

      {/*====== Start Gallery Section ======*/}
      {/* <GallerySection /> */}
      {/*====== End Gallery Section ======*/}

      <div  className="">
        <div  className="fixed-bottom p-2 text-end d-flex gap-2 justify-content-end align-items-end text-end flex-sm-row flex-column">
          <a style={{width:'fit-content'}} href="tel:+91 95671 32777">
            <img
              style={{ height: "70px" }}
              className=""
              src="assets/images/icon/phone-call.svg"
              alt=""
            />
          </a>
          <a style={{width:'fit-content'}} href="https://api.whatsapp.com/send?phone=919048459086">
            <img
              style={{ height: "70px" }}
              src="assets/images/icon/whatsapp.svg"
              alt=""
            />
          </a>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
export default Index;
