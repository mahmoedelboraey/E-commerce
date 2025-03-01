import axios from "axios";
import {  createContext, useContext, useEffect, useState } from "react";
import { tokenContext } from "./tokenContext";

export const wilshlistContext = createContext()

export default function WilshlistContextProveder({children}) {
    let[count , setCount] = useState(0)
    const[lisetDetils , setLisetDetils] = useState([])
    const {token} = useContext(tokenContext)
    const headers = {
        token
    } 
    const API_URL =  `https://ecommerce.routemisr.com/api/v1/wishlist`

    useEffect(() => {
        token && getWishlist()
      }, [token])


async function addTowilshlistFevorit(id){
        const {data} = await axios.post(API_URL ,{productId:id} ,{
            headers
        })
        ;if(data.status == "success"){
         
            setCount(data.count)

         }

         return data
    }


async function getWishlist(){
        const {data} = await axios.get(API_URL ,{
            headers
        })
        ;if(data.status == "success"){
          
           
            setCount(data.count)
            setLisetDetils(data.data)
            console.log(lisetDetils)
         
         }
         
       
         return data
    }

async function daeleList(id){
        const {data} = await axios.delete(`${API_URL}/${id}` ,{
            headers
        })
        ;if(data.status == "success"){
            setCount(data.count)
           
            console.log(data)
           getWishlist()
         }
        
         return data
    }

  return (
<wilshlistContext.Provider value={{addTowilshlistFevorit , getWishlist , count , daeleList ,lisetDetils }}>
    {/* children lazem small  */}
        {children}
    </wilshlistContext.Provider>
  )
}

