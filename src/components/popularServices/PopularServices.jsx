import React from 'react'

import Home3Slider from "@/src/components/sliders/Home3";
import Layout from "@/src/layout/Layout";
import {
  partnerSliderOne,
  sliderActive3Item,
  sliderActive3ItemDot,
} from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";

function PopularServices() {
  return (
    <section className="service-section pt-100 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-50">
                <span className="sub-title">Popular Services</span>
                <h2>Amazing Adventure Camping Services for Enjoyed</h2>
              </div>
            </div>
          </div>
          <Slider {...sliderActive3Item} className="slider-active-3-item">
            {/*=== Service Item ===*/}
            <div className="single-service-item-three mb-40">
              <div className="content">
                <h3 className="title">
                  <a href="#">Classic Tents</a>
                </h3>
                <p>
                  Sit amet consecteturauris natoque name pellentue augue mattis
                  faucibus
                </p>
                <img
                  src="assets/images/service/service-4.jpg"
                  alt="service image"
                />
                <a href="#" className="btn-link">
                  Read More
                  <i className="far fa-long-arrow-right" />
                </a>
                <div className="meta">
                  <span className="icon">
                    <i className="flaticon-blanket" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-cat" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-tent" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-fire" />
                  </span>
                  <span className="rate">
                    <i className="fas fa-star" />
                    4.9
                  </span>
                </div>
              </div>
            </div>
            {/*=== Service Item ===*/}
            <div className="single-service-item-three mb-40">
              <div className="content">
                <h3 className="title">
                  <a href="#">Caravan Solar Tent</a>
                </h3>
                <p>
                  We denounce with righteous indignation and beguiled and
                  demoralized
                </p>
                <img
                  src="assets/images/service/service-5.jpg"
                  alt="service image"
                />
                <a href="#" className="btn-link">
                  Read More
                  <i className="far fa-long-arrow-right" />
                </a>
                <div className="meta">
                  <span className="icon">
                    <i className="flaticon-blanket" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-cat" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-tent" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-fire" />
                  </span>
                  <span className="rate">
                    <i className="fas fa-star" />
                    4.9
                  </span>
                </div>
              </div>
            </div>
            {/*=== Service Item ===*/}
            <div className="single-service-item-three mb-40">
              <div className="content">
                <h3 className="title">
                  <Link legacyBehavior href="/tour-details">
                    <a>Small Cabin Wood</a>
                  </Link>
                </h3>
                <p>
                  To take trivial example which undertakes laborious physical
                  exercise chooses
                </p>
                <img
                  src="assets/images/service/service-6.jpg"
                  alt="service image"
                />
                <a href="#" className="btn-link">
                  Read More
                  <i className="far fa-long-arrow-right" />
                </a>
                <div className="meta">
                  <span className="icon">
                    <i className="flaticon-blanket" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-cat" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-tent" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-fire" />
                  </span>
                  <span className="rate">
                    <i className="fas fa-star" />
                    4.9
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
  )
}

export default PopularServices