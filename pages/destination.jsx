import Layout from "@/src/layout/Layout";
import { destinationPlaces } from "@/src/utils/constants";
const Destination = () => {
  return (
    <Layout extraClass={"pt-160"}>
      {/*====== Start Destination Section ======*/}
      <section className="destination-section pt-100 pb-90">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="row">
              {destinationPlaces.map((place, index) => (
                <PlaceItem key={index} {...place} />
              ))}
            </div>
          </div>
        </div>
      </section>
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
