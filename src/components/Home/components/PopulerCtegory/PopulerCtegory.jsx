import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./PopulerCtegory.module.css";
import axios from "axios";
import Slider from "react-slick";

export default function PopulerCtegory() {
  const [categories, setCategory] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 6,
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
  async function getPopulerCategory() {
    try {
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/categories`
      );
      console.log(data);
      setCategory(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPopulerCategory();
  }, []);
  return (
    <div className="py-20 container ">
      <h2 className=" text-3xl mb-5">Show popluer Category </h2>
      <Slider {...settings}>
        {/* han no cilpract : fun cilpracet with return  */}
        {categories.map((category) => (
          <div>
            <img src={category.image} className={styles.categoryImage} alt="" />
            <h2>{category.name}</h2>

          </div>
          
          
        ))}
      </Slider>
    </div>
  );
}
