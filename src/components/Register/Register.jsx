import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from './Register.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios'
import { PacmanLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'

export default function Register() {

  let [isCallApi , setIsCallApi] = useState(false)
  let [errorApi , setErrorApi] = useState(null)
  let naviget = useNavigate( )
  const initialValues ={
    name:'',
    email:'',
    password:'',
    rePassword:'',
    phone:''
  }


  const validationSchema = Yup.object().shape({
    name:Yup.string().min(3 , 'min length 3').max(15 , 'max length 15').required("required"),
    email:Yup.string().email('email is invalid').required("required"),
    password:Yup.string().matches(new RegExp ('^[A-Z][a-z0-9]{3,7}$') , 'is invalid').required('required'),
    // 3shan a3mel match password oneof   refrence 
    rePassword:Yup.string().oneOf([Yup.ref('password')],'is not match ').required("required"),
    phone:Yup.string().matches(new RegExp ('^01[0125][0-9]{8}$') , 'isinvalid').required("required")

  })

  const formik = useFormik({
    initialValues,
    validationSchema,




    // manual validation 
//     validate:(values)=>{
//       const errors = {};
//       console.log(errors)
//       // name validation 
//       // law el input fady ! 
//       if(!values.name){
//         errors.name = "required"
//       }else if (values.name.length < 3 ){
//         errors.name = "min length 3"
        
//       }else if(values.name.length > 15){
//         errors.name = "max length 15"
//       }
//       // email validation 

//       if(!values.email){
//         errors.email = "required"
//       }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
//         errors.email = "email is invalid"
//       }
// // password validation
//       if(!values.password){
//         errors.password = "password is required"
//       }else if(!/^[A-Z][a-z0-9]{3,7}$/.test(values.password)){
//         errors.password = "password is invalid"
//       }

//       if(!values.rePassword){
//         errors.rePassword = 'rePassword is required'
//       }else if (values.password != values.rePassword){
//         errors.rePassword = "password must maatch "
//       }

//       if(!values.phone){
//         errors.phone = "phone is required"
//       }else if(!/^01[0125][0-8]{9}$/.test(values.phone)){
//         errors.phone = "phone is invalid"
//       }

//       console.log(errors)
//       return errors
//     },


    onSubmit:cllRegester
  })

  async function cllRegester(values){
    // lo api s7 
    try {
      setErrorApi(null)
      setIsCallApi(true)
    let{data}  = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup" , values)

    // return promise ybqa awite 
    console.log(data)
    setIsCallApi(false)
    naviget('/login')
      // error api 
    } catch (error) {
      // mess
      setErrorApi(error.response.data.message)
      // el zorzr 
      setIsCallApi(false)
     
    }

  }
  return (
    <>
    
{/* onSubmit={formik.handleSubmit} to block refresh and the data privet in url  */}
<form onSubmit={formik.handleSubmit} className="w-1/2 my-4  mx-auto">
<h2 className=' capitalize text-2xl my-3'>Register now:</h2>
{/* hna lo nfs el account ytl3 el error  */}
{errorApi ?<div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {errorApi}
</div>
:''}
  <div className="relative z-0 w-full mb-5 group">
    {/* values.name to the input value  , onchange to rerender app to change , onblur ashan lo tl3t bar el input we hoa msh valid   */}
    <input type="text" name="name" value={formik.values.name} onBlur={formik.handleBlur}   onChange={formik.handleChange}    id="floating_name" className="block mb-2 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
    <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
    {/* touuched 3shan ymn3 in kolhm ybqo requerd swa y3ml el valid 3ly da bs  ,  */}
    {formik.errors.name && formik.touched.name ?<div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {formik.errors.name}
</div>
:''}

  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="email" name="email" value={formik.values.email} onBlur={formik.handleBlur}    onChange={formik.handleChange} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">email</label>
    {formik.errors.email && formik.touched.email ?<div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {formik.errors.email}
</div>
:''}
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="password" name="password" value={formik.values.password} onBlur={formik.handleBlur}    onChange={formik.handleChange} id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password</label>
    {formik.errors.password && formik.touched.password ?<div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {formik.errors.password}
</div>
:''}
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="password" name="rePassword" value={formik.values.rePassword} onBlur={formik.handleBlur}   onChange={formik.handleChange} id="floating_repassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
    <label htmlFor="floating_repassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">repassword</label>
    {formik.errors.rePassword && formik.touched.rePassword ?<div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {formik.errors.rePassword}
</div>
:''}
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type='tel' name="phone" value={formik.values.phone} onBlur={formik.handleBlur}    onChange={formik.handleChange} id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>
    {formik.errors.phone && formik.touched.phone ?<div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {formik.errors.phone}
</div>
:''}
  </div>
 


   {/* hna lma aclem api ykhfy el zorzr 3shan my3mlsh submit kteerrr  */}
  {isCallApi ?  <div className='w-auto flex justify-end'>
    <div>
     
    <PacmanLoader size={20} />

    </div>
  
  </div>:<button type="submit" className="text-white bg-main hover:bg-main focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto ml-auto block px-5 py-2.5 text-center dark:bg-main dark:hover:bg-main dark:focus:ring-main">Register</button>}
  
</form>


    
    </>
  )
}
