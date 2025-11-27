import BookingForm from "../src/components/bookingform/BookingForm";
import Features from "../src/components/Features";
import Popupform from "@/src/components/popupform/Popupform";
import TariffComponent from "@/src/components/tariffComponent/TariffComponent";
import Layout from "@/src/layout/Layout";
import { useLayoutEffect, useState, useTransition } from "react";
import ModalComponent from "@/src/components/modal/ModalComponent";
import BoatBanner from "../src/components/boatBanner/BoatBanner";
import PopularServices from "@/src/components/popularServices/PopularServices";
import Footer from "@/src/components/footer/Footer";
import ModernHero from "@/src/components/hero/ModernHero";
import ModernAbout from "@/src/components/about/ModernAbout";

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
      {/*====== Start Modern Hero Section ======*/}
      <ModernHero data={data} setShowModal={setShowModal} />
      {/*====== End Modern Hero Section ======*/}

      {/*====== Modal Popup form  ======*/}

      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Popupform />
      </ModalComponent>

      {/*====== Modal Popup form  ======*/}

      <ModernAbout setShowModal={setShowModal} />
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
          <a style={{width:'fit-content'}} href="https://api.whatsapp.com/send?phone=919567132777">
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
