import ModalComponent from "@/src/components/modal/ModalComponent";
import Popupform from "@/src/components/popupform/Popupform";
import Layout from "@/src/layout/Layout";
import { sliderActive3Item} from "@/src/sliderProps";
import { destinationPlaces } from "@/src/utils/constants";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState, useTransition } from "react";
import Slider from "react-slick";
const Destination = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  useLayoutEffect(() => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/destination");
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
    <Layout header={1} setShowModal={(val) => setShowModal(val)} extraClass={"pt-160"}>
      {/*====== Start Destination Section ======*/}
      <section className="destination-section pt-120 pb-90 px-30">
      <div className="section-title text-center mb-50">
              <h2>Amazing Adventure Camping Services for Enjoyed</h2>
            </div> 
      {/* <Slider {...sliderActive3Item} className="slider-active-3-item"> */}
          {/*=== Service Item ===*/}
          <div className="d-flex flex-row gap-5 justify-content-center flex-wrap" >
          {data?.map((val) => {
            return (
              <div  className="single-service-item-three mw-25 col-10 col-md-3 mb-40">
                <div className="content">
                  <h3 className="title">
                    <a href="#">
                      {" "}
                      {val?.properties?.Headline?.rich_text[0]?.plain_text}
                    </a>
                  </h3>
                  <p>
                    {
                      val?.properties?.Short_Description?.rich_text[0]
                        ?.plain_text?.substring(0, 80)+"..."
                    }
                  </p>
                  <img
                   loading="lazy"
                    height={266}
                    width={351}
                    src={val?.properties?.images?.files[0]?.file?.url}
                    alt="service image"
                  />
                  <Link href={`/${val?.properties?.slug?.rich_text[0]
                        ?.plain_text}`} className="btn-link mb-1">
                    Read More
                    <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            );
          })}
         
         </div>
        {/* </Slider> */}
      </section>
      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Popupform />
      </ModalComponent>
    </Layout>
  );
};
export default Destination;

const PlaceItem = ({ imgSrc, title, price, toursCount, colClasses }) => (
  <div className={colClasses}>
    <div className="single-place-item-two mb-30 wow fadeInUp">
      <div className="place-img">
        <img src={imgSrc} alt="Place Image" />
        <span className="tour-count">{toursCount}</span>
        <div className="place-content">
          <div className="info text-white">
            <h3 className="title mb-10">{title}</h3>
            <p className="price">
              <span className="currency">{price}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
