import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./RecentProducts.module.css";
import axios from "axios";
import ProductItem from "../../../shared/productItem/productItem";
import Loading from "../../../shared/Loading/Loading";
import { cartContext } from "../../../../context/cartContext";
import { toast } from "react-toastify";
import { wilshlistContext } from "../../../../context/wishlist";



export default function RecentProducts() {
  // change of data api 
  let [products, setProduct] = useState([]);
  let {addTOCart} = useContext(cartContext)
  let {addTowilshlistFevorit} = useContext(wilshlistContext)

  function getProducts() {
    // cal api 
    axios
      .get("https://ecommerce.routemisr.com/api/v1/products")
      .then(({ data }) => {
        console.log(data.data);
        setProduct(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
// add to cart 
  async function addProudectToCart(id){
     let data = await addTOCart(id)
    console.log(data);
    // toastfy succes 
    if(data.status == "success"){
      toast("sussfully to cart !" ,{theme:"dark", position:"top-right" ,type:"success"});
    }
    
  }

  async function addToWilshlist(id){
     let data = await addTowilshlistFevorit(id)
    console.log(data);
    // toastfy succes 
    if(data.status == "success"){
      toast("sussfully to wishlist !" ,{theme:"dark", position:"top-right" ,type:"success"});
    }
    
  }

  
// call api 
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
  
  {products.length !=0 &&
  <div className="main-layout gap-y-3  mb-8 ">
      
  {/* sent data and loop to it  */}
  {products.map(product =><ProductItem key={product.id} addToWilshlist={addToWilshlist} addProudectToCart={addProudectToCart} product={product}/>
  )}
  
  
</div> }
      
      {products.length ==0 && <Loading/>}
    </>
  );
}
