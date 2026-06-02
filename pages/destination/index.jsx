import ModalComponent from "@/src/components/modal/ModalComponent";
import Popupform from "@/src/components/popupform/Popupform";
import Layout from "@/src/layout/Layout";
import { Client } from "@notionhq/client";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const Destination = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout header={1} setShowModal={(val) => setShowModal(val)} extraClass={"pt-160"}>
      <Head>
        <title>Kerala Tour Destinations | Dream Kerala Holidays</title>
        <meta name="description" content="Explore top Kerala destinations - backwaters, hill stations, beaches, and wildlife. Book customized tour packages with Dream Kerala Holidays." />
        <meta property="og:title" content="Kerala Tour Destinations | Dream Kerala Holidays" />
        <meta property="og:description" content="Explore top Kerala destinations - backwaters, hill stations, beaches, and wildlife. Book customized tour packages." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/*====== Start Destination Section ======*/}
      <section className="destination-section pt-120 pb-90 px-30">
        <div className="section-title text-center mb-50">
          <h2>Amazing Adventure Camping Services for Enjoyed</h2>
        </div>
        <div className="d-flex flex-row gap-5 justify-content-center flex-wrap">
          {data?.sort(
            (a, b) =>
              a.properties.order?.rich_text[0]?.plain_text -
              b.properties.order?.rich_text[0]?.plain_text
          )
            ?.map((val, index) => {
              return (
                <div key={index} className="single-service-item-three mw-25 col-10 col-md-3 mb-40">
                  <div className="content">
                    <h3 className="title">
                      <Link href={`/${val?.properties?.slug?.rich_text[0]?.plain_text}`}>
                        {val?.properties?.Headline?.rich_text[0]?.plain_text}
                      </Link>
                    </h3>
                    <p>
                      {val?.properties?.Short_Description?.rich_text[0]?.plain_text?.substring(0, 80) + "..."}
                    </p>
                    <img
                      loading="lazy"
                      height={266}
                      width={351}
                      src={val?.properties?.images?.files[0]?.file?.url}
                      alt={val?.properties?.Headline?.rich_text[0]?.plain_text}
                    />
                    <Link href={`/${val?.properties?.slug?.rich_text[0]?.plain_text}`} className="btn-link mb-1">
                      Read More
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Popupform />
      </ModalComponent>
    </Layout>
  );
};

export async function getServerSideProps() {
  try {
    const notion = new Client({ auth: process.env.NOTION_KEY });
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DB,
      filter: {
        property: "Status",
        select: {
          equals: "Destination",
        },
      },
    });

    return {
      props: {
        data: response.results,
      },
    };
  } catch (error) {
    console.error("Error fetching destinations:", error);
    return {
      props: {
        data: [],
      },
    };
  }
}

export default Destination;
