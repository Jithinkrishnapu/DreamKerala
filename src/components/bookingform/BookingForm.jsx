import React from 'react'

function BookingForm() {
  return (
    <section className="booking-section pt-60 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6">
              {/*=== Booking Content Box ===*/}
              <div className="booking-content-box mb-50 wow fadeInLeft">
                <div className="section-title mb-50">
                  <span className="sub-title">Availability</span>
                  <h2>Booking Your Best Tour Camping Availability</h2>
                </div>
                <form className="booking-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>
                          <i className="far fa-calendar-alt" />
                        </label>
                        <input
                          type="text"
                          className="form_control datepicker"
                          placeholder="Check In"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>
                          <i className="far fa-calendar-alt" />
                        </label>
                        <input
                          type="text"
                          className="form_control datepicker"
                          placeholder="Check Out"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>
                          <i className="far fa-user-alt" />
                        </label>
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Guest"
                          name="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <select className="wide">
                          <option data-display="Accommodations">
                            Accommodations
                          </option>
                          <option value={1}>Classic Tent</option>
                          <option value={1}>Forest Camping</option>
                          <option value={1}>Small Trailer</option>
                          <option value={1}>Tree House Tent</option>
                          <option value={1}>Tent Camping</option>
                          <option value={1}>Couple Tent</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <textarea
                        name="comments"
                        placeholder="Comments"
                        className="form_control"
                        cols={8}
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="form_group">
                        <button className="main-btn primary-btn">
                          Check availability
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