import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./ProductDetiles.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import RelatedProduct from './../RelatedProduct/RelatedProduct';
import Slider from "react-slick";
import Loading from "../shared/Loading/Loading";
import { cartContext } from "../../context/cartContext";
import { toast } from "react-toastify";




export default function ProductDetiles() {
  // sitting slider 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  let {addTOCart} = useContext(cartContext)
    async function addProudectToCart(id){
       let data = await addTOCart(id)
      console.log(data);
      // toastfy succes 
      if(data.status == "success"){
        toast("sussfully to cart !" ,{theme:"dark", position:"top-right" ,type:"success"});
      }
      
    }
    

  const { id , categoryid } = useParams();
  console.log(id);
  let [detiles, setDetiles] = useState(null);
  function getProductsDetiles() {
    axios
.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then(({ data }) => {
        console.log(data.data);
        setDetiles(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getProductsDetiles();
    // dependance 3la el id lma ytgher gher fe el ui 
  }, [id]);

  return (
    <>
      <div className="container">
        
        {detiles &&  <div className="main-layout items-center py-16">
          <div className="w-4/12">
          {/* slider components */}
          <Slider {...settings}>
            {/* han no cilpract : fun cilpracet with return  */}
            {detiles?.images.map(src => <img src={src}  alt="" />)}
          </Slider> 
          </div>
          <div className="w-8/12">
            <h2 className="text-3xl font-bold">{detiles?.title}</h2>
            <p className=" text-gray-300  px-3 mb-10">{detiles?.description}</p>
            <span className="font-bold">{detiles?.category.name}</span>
            <div className="flex justify-between mb-4">
              <span>{detiles?.price}EGP</span>
              <span>
                <i className="fa fa-star rating-color"></i>
                {detiles?.ratingsAverage}
              </span>
            </div>
            <button onClick={() => addProudectToCart(detiles.id)} className="btn bg-main w-full p-2 text-white  text-center rounded-md">
            Add Cart
          </button>
          </div>
        </div>}
        {!detiles && <Loading/>}
       
      </div>
           


      <div className="container">
      <h2 className="font-bold ">Related Category </h2>
      {/* sent category id  */}
      <RelatedProduct categoryid={categoryid}/>
      </div>
    </>
  );
}
