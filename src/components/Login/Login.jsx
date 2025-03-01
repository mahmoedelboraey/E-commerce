import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup';
import axios from 'axios'
import { PacmanLoader } from 'react-spinners'
import { useFormik } from 'formik'
import { tokenContext } from '../../context/tokenContext'

export default function Login() {
  let [errorApi , setErrorApi] = useState(null)
   let [isCallApi , setIsCallApi] = useState(false)
   // use context tooken 
   let{setToken} = useContext(tokenContext)
   // to navigate anthor page 
  let naviget = useNavigate( )
  
  const initialValues ={
    email:'',
    password:'',
  }


  const validationSchema = Yup.object().shape({
    email:Yup.string().email('email is invalid').required("required"),
    password:Yup.string().matches(new RegExp ('^[A-Z][a-z0-9]{3,7}$') , 'is invalid').required('required'),

  })

  const loginform = useFormik({
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


    onSubmit:callLogin
  })

  async function callLogin(values){
    // lo api s7 
    try {
      setErrorApi(null)
      setIsCallApi(true)
    let{data}  = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin" , values)

    // return promise ybqa awite 
   
    setIsCallApi(false)
    // save to token 
    localStorage.setItem("user" , data.token)
    // hna token m3aya 
    setToken( data.token)
    naviget('/home')
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
    
{/* onSubmit={loginform.handleSubmit} to block refresh and the data privet in url  */}
<form onSubmit={loginform.handleSubmit} className="w-1/2 my-4  mx-auto">
<h2 className=' capitalize text-2xl my-3'>Register now:</h2>
{/* hna lo nfs el account ytl3 el error  */}
{errorApi ?<div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {errorApi}
</div>
:''}

  <div className="relative z-0 w-full mb-5 group">
    <input type="email" name="email" value={loginform.values.email} onBlur={loginform.handleBlur}    onChange={loginform.handleChange} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">email</label>
    {loginform.errors.email && loginform.touched.email ?<div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {loginform.errors.email}
</div>
:''}
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="password" name="password" value={loginform.values.password} onBlur={loginform.handleBlur}    onChange={loginform.handleChange} id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password</label>
    {loginform.errors.password && loginform.touched.password ?<div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {loginform.errors.password}
</div>
:''}
  </div>
 


   {/* hna lma aclem api ykhfy el zorzr 3shan my3mlsh submit kteerrr  */}
  {isCallApi ?  <div className='w-auto flex justify-end'>
    <div>
     
    <PacmanLoader size={20} />

    </div>
  
  </div>:<button type="submit" className="text-white bg-main hover:bg-main focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto ml-auto block px-5 py-2.5 text-center dark:bg-main dark:hover:bg-main dark:focus:ring-main">Login</button>}
  <Link to={'/forgetpasword'} className='bg-white underline'>forget password ?</Link>
</form>


    
    </>
  )
}
