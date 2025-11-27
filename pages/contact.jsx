import DatePicker from "@/src/components/DateTimePicker/DatePicker";
import DropdownComponent from "@/src/components/DropdownComponent";
import ModalComponent from "@/src/components/modal/ModalComponent";
import Popupform from "@/src/components/popupform/Popupform";
import Layout from "@/src/layout/Layout";
import PreLoader from "@/src/layout/PreLoader";
import { useRouter } from "next/router";
import { useState } from "react";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const [loader, setLoader] = useState(false);
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
      setLoader(true)
      e.preventDefault(); // Prevent default form submission
      const data = new FormData(e.currentTarget);
  
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwysRKeDEfn0Cyo1tMyPvAp8ZC_YYq4YVIn2lx1WdD6Ikoj6Zns6RzTVIjri6zaZshz/exec",
        {
          method: "POST",
          body: data,
        }
      );
  
      if (response.ok) {
        setLoader(false)
        router.push('/thankyou') // Reload the page on success
      } else {
        setLoader(false)
        console.error("Error submitting form");
      }
    }


    if(loader){
      return <PreLoader/>
    }

  return (
    <Layout header={1} setShowModal={(val) => setShowModal(val)}>
      {/* Hero Section with Contact Cards */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <div className="hero-badge">
                <i className="fas fa-envelope"></i>
                <span>Get In Touch</span>
              </div>
              <h1 className="hero-title">
                Let's Plan Your
                <span className="title-gradient"> Dream Journey</span>
              </h1>
              <p className="hero-description">
                Have questions or ready to book? We're here to help you create 
                the perfect Kerala experience
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Info Footer */}
      <section className="hero-contact-cards">
        <div className="contact-info-footer">
              <div className="hero-info-card">
                <div className="card-icon-wrapper">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="card-info">
                  <h4>Office Location</h4>
                  <p>5C34+W78, Kanjoor-Airport Rd, Nedumbassery, Kerala 683111</p>
                  <a 
                    href="https://maps.google.com/?q=5C34+W78,+Kanjoor-Airport+Rd,+Nedumbassery,+Kerala+683111" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                    style={{alignSelf:'center'}}
                  >
                    Get Directions <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="hero-info-card">
                <div className="card-icon-wrapper">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="card-info">
                  <h4>Email Address</h4>
                  <p>We'll respond within 24 hours</p>
                  <a style={{alignSelf:'center'}} href="mailto:Dreamkeralaholidays24@gmail.com" className="card-link">
                    Dreamkeralaholidays24@gmail.com
                  </a>
                </div>
              </div>

              <div className="hero-info-card">
                <div className="card-icon-wrapper">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="card-info">
                  <h4>Hotline</h4>
                  <p>Available 24/7 for your convenience</p>
                  <div style={{alignSelf:'center'}} className="phone-links">
                    <a href="tel:+919567132777" className="card-link">+91 95671 32777</a>
                    <a href="tel:+919048459086" className="card-link">+91 90484 59086</a>
                    <a href="tel:+919567123104" className="card-link">+91 95671 23104</a>
                  </div>
                </div>
              </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form-wrapper">
                <div className="section-badge">
                  <i className="fas fa-paper-plane"></i>
                  <span>Send Message</span>
                </div>
                <h2 className="section-title">Book Your Journey</h2>
                <p className="section-description">
                  Fill out the form below and we'll get back to you with a customized itinerary
                </p>
              <form onSubmit={handleSubmit} className="booking-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form_group">
                    <DropdownComponent
                      id="booking"
                      name="Booking"
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
                      name="Pickup"
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
                      name="Dropoff"
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
                      name="Name"
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
                      name="Contact"
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
                      name="Language"
                      required={true}
                      options={languageOptions}
                      defaultOption="Language"
                    />
                  </div>
                </div>

                <div className="col-md-6 mt-md-0 mt-3">
                    <div className="form_group">
                      <label>
                        <i className="far fa-date-alt" />
                      </label>
                      <DatePicker name="StartDate" placeholder={"Start Date"} type={"date"} required={true} />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form_group">
                      <label>
                        <i className="far fa-date-alt" />
                      </label>
                      <DatePicker name="EndDate" placeholder={"End Date"} type={"date"} required={true} />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form_group">
                      <label>
                        <i className="far fa-date-alt" />
                      </label>
                      <DatePicker name="Time" placeholder={"Time"} type={"time"} required={false} />
                    </div>
                  </div>

                <div className="col-md-12 mt-10">
                  <textarea
                    id="Comments"
                    name="Comments"
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

            <div className="col-lg-6">
              <div className="map-wrapper">
                <h3 className="map-title">Find Us Here</h3>
                <div className="map-container">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.3188920686566!2d76.40313007509167!3d10.154712989958748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0807375d176ce7%3A0xe5e7af8c8eca5d39!2sDream%20Kerala%20Holiday&#39;s%20kochi!5e0!3m2!1sen!2sin!4v1726680643804!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%"  
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="map-info">
                  <div className="info-item">
                    <i className="fas fa-clock"></i>
                    <div>
                      <strong>Business Hours</strong>
                      <p>24/7 - Always Available</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-map-pin"></i>
                    <div>
                      <strong>Location</strong>
                      <p>Near Cochin International Airport</p>
                    </div>
                  </div>
                </div>
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
