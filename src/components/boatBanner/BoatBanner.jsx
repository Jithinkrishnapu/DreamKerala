import Link from "next/link"

function BoatBanner({onClick}) {
  return (
    <section
        className="cta-bg overlay bg_cover pt-140 pb-150"
        style={{ backgroundImage: "url(assets/images/bg/banner-boat.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*=== CTA Content Box ===*/}
              <div className="cta-content-box text-center text-white wow fadeInDown">
                <h2 className="mb-35">
                All Types Of House Boats Available In Reasonable Prices
                </h2>
                <div onClick={onClick}>
                  <a className="main-btn primary-btn">
                    Book Now
                    <i className="far fa-paper-plane" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BoatBanner