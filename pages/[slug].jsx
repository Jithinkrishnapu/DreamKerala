import GallerySection from "@/src/components/GallerySection";
import ModalComponent from "@/src/components/modal/ModalComponent";
import PageBanner from "@/src/components/PageBanner";
import PopularActivities from "@/src/components/popularActivities/PopularActivities";
import Popupform from "@/src/components/popupform/Popupform";
import VehicleTable from "@/src/components/VehicleTable";
import Layout from "@/src/layout/Layout";
import { sliderActive3Item, sliderActive3ItemDot } from "@/src/sliderProps";
import { Client } from "@notionhq/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState, useTransition } from "react";
import { Row } from "react-bootstrap";
import Slider from "react-slick";

const DestinationDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const { slug } = router.query;

  console.log(slug);

  useLayoutEffect(() => {
    startTransition(async () => {
      try {
        const response = await fetch(`/api/detailById?slug=${slug}`);
        if (!response.ok) {
          throw new Error("Error fetching carousel data");
        }
        const result = await response.json();
        setDetails(result[0]);
      } catch (err) {
        setError(err.message);
      }
    });
  }, [startTransition]);

  return (
    <Layout header={1} setShowModal={(val) => setShowModal(val)} extraClass={"pt-160"}>
      {/* <PageBanner pageTitle={"Destination Details"} /> */}
      {/*====== Start Destination Details Section ======*/}
      <section className="destination-details-section pt-100 pb-70">
        <div className="container">
          <div className="destination-details-wrapper">
            <div className="destination-info wow fadeInUp">
              <h3 className="title">
                {" "}
                {details?.properties?.Headline?.rich_text[0]?.plain_text}
              </h3>
              <div className="meta">
                <span className="location">
                  <i className="fas fa-map-marker-alt" />
                  {details?.properties?.Location?.rich_text[0]?.plain_text}
                </span>
                {/* <ul className="ratings">
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
                </ul> */}
              </div>
              <p>
                {details?.properties?.Description?.rich_text[0]?.plain_text}
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <img
                    src={details?.properties?.images?.files[0]?.file?.url}
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
                <div className="col-lg-6">
                  <img
                    src={details?.properties?.images?.files[1]?.file?.url}
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
              </div>
              <h3>Why Choose Dream Kerala</h3>
              <p>{details?.properties?.why_us?.rich_text[0]?.plain_text}</p>
              {/* <ul className="features-list mb-40">
                {details?.properties?.Activities?.multi_select?.map((val) => (
                  <li>
                    <span>
                      <i className="fas fa-badge-check" />
                      {val?.name}
                    </span>
                  </li>
                ))}
              </ul> */}
              <div className="col-lg-12 my-4">
                <div className="form_group text-start">
                  <button onClick={()=>setShowModal(true)} type="submit" className="main-btn primary-btn">
                    Book Now
                    <i className="fas fa-paper-plane" />
                  </button>
                </div>
              </div>
            </div>

            <PopularActivities images={details?.properties?.Activities_Images?.files} titles={details?.properties?.Activities?.multi_select} />

            <div>
              { details?.properties?.table?.rich_text?.length ? <VehicleTable data={JSON.parse(details?.properties?.table?.rich_text[0]?.plain_text)} /> : <></>}
            </div>

            <Row className="" >
            {details?.properties?.Gallery?.files?.map((item, index) => (
            <div className="col-lg-4 gallery-img mb-3">
               <img width={'100%'} height={'100%'} src={item?.file?.url} alt={"image_"+index} />
            </div>
            ))}
          </Row>
            
          </div>
        </div>
      </section>
      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Popupform />
      </ModalComponent>
    </Layout>
  );
};
export default DestinationDetails;
