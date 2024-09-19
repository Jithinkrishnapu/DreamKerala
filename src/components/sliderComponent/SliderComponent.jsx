import React from 'react'
import Slider from 'react-slick/lib/slider'
import {
    home1Slider,
    sliderActive3Item,
    sliderActive4Item,
    testimonialSliderOne,
  } from "@/src/sliderProps";


  // featuresData.js
// featuresData.js
export const features = [
    {
      title: "24hrs Taxi Service",
      imgSrc: "assets/images/features/taxi-24.jpg",
      description: "Round-the-clock taxi service available every day of the week."
    },
    {
      title: "Call Drivers",
      imgSrc: "assets/images/features/call-drivers.jpg",
      description: "On-demand drivers available for immediate or scheduled calls."
    },
    {
      title: "Tour Packages",
      imgSrc: "assets/images/features/feat-3.jpg",
      description: "Customized tour packages for various destinations and interests."
    },
    {
      title: "Tour Operators",
      imgSrc: "assets/images/features/tour-operator.jpeg",
      description: "Professional tour operators to assist with planning and organizing tours."
    },
    {
      title: "Hotel Bookings",
      imgSrc: "assets/images/features/hotel-booking.jpg", 
      description: "Assistance with booking hotels to match different budgets and preferences."
    },
    {
      title: "Houseboat Booking",
      imgSrc: "assets/images/features/service-houseboat.jpg", 
      description: "Reservation services for houseboats, ideal for water-based vacations."
    },
    {
      title: "Camping",
      imgSrc: "assets/images/features/feat-1.jpg", 
      description: "Camping arrangements, including site bookings and equipment rentals."
    },
    {
      title: "Trekkings",
      imgSrc: "assets/images/features/trekking.jpg", 
      description: "Guided trekking tours and arrangements for various trekking routes."
    },
    {
      title: "Monthly Based Contract Vehicles",
      imgSrc: "assets/images/features/taxi-img.jpg", 
      description: "Vehicle contracts available on a monthly basis for regular and corporate use."
    }
  ];
  
  

function SliderComponent({setShowModal}) {
  return (
    <Slider {...sliderActive4Item} className="slider-active-4-item wow fadeInUp">
    {features.map((feature, index) => (
      <FeatureItem
        onClick={()=>setShowModal(true)}
        key={index}
        title={feature.title}
        imgSrc={feature.imgSrc}
        description={feature.description}
      />
    ))}
  </Slider>
  )
}

export default SliderComponent

const FeatureItem = ({ title, imgSrc, description,onClick }) => (
    <div className="single-features-item mb-40">
      <div className="img-holder">
        <img height={400} className='object-fit-cover' src={imgSrc} alt="Features Image" />
        <div className="content">
          <div className="text">
            <h4 className="title">{title}</h4>
            <button onClick={onClick} className="icon-btn">
              <i className="far fa-arrow-right" />
            </button>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
  