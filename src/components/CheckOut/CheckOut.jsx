import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from './CheckOut.module.css'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { PacmanLoader } from 'react-spinners';
import { orderContext } from '../../context/orderContext';
export default function CheckOut() {
  let [errorApi , setErrorApi] = useState(null)
   let [isCallApi , setIsCallApi] = useState(false)
   let [isOnlione , setIsOnlione] = useState(false)
   let {cashOnDelivery , onlinePayment} = useContext(orderContext)
  const initialValues ={
    details:'',
    phone:'',
    city:'',
  }


  const validationSchema = Yup.object().shape({
    details:Yup.string().required("required"),
    phone:Yup.string().required("required"),
    city:Yup.string().required("required"),

  })

  const shippingform = useFormik({
    initialValues,
    validationSchema,
    
    onSubmit:callPayment
  })

  async function callPayment(values){
 console.log(isOnlione)
    try {
      setIsCallApi(true)
      if(isOnlione){
        let x = await onlinePayment (values)
        console.log(x)
        window.location.href = x.session.url
      

      }else{
        let x = await cashOnDelivery (values)
        console.log(x)
      }
 
    } catch (error) {
      setIsCallApi(false)

   

  }
}
  return (
    <>
    
{/* onSubmit={shippingform.handleSubmit} to block refresh and the data privet in url  */}
<form onSubmit={shippingform.handleSubmit} className="w-1/2 my-4  mx-auto">
<h2 className=' capitalize text-2xl my-3'>shipping now</h2>
{/* hna lo nfs el account ytl3 el error  */}
{errorApi ?<div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {errorApi}
</div>
:''}

  <div className="relative z-0 w-full mb-5 group">
    <input type="text" name="details" value={shippingform.values.details} onBlur={shippingform.handleBlur}    onChange={shippingform.handleChange} id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
    <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Details</label>
    {shippingform.errors.details && shippingform.touched.details ?<div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {shippingform.errors.details}
</div>
:''}
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="tel" name="phone" value={shippingform.values.phone} onBlur={shippingform.handleBlur}    onChange={shippingform.handleChange} id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>
    {shippingform.errors.phone && shippingform.touched.phone ?<div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {shippingform.errors.phone}
</div>
:''}
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="text" name="city" value={shippingform.values.city} onBlur={shippingform.handleBlur}    onChange={shippingform.handleChange} id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
    <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">city</label>
    {shippingform.errors.city && shippingform.touched.city ?<div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {shippingform.errors.city}
</div>
:''}
  </div>
  <div className="flex items-center mb-4">
  <input onChange={() => setIsOnlione(true)} value={"onlione"} id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
  <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">online</label>
</div>

 


   {/* hna lma aclem api ykhfy el zorzr 3shan my3mlsh submit kteerrr  */}
  {isCallApi ?  <div className='w-auto flex justify-end'>
    <div>
     
    <PacmanLoader size={20} />

    </div>
  
  </div>:<button type="submit" className="text-white bg-main hover:bg-main focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto ml-auto block px-5 py-2.5 text-center dark:bg-main dark:hover:bg-main dark:focus:ring-main">payment now</button>}
  
</form>


    
    </>
  )
}
