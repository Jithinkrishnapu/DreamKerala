import React, { useEffect, useState, useTransition } from "react";

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
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/destination");
        if (!response.ok) {
          throw new Error("Error fetching carousel data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    });
  }, [startTransition]);

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
          {data?.slice(0,3)?.map((val) => {
            return (
              <div className="single-service-item-three mb-40">
                <div className="content">
                  <h3 className="title">
                    <a href="#">
                      {" "}
                      {val?.properties?.Headline?.rich_text[0]?.plain_text}
                    </a>
                  </h3>
                  <p>
                    {
                      val?.properties?.Short_Description?.rich_text[0]
                        ?.plain_text
                    }
                  </p>
                  <img
                    height={266}
                    width={351}
                    src={val?.properties?.images?.files[0]?.file?.url}
                    alt="service image"
                  />
                     <Link href={`/${val?.properties?.slug?.rich_text[0]
                        ?.plain_text}`} className="btn-link mb-1">
                    Read More
                    <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            );
          })}
         
        </Slider>
      </div>
    </section>
  );
}

export default PopularServices;
