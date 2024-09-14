import DropdownComponent from '../DropdownComponent'

function BookingForm() {

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
    <section className="booking-section pt-60 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6">
              {/*=== Booking Content Box ===*/}
              <div className="booking-content-box mb-50 wow fadeInLeft">
                <div className="section-title mb-50">
                  <span className="sub-title">Availability</span>
                  <h2>Book Your Dream Cab or Tour with Ease</h2>
                </div>
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
                <div className="col-md-6">
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
                      name="guest"
                      id="guest"
                      required
                      type="text"
                      className="form_control"
                      placeholder="Guest"
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

                <div className="col-md-6">
                  <div className="form_group">
                    <label>
                      <i className="far fa-date-alt" />
                    </label>
                    <input
                      name="Date"
                      id="time"
                      required
                      type="date"
                      className="form_control"
                      placeholder="Date"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form_group">
                    <label>
                      <i className="far fa-date-alt" />
                    </label>
                    <input
                      name="Time"
                      id="time"
                      required
                      type="time"
                      className="form_control"
                      placeholder="Time"
                    />
                  </div>
                </div>

                <div className="col-md-12">
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
            <div className="col-lg-6">
              {/*=== Booking Image Box ===*/}
              <div className="booking-image-box mb-50 ml-lg-45 wow fadeInRight">
                <img
                  src="assets/images/contact/contact-2.jpg"
                  className="radius-60"
                  alt="Contact Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BookingForm