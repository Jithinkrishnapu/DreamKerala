import { popularActivites } from "@/src/utils/constants";
import React from "react";

function PopularActivities({images,titles}) {
  return (
    <section className="features-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            {/*=== Section Title ===*/}
            <div className="section-title text-center mb-45 wow fadeInDown">
              <span className="sub-title">Popular Activities here</span>
            </div>
          </div>
        </div>
        <div className="row">
          {images?.map((feature, index) => (
            <div key={index} className="col-xl-3 col-md-6 col-sm-12">
              {/*=== Features Image Item ===*/}
              <div
                className={`single-features-item-two mb-40 wow fadeInUp`}
              >
                <div className="img-holder">
                  <img loading="lazy" width={'100%'} height={'100%'} src={feature?.file?.url} alt={titles[index]?.name} />
                  <div className="item-overlay">
                    <div className="content">
                      <h3 className="title">{titles[index]?.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularActivities;
