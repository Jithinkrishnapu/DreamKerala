import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
const Contact = () => {
  return (
    <Layout extraClass={"pt-160"}>
      {/*====== Start Info Section ======*/}
      <section className="contact-info-section pt-150 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-45 wow fadeInDown">
                <span className="sub-title">Contact Us</span>
                <h2>
                  Ready to Get Our Best Services! Feel Free to Contact With Us
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Contact Info Item ===*/}
              <div className="contact-info-item text-center mb-40 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/icon-1.png" alt="icon" />
                </div>
                <div className="info">
                  <span className="title">Office Location</span>
                  <p>Near Kochi Airport, Thrissur Guruvayoor.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Contact Info Item ===*/}
              <div className="contact-info-item text-center mb-40 wow fadeInDown">
                <div className="icon">
                  <img src="assets/images/icon/icon-2.png" alt="icon" />
                </div>
                <div className="info">
                  <span className="title">Email Address</span>
                  <p>
                    <a
                      style={{ fontSize: "large" }}
                      href="mailto:Dreamkeralaholidays24@gmail.com"
                    >
                      Dreamkeralaholidays24@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Contact Info Item ===*/}
              <div className="contact-info-item text-center mb-40 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/icon-3.png" alt="icon" />
                </div>
                <div className="info">
                  <span className="title">Hotline</span>
                  <p>
                    <a href="tel:+000(123)45688">+91 95671 32777</a>
                  </p>
                  <p>
                    <a href="tel:+8596320">+91 90484 59086</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Info Section ======*/}
      {/*====== Start Contact Map Section ======*/}
      <section className="contact-page-map pb-100 wow fadeInUp">
        {/*=== Map Box ===*/}
        <div className="map-box">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31374.170757239248!2d76.04085675!3d10.59704235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba79461cd1b5745%3A0x96c6ecd0de2d2b4!2sGuruvayur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1725264365636!5m2!1sen!2sin" />
        </div>
      </section>
      {/*====== End Contact Map Section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="contact-section pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Get In Touch</span>
                <h2>Send Us Message</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="contact-area wow fadeInUp">
                <form className="contact-form">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          placeholder="Name"
                          className="form_control"
                          name="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="form_control"
                          name="number"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="form_control"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="url"
                          placeholder="Website"
                          className="form_control"
                          name="website"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          name="message"
                          placeholder="Write Message"
                          className="form_control"
                          rows={6}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group text-center">
                        <button className="main-btn primary-btn">
                          Send Us Message
                          <i className="fas fa-paper-plane" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Contact;
