import React from "react";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-top footer-widget-area pt-75 pb-30">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget about-company-widget mb-40 wow fadeInUp">
                <h4 className="widget-title">About</h4>
                <div className="footer-content">
                  <p>
                    Discover effortless travel with our top-notch cab rentals
                    and exciting tour packages, tailored for you.
                  </p>
                  <a href="/" className="footer-logo">
                    <img
                      src="assets/images/logo/logo-black.png"
                      alt="Site Logo"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget service-nav-widget mb-40 pl-lg-70 wow fadeInDown">
                <h4 className="widget-title">Services</h4>
                <div className="footer-content">
                  <ul className="footer-widget-nav">
                    <li>24hrs Taxi Service</li>
                    <li>Call Drivers</li>
                    <li>Tour Packages</li>
                    <li>Tour Operators</li>
                  </ul>
                  <ul className="footer-widget-nav">
                    <li>Hotel Bookings</li>
                    <li>Houseboat Booking</li>
                    <li>Camping</li>
                    <li>Trekking</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Address Number Location Tiles */}
            <div className="col-lg-4 col-md-6">
              <div className="">
                <div className="single-info-item mb-40">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="info">
                    <span className="title">Location</span>
                    <p>Near Kochi Airport, Thrissur Guruvayoor.</p>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 me-4">
                  <div className="single-info-item mb-40">
                    <div className="icon">
                      <i className="far fa-envelope-open" />
                    </div>
                    <div className="info">
                      <span className="title">Email</span>
                      <p>
                        <a href="mailto:support@gmail.com">
                          Dreamkeralaholidays24@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="single-info-item mb-40">
                    <div className="icon">
                      <i className="far fa-map-marker-alt" />
                    </div>
                    <div className="info">
                      <span className="title">Hotline</span>
                      <p>
                        <a href="tel:+91 90484 59086">+91 9048459086</a>
                      </p>
                      <p>
                        <a href="tel:+91 95671 32777">+91 9567132777</a>
                      </p>
                      <p>
                      <a href="tel:+91 95671 23104">+91 9567123104</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=== Footer Copyright ===*/}
        <div className="footer-copyright">
          <div className="row">
            <div className="col-lg-6">
              {/*=== Footer Text ===*/}
              <div className="footer-text">
                <p>
                  Copyright@ 2024{" "}
                  <span style={{ color: "black" }}>Dream Holidays</span>, All
                  Right Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Footer Nav ===*/}
              <div className="footer-nav float-lg-end ">
                <ul className="social-link">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
