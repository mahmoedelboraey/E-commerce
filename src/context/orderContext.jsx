import { createContext, useContext } from "react";
import { tokenContext } from "./tokenContext";
import { cartContext } from "./cartContext";
import axios from "axios";

export let orderContext = createContext()

export default function OrderContextProvider({children}) { 
    const {token} =useContext(tokenContext)
    const{ getCart , cartId} = useContext(cartContext)
    const headers = {
    token
}

    const API_ORDER = 'https://ecommerce.routemisr.com/api/v1/orders';


     // all order 
 async function cashOnDelivery(shippingAddress){
    const {data} =  await axios.post(`${API_ORDER}/${cartId}`,
        {
            shippingAddress
    },
    {
         headers
     }
    ,)
    if(data.status == "success"){
        getCart()
    }
     return data
 }

 let url = window.location.origin

 async function onlinePayment(shippingAddress){
    const {data} =  await axios.post(`${API_ORDER}/checkout-session/${cartId}?url=${url}`,
        {shippingAddress},
    {headers}
    ,)
    // if(data.status == "success"){
    //     getCart()
    // }
    console.log(data , 'mahmokpdpdjfijdsjlf')
     return data
 }


 async function getuser( id){
    const {data} =  await axios.get(`${API_ORDER}/user/${id}`,)
     return data
 }
  return <orderContext.Provider value={{cashOnDelivery , onlinePayment , getuser}}>
    {children}
  </orderContext.Provider>
}
