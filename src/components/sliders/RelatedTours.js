import { recentPlaceSlider } from "@/src/sliderProps";
import Link from "next/link";
import { useRef, useCallback } from "react";
import Slider from "react-slick";

const RelatedTours = () => {
  const sliderRef = useRef(null);

  const next = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  }, []);

  const previous = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  }, []);

  return (
    <div className="related-tour-place wow fadeInUp">
      <div className="row">
        <div className="col-md-8">
          <div className="section-title mb-35">
            <h3>Related Tours</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="place-arrows mb-35">
            <div className="prev slick-arrow" onClick={previous}>
              <i className="far fa-arrow-left" />
            </div>
            <div className="next slick-arrow" onClick={next}>
              <i className="far fa-arrow-right" />
            </div>
          </div>
        </div>
      </div>
      <Slider
        {...recentPlaceSlider}
        ref={sliderRef}
        className="recent-place-slider"
      >
        {/*=== Single Place Item ===*/}
        <div className="single-place-item mb-60">
          <div className="place-img">
            <img src="assets/images/place/place-1.jpg" alt="Place Image" />
          </div>
          <div className="place-content">
            <div className="info">
              <ul className="ratings">
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><a href="#">(4.9)</a></li>
              </ul>
              <h4 className="title">
                <Link legacyBehavior href="/tour-details">
                  <a>Man and Woman Walks on Dock</a>
                </Link>
              </h4>
              <p className="location">
                <i className="fas fa-map-marker-alt" />
                North Province, Maldives
              </p>
              <p className="price">
                <i className="fas fa-usd-circle" />
                Price<span className="currency">$</span>93.65
              </p>
              <div className="meta">
                <span>
                  <i className="far fa-clock" />
                  05 Days
                </span>
                <span>
                  <i className="far fa-user" />
                  25
                </span>
                <span>
                  <Link legacyBehavior href="/tour-details">
                    <a>
                      Details
                      <i className="far fa-long-arrow-right" />
                    </a>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*=== Single Place Item ===*/}
        <div className="single-place-item mb-60">
          <div className="place-img">
            <img src="assets/images/place/place-2.jpg" alt="Place Image" />
          </div>
          <div className="place-content">
            <div className="info">
              <ul className="ratings">
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><a href="#">(4.9)</a></li>
              </ul>
              <h4 className="title">
                <Link legacyBehavior href="/tour-details">
                  <a>Trees Under White Clouds during Daytime</a>
                </Link>
              </h4>
              <p className="location">
                <i className="fas fa-map-marker-alt" />
                North Province, Maldives
              </p>
              <p className="price">
                <i className="fas fa-usd-circle" />
                Price<span className="currency">$</span>93.65
              </p>
              <div className="meta">
                <span>
                  <i className="far fa-clock" />
                  05 Days
                </span>
                <span>
                  <i className="far fa-user" />
                  25
                </span>
                <span>
                  <Link legacyBehavior href="/tour-details">
                    <a>
                      Details
                      <i className="far fa-long-arrow-right" />
                    </a>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*=== Single Place Item ===*/}
        <div className="single-place-item mb-60">
          <div className="place-img">
            <img src="assets/images/place/place-3.jpg" alt="Place Image" />
          </div>
          <div className="place-content">
            <div className="info">
              <ul className="ratings">
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><a href="#">(4.9)</a></li>
              </ul>
              <h4 className="title">
                <Link legacyBehavior href="/tour-details">
                  <a>Body of Water Near Mountain</a>
                </Link>
              </h4>
              <p className="location">
                <i className="fas fa-map-marker-alt" />
                North Province, Maldives
              </p>
              <p className="price">
                <i className="fas fa-usd-circle" />
                Price<span className="currency">$</span>93.65
              </p>
              <div className="meta">
                <span>
                  <i className="far fa-clock" />
                  05 Days
                </span>
                <span>
                  <i className="far fa-user" />
                  25
                </span>
                <span>
                  <Link legacyBehavior href="/tour-details">
                    <a>
                      Details
                      <i className="far fa-long-arrow-right" />
                    </a>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default RelatedTours;
