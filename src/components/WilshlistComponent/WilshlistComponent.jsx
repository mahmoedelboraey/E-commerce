import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from './WilshlistComponent.module.css'
import { wilshlistContext } from '../../context/wishlist'
import { tokenContext } from '../../context/tokenContext'
import { cartContext } from './../../context/cartContext';
import {  useNavigate } from 'react-router-dom'


export default function WilshlistComponent() {
  const {  daeleList , lisetDetils ,getWishlist} = useContext(wilshlistContext)
  let {token} = useContext(tokenContext)
  let{addTOCart} = useContext(cartContext)
  let navigate=useNavigate();
// useEffect(() => {
//  console.log(lisetDetils)
// }, [lisetDetils])
async function getListWish(){
  await getWishlist()
  console.log(lisetDetils)
}
  useEffect(() => {
    token &&getListWish()
    
  }, [token]);

  async function deletFromList(id){
    let{data} = await daeleList(id)
    console.log(data)


  }
  function goToShopping(){
    navigate("/")
  }
  return (
    <>
    

{lisetDetils ?  lisetDetils?.length ==0 ?
   <><div className='m-auto mt-36 bg-slate-400  flex flex-col bg-opacity-50 rounded-md shadow-md w[95%]'>
   <div className='p-4 md:p-10 '>
     <h1 className=''>Your Wishlist Is Empty, Start Shopping Now by Clicking the button below and find something you love! ❤</h1>
   <button onClick={goToShopping} className='bg-emerald-600 rounded-md text-white hover:bg-emerald-500 transition-colors py-1 px-3 mt-5'>Start Shopping</button>
   </div>
   
   </div></> 

: 


<div className="relative container overflow-x-auto my-3">
  <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Product name
        </th>
        <th scope="col" className="px-6 py-3">
          Color
        </th>
        <th scope="col" className="px-6 py-3">
          Category
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
        <th scope="col" className="px-6 py-3">
          add to cart
        </th>
      </tr>
    </thead>
    <tbody>
    {lisetDetils.map((list)=>  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
         {list.title}
        </th>
        <td className="px-6 py-4">
          {list.category.name}
        </td>
        <td className="px-6 py-4">
          <img src={list.imageCover} className='w-[100px]' alt="" />
        </td>
        <td className="px-6 py-4">
          ${list.price}
        </td>
        <td className="px-6 py-4">
          <div className=' '>
          <i onClick={() => deletFromList(list.id)} class="fa-solid p-1 rounded-sm text-main fa-trash cursor-pointer"></i>
          </div>
        </td>
        <td className="px-6 py-4">
        <button className='bg-main text-white p-3 rounded-sm capitalize' onClick={() => addTOCart(list.id)} >add cart</button>
        </td>
      </tr>)}
     
    </tbody>
  </table>
</div> : 'cart is emptyyy'}



{/* {lisetDetils && <div className="relative container overflow-x-auto my-3">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Product name
        </th>
        <th scope="col" className="px-6 py-3">
          Color
        </th>
        <th scope="col" className="px-6 py-3">
          Category
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
    {lisetDetils.map((list)=>  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
         {list.title}
        </th>
        <td className="px-6 py-4">
          {list.category.name}
        </td>
        <td className="px-6 py-4">
          <img src={list.imageCover} className='w-[100px]' alt="" />
        </td>
        <td className="px-6 py-4">
          ${list.price}
        </td>
        <td className="px-6 py-4">
        <i onClick={() => deletFromList(list.id)} class="fa-solid fa-trash cursor-pointer"></i>
        </td>
      </tr>)}
     
    </tbody>
  </table>
</div>
} */}



    
    </>
  )
}
