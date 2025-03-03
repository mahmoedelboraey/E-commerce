import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./productItem.module.css";
import { Link } from "react-router-dom";

export default function ProductItem(props) {
  let { imageCover, category, price, ratingsAverage, title , id } = props.product;
  return (
    <>
      <div className="md:w-1/3  sm:w-1/2  xl:w-1/4 lg:w-1/6   px-3 mb-3">
  
      <div className="product  ">
        {/* nagivaget page detalis */}
      <Link to={`/productDetiles/${id}/${category._id}`}>
            <img className="mb-2" src={imageCover} alt="" />
            <span className="text-main">{category.name}</span>
            <h2 className="mb-3 font-extrabold">
              {title.split(" ").splice(0, 2).join(" ")}
            </h2>
            <div className="flex justify-between mb-4">
              <span>{price}EGP</span>
              <span>
                <i className="fa fa-star rating-color"></i>
                {ratingsAverage}
              </span>
            </div>
            </Link>
            <div className=" ms-[95%]">
              <i onClick={() => props.addToWilshlist(id)} class="fa-solid fa-heart font-medium text-gray-500 cursor-pointer"></i>
              </div>
          <button onClick={() => props.addProudectToCart(id)} className="btn bg-main w-full p-2 text-white  text-center rounded-md">
            Add Cart
          </button>
        </div>
      </div>
    </>
  );
}
