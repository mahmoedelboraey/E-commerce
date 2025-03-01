import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from './AllOrders.module.css'

import { tokenContext } from '../../context/tokenContext'
import { jwtDecode } from "jwt-decode";
import SharedModel from '../SharedModel/SharedModel'
import { orderContext } from '../../context/orderContext'


export default function AllOrders() {

// instance options object


  let {getuser} = useContext(orderContext)
  let{token} = useContext(tokenContext)
  let [order , serOrder] = useState([])  
  let [items , SetItems] = useState([])  
  let [displeyModel , setDisplayModel] = useState(false)  

function openModel(items){
  SetItems(items)
  setDisplayModel(true)
}
function closeModel(){
  setDisplayModel(false)
}

  function getId (){
    let decode = jwtDecode(token)
    getAllOrder(decode.id)
  }


  async function getAllOrder(id){
    let data = await getuser(id)
    console.log(data)
    serOrder(data)

  }
  useEffect(() => {
    token && getId()
   
  }, [token])
  
  return (
    <>
    

<div className="relative overflow-x-auto my-12 container">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Id
        </th>
        <th scope="col" className="px-6 py-3">
        isPaid
        </th>
        <th scope="col" className="px-6 py-3">
        paymentMethodType
        </th>
        <th scope="col" className="px-6 py-3">
        totalOrderPrice
        </th>
        <th scope="col" className="px-6 py-3">
        showDetiles
        </th>
      </tr>
    </thead>
    <tbody>
      {order.map((oreders) =><tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {oreders.id}
        </th>
        <td className="px-6 py-4">
          {oreders.isPaid? 'payed' :'nopayed'}
        </td>
        <td className="px-6 py-4">
          {oreders.paymentMethodType}
        </td>
        <td className="px-6 py-4">
          ${oreders.totalOrderPrice}
        </td>
        <td className="px-6 py-4">
        <button onClick={() => openModel(oreders.cartItems)}  className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
          <i className='fa fa-eye'></i>
  </button>
        </td>
      </tr>)}
    </tbody>
  </table>


</div>
{displeyModel && <SharedModel   closeModel={closeModel} items={items}/>}








    </>
  )
}
