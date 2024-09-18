import BookingForm from "@/src/components/bookingform/BookingForm";
import DatePicker from "@/src/components/DateTimePicker/DatePicker";
import TimePicker from "@/src/components/DateTimePicker/TimePicker";
import DropdownComponent from "@/src/components/DropdownComponent";
import GallerySection from "@/src/components/GallerySection";
import ModalComponent from "@/src/components/modal/ModalComponent";
import PageBanner from "@/src/components/PageBanner";
import Popupform from "@/src/components/popupform/Popupform";
import Layout from "@/src/layout/Layout";
import { useState } from "react";
const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const bookingOptions = [
    { value: "24hrs Taxi Service", label: "24hrs Taxi Service" },
    { value: "Call Drivers", label: "Call Drivers" },
    { value: "Tour Packages", label: "Tour Packages" },
    { value: "Tour Operators", label: "Tour Operators" },
    { value: "Hotel Bookings", label: "Hotel Bookings" },
    { value: "Houseboat Booking", label: "Houseboat Booking" },
    { value: "Camping", label: "Camping" },
    { value: "Trekking", label: "Trekking" },
    {
      value: "Monthly Based Contract Vehicles",
      label: "Monthly Based Contract Vehicles",
    },
  ];

  const languageOptions = [
    { value: "Malayalam", label: "Malayalam" },
    { value: "Hindi", label: "Hindi" },
    { value: "English", label: "English" },
    { value: "Tamil", label: "Tamil" },
    { value: "Arabic", label: "Arabic" }
  ];
  
    async function handleSubmit(e) {
      e.preventDefault(); // Prevent default form submission
      const data = new FormData(e.currentTarget);
  
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwMTIBrt0rZYMLToUrb__ZQbmA_2v-XbyYESZX8LUcqDseIpKKLtekT1CogeLq-JmDA/exec",
        {
          method: "POST",
          body: data,
        }
      );
  
      if (response.ok) {
        console.log("Form submitted successfully!");
        window.location.reload(); // Reload the page on success
      } else {
        console.error("Error submitting form");
      }
    }

  return (
    <Layout header={1} setShowModal={(val) => setShowModal(val)} extraClass={"pt-160"}>
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
                  <p>5C34+W78, Kanjoor-Airport Rd, Nedumbassery, Kerala 683111</p>
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
                    <a href="tel:+91 95671 32777">+91 95671 32777</a>
                  </p>
                  <p>
                    <a href="tel:+91 90484 59086">+91 90484 59086</a>
                  </p>
                  <p>
                    <a href="tel:+91 95671 23104">+91 95671 23104</a>
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.3188920686566!2d76.40313007509167!3d10.154712989958748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0807375d176ce7%3A0xe5e7af8c8eca5d39!2sDream%20Kerala%20Holiday&#39;s%20kochi!5e0!3m2!1sen!2sin!4v1726680643804!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
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
              <form onSubmit={handleSubmit} className="booking-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form_group">
                    <DropdownComponent
                      id="booking"
                      name="booking"
                      required={true}
                      options={bookingOptions}
                      defaultOption="Booking for"
                    />
                  </div>
                </div>
                <div className="col-md-6 mt-md-0 mt-3">
                  <div className="form_group">
                    <input
                      id="pickup"
                      name="pickup"
                      type="text"
                      required
                      className="form_control"
                      placeholder="Pick up"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form_group">
                    <input
                      id="dropoff"
                      name="dropoff"
                      type="text"
                      required
                      className="form_control"
                      placeholder="Drop off"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form_group">
                    <label>
                      <i className="far fa-user-alt" />
                    </label>
                    <input
                      name="name"
                      id="name"
                      required
                      type="text"
                      className="form_control"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form_group">
                    <label>
                      <i className="far fa-call-alt" />
                    </label>
                    <input
                      name="contact"
                      id="contact"
                      required
                      type="number"
                      className="form_control"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form_group">
                    <DropdownComponent
                      id="language"
                      name="language"
                      required={true}
                      options={languageOptions}
                      defaultOption="Language"
                    />
                  </div>
                </div>

                <div className="col-md-6 mt-md-0 mt-3 ">
                  <div className="form_group">
                    <label>
                      <i className="far fa-date-alt" />
                    </label>
                   <DatePicker/>
                  </div>
                </div>

                <div className="col-md-6 ">
                  <div className="form_group">
                    <label>
                      <i className="far fa-date-alt" />
                    </label>
                   <TimePicker/>
                  </div>
                </div>

                <div className="col-md-12 mt-20">
                  <textarea
                    id="comments"
                    name="comments"
                    required
                    placeholder="Comments"
                    className="form_control"
                    cols={8}
                    rows={3}
                    defaultValue={""}
                  />
                </div>
                <div className="col-lg-12">
                  <div className="form_group text-center">
                    <button type="submit" className="main-btn primary-btn">
                      Book Now
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
      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Popupform />
      </ModalComponent>
    </Layout>
  );
};
export default Contact;
