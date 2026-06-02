import Slider from "react-slick";

const testimonials = [
  {
    name: "Rahul Menon",
    location: "Bangalore",
    text: "Amazing experience with Dream Kerala Holidays! The houseboat trip in Alleppey was perfectly organized. Driver was punctual and courteous throughout our 5-day trip.",
    rating: 5,
    service: "Tour Package",
  },
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "Booked a taxi for airport pickup and a 3-day Munnar trip. Very professional service, clean vehicle, and the driver knew all the best spots. Highly recommend!",
    rating: 5,
    service: "Taxi Service",
  },
  {
    name: "Mohammed Ashraf",
    location: "Dubai",
    text: "We used Dream Kerala for our family vacation. They arranged everything - hotel, houseboat, cab. The pricing was very transparent with no hidden charges.",
    rating: 5,
    service: "Complete Package",
  },
  {
    name: "Anjali Nair",
    location: "Chennai",
    text: "Best travel partner in Kerala! Used their monthly contract vehicle service for office commute. Reliable drivers and well-maintained cars.",
    rating: 4,
    service: "Contract Vehicle",
  },
];

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  dotsClass: "slick-dots testimonial-dots",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <section className="testimonial-section pt-100 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-50 wow fadeInDown">
              <span className="sub-title">Testimonials</span>
              <h2>What Our Travelers Say</h2>
            </div>
          </div>
        </div>
        <div style={{ paddingBottom: "50px" }}>
          <Slider {...sliderSettings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-3">
              <div
                className="testimonial-card p-4 mb-30"
                style={{
                  background: "#f8f9fa",
                  borderRadius: "12px",
                  minHeight: "250px",
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "#2d6a4f",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <div className="ms-3">
                    <h5 className="mb-0">{item.name}</h5>
                    <small className="text-muted">{item.location}</small>
                  </div>
                </div>
                <div className="mb-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <i
                      key={i}
                      className="fas fa-star"
                      style={{ color: "#ffc107", marginRight: "2px" }}
                    />
                  ))}
                  {[...Array(5 - item.rating)].map((_, i) => (
                    <i
                      key={i}
                      className="fas fa-star"
                      style={{ color: "#e0e0e0", marginRight: "2px" }}
                    />
                  ))}
                </div>
                <p className="mb-2">{item.text}</p>
                <small
                  style={{
                    background: "#e8f5e9",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    color: "#2d6a4f",
                  }}
                >
                  {item.service}
                </small>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
