import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { tokenContext } from './tokenContext';
import { data } from "autoprefixer";

// creatcontext
export const cartContext = createContext()
// fun provider 
export default function CartContextProvider({children}){
    // to change of count 
    const [numOfCartItems , setNumOfCartItems]  = useState(0)
    const [cartDetiles , setCartDetiles]  = useState(null)
    const [cartId , setCartId]  = useState('')
    // get token from tokencontext
    const {token} = useContext(tokenContext)
    // url api 
    const API_CART = 'https://ecommerce.routemisr.com/api/v1/cart';
    
    const headers = {
    token
}


useEffect(() => {
    token && getCart()
  },[token])
// get api  , productid is change from ele to anthoer 
async function addTOCart(productId){
    const {data} =  await axios.post(API_CART,{productId},{
         headers
     });
     if(data.status == "success"){
        setNumOfCartItems(data.numOfCartItems)
     }
     
     return data 
     
 }

 // get cart api , by get methods 
async function getCart(){
    const {data} =  await axios.get(API_CART,{
         headers
     });
     if(data.status == "success"){
        console.log(data)
        setNumOfCartItems(data.numOfCartItems)
        setCartDetiles(data)
     }
     setCartId(data.cartId)
     return data 
     
 }

 async function removeCart(id){
    const {data} =  await axios.delete(`${API_CART}/${id}`,{
         headers
     });
     console.log(data , "removeeee")
     if(data.status == "success"){
        setNumOfCartItems(data.numOfCartItems)
        setCartDetiles(data)
     }
     console.log(data)
     return data 
     
 }


 async function clearAllCart(){
    const {data} =  await axios.delete(API_CART,{
         headers
     });
     if(data.message == "success"){
        setNumOfCartItems(0)
        setCartDetiles(null)
     }
    return data
     
 }
 


 async function updateCart(id , newCount){
    const {data} =  await axios.put(`${API_CART}/${id}`,
        {
        "count": newCount
    },
    {
         headers
     }
    ,).then( function ({data}){
        setNumOfCartItems(data.numOfCartItems)
        setCartDetiles(data)
        return true

    })
    .catch( function(err){
        console.log(err, 'update errrro')
        return false 
    })
     
     return data
 }








    return <cartContext.Provider value={{numOfCartItems , cartId, setNumOfCartItems, addTOCart , getCart ,cartDetiles ,removeCart , updateCart ,clearAllCart  }}>
        {children}
    </cartContext.Provider>
}


