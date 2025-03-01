import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from './RelatedProduct.module.css'
import axios from 'axios';
import ProductItem from '../shared/productItem/productItem';

export default function RelatedProduct(props) {
  // this is the data it recived 
  let  {categoryid} = props
  console.log(categoryid)
  let [realated , setRelate] = useState([])
  function getProducts() {
    axios
      .get("https://ecommerce.routemisr.com/api/v1/products")
      .then(({ data }) => {
        console.log(data.data);
        // filter category data 
        let x =data.data.filter(product => product.category._id ==categoryid
        )
        setRelate(x)
        console.log(x)
       
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(()=>{
    getProducts()
  },[])

  
  return (
    <div className=" main-layout gap-y-3  mb-8 ">
            {realated.map(product =><ProductItem key={product.id} product={product}/>
            )}
            
            
          </div>
    
  )
}
