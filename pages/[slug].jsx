import GallerySection from "@/src/components/GallerySection";
import ModalComponent from "@/src/components/modal/ModalComponent";
import PageBanner from "@/src/components/PageBanner";
import PopularActivities from "@/src/components/popularActivities/PopularActivities";
import Popupform from "@/src/components/popupform/Popupform";
import VehicleTable from "@/src/components/VehicleTable";
import Layout from "@/src/layout/Layout";
import { sliderActive3Item, sliderActive3ItemDot } from "@/src/sliderProps";
import { Client } from "@notionhq/client";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Slider from "react-slick";

const DestinationDetails = ({ details }) => {
  const [showModal, setShowModal] = useState(false);

  const title = details?.properties?.Headline?.rich_text[0]?.plain_text || "Destination";
  const description = details?.properties?.Description?.rich_text[0]?.plain_text || "Explore Kerala with Dream Kerala Holidays";
  const image = details?.properties?.images?.files[0]?.file?.url || "";

  return (
    <Layout header={1} setShowModal={(val) => setShowModal(val)} extraClass={"pt-160"}>
      <Head>
        <title>{title} | Dream Kerala Holidays</title>
        <meta name="description" content={description.substring(0, 160)} />
        <meta property="og:title" content={`${title} | Dream Kerala Holidays`} />
        <meta property="og:description" content={description.substring(0, 160)} />
        {image && <meta property="og:image" content={image} />}
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | Dream Kerala Holidays`} />
        <meta name="twitter:description" content={description.substring(0, 160)} />
        {image && <meta name="twitter:image" content={image} />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristTrip",
              "name": title,
              "description": description,
              "touristType": "Adventure, Leisure",
              "provider": {
                "@type": "TravelAgency",
                "name": "Dream Kerala Holidays",
                "telephone": "+919567132777",
                "url": "https://dreamkeralaholidays.com"
              }
            })
          }}
        />
      </Head>
      {/*====== Start Destination Details Section ======*/}
      <section className="destination-details-section pt-100 pb-70">
        <div className="container">
          <div className="destination-details-wrapper">
            <div className="destination-info wow fadeInUp">
              <h3 className="title">
                {title}
              </h3>
              <div className="meta">
                <span className="location">
                  <i className="fas fa-map-marker-alt" />
                  {details?.properties?.Location?.rich_text[0]?.plain_text}
                </span>
              </div>
              <p>
                {description}
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <img
                    loading="lazy"
                    src={details?.properties?.images?.files[0]?.file?.url || "https://raw.githubusercontent.com/zalog/placeholder-loading/7d808bb80f09bff00d744cdf5f5f2c028e941adc/docs/imgs/placeholder-loading-demo-1.gif"}
                    className="rounded mb-40"
                    alt={title}
                  />
                </div>
                <div className="col-lg-6">
                  <img
                    loading="lazy"
                    src={details?.properties?.images?.files[1]?.file?.url || "https://raw.githubusercontent.com/zalog/placeholder-loading/7d808bb80f09bff00d744cdf5f5f2c028e941adc/docs/imgs/placeholder-loading-demo-1.gif"}
                    className="rounded mb-40"
                    alt={`${title} - view 2`}
                  />
                </div>
              </div>
              <h3>Why Choose Dream Kerala</h3>
              <p>{details?.properties?.why_us?.rich_text[0]?.plain_text}</p>
              <div className="col-lg-12 my-4">
                <div className="form_group text-start">
                  <button onClick={() => setShowModal(true)} type="submit" className="main-btn primary-btn">
                    Book Now
                    <i className="fas fa-paper-plane" />
                  </button>
                </div>
              </div>
            </div>

            {details?.properties?.Activities_Images?.files?.length ? <PopularActivities images={details?.properties?.Activities_Images?.files} titles={details?.properties?.Activities?.multi_select} /> : <></>}

            <div>
              {details?.properties?.table?.rich_text?.length ? <VehicleTable data={JSON.parse(details?.properties?.table?.rich_text[0]?.plain_text)} /> : <></>}
            </div>

            <Row className="">
              {details?.properties?.Gallery?.files?.map((item, index) => (
                <div key={index} className="col-lg-4 gallery-img mb-3">
                  <img loading="lazy" width={'100%'} height={'100%'} src={item?.file?.url} alt={`${title} gallery ${index + 1}`} />
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

export async function getServerSideProps(context) {
  const { slug } = context.params;

  try {
    const notion = new Client({ auth: process.env.NOTION_KEY });
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DB,
      filter: {
        property: "slug",
        rich_text: {
          equals: slug,
        },
      },
    });

    if (!response.results.length) {
      return { notFound: true };
    }

    return {
      props: {
        details: response.results[0],
      },
    };
  } catch (error) {
    console.error("Error fetching destination:", error);
    return { notFound: true };
  }
}

export default DestinationDetails;
