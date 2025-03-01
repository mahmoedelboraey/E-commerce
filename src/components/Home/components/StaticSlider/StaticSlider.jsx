import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./StaticSlider.module.css";
import Slider from "react-slick";
import slider1 from "../../../../assets/images/slider-image-1.jpeg";
import slider2 from "../../../../assets/images/slider-image-2.jpeg";
import slider3 from "../../../../assets/images/slider-image-3.jpeg";
import static1 from "../../../../assets/images/grocery-banner.png";
import static2 from "../../../../assets/images/grocery-banner-2.jpeg";

export default function StaticSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className=" container mx-auto ">
        <div className="main-layout">
          <div className="w-9/12">
            <Slider {...settings}>
              <img src={slider3} className="h-[600px] " alt="" />
              <img src={slider1} className="h-[600px] " alt="" />
              <img src={slider2} className="h-[600px] " alt="" />
            </Slider>
          </div>
          <div className="w-3/12">
            <img src={static1} className="h-[300px] " alt="" />
            <img src={static2} className="h-[300px] " alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
