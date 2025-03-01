import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from './Navebar.module.css'
import logo  from '../../assets/images//freshcart-logo.svg'
import { Link, Links, NavLink, useNavigate } from 'react-router-dom'
// lazem import context 
import { countContext } from '../../context/countContext'
import { tokenContext } from '../../context/tokenContext'
import { cartContext } from '../../context/cartContext'
import { wilshlistContext } from '../../context/wishlist'


export default function Navebar() {
  let x = useContext(countContext)
  let {token , setToken} = useContext(tokenContext)
  let{numOfCartItems} = useContext(cartContext)
  let{count} = useContext(wilshlistContext)
  console.log(token , 'nav bar token ')
  let navegit = useNavigate()

  function logOut(){
    // remove local storge 
    localStorage.removeItem("user")
    // set token null 
    setToken(null)
    // naviget to log in 
    navegit("./login")


  }

  return (<>
    <nav  className="bg-white  border-gray-200 dark:bg-gray-900 text-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className='flex items-center gap-4'>
      <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} width={'200px'} alt="" />
      </a>
      <div className="hidden w-full z-50 absolute top-[40px] left-0 md:top-0 md:relative md:block md:w-auto" id="navbar-default">
        {token ? <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {/* lw how 3amel log in show nav bar : show not  */}
          <li>
           
            <NavLink to={''} className="text-gray-900 block py-2 px-3 rounded   dark:text-white md:dark:text-blue-500" aria-current="page">Home</NavLink>
          </li>
          <li>
            <NavLink to={'cart'} className="block py-2 px-3 text-gray-900 rounded   md:border-0   dark:text-white  ">Cart{numOfCartItems}</NavLink>
          </li>
          <li>
            <NavLink to={'product'} className="block py-2 px-3 text-gray-900 rounded   md:border-0   dark:text-white  ">Products</NavLink>
          </li>
          <li>
            <NavLink to={'categories'} className="block py-2 px-3 text-gray-900 rounded   md:border-0   dark:text-white  ">Categories</NavLink>
          </li>
          <li>
            <NavLink to={'brands'} className="block py-2 px-3 text-gray-900 rounded   md:border-0   dark:text-white  ">Brands</NavLink>
          </li>
        </ul> : ''}
      </div>

      </div>
      <div className=' flex gap-4'>
      <div>
  <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-gray-900 hover:bg-gray-900 focus:outline-none focus:ring-gray-900 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center dark:bg-main" type="button">  <i class="fa-solid fa-circle-user"></i> <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
    </svg>
  </button>
  {/* Dropdown menu */}
  <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-900 rounded-lg shadow-sm w-44 dark:bg-gray-900">
    <ul className="py-2 text-sm text-gray-900 dark:text-gray-900 justify-center items-center" aria-labelledby="dropdownDefaultButton">
      <li className='ms-2 '>
      {count}
       <Link to={'wilshlist'}><i class="fa-solid fa-heart text-sm"> wilshlist</i></Link>
      </li>
     
      <li className='ms-2'>
       <Link to={'allorders'}> <i class="fa-solid fa-truck  text-sm mx-2">allorders</i></Link>
      </li>
    
    </ul>
  </div>
</div>
        <ul className='flex items-center gap-4'>
        <li>
          {numOfCartItems}
          <Link to={"cart"}> <i class="fa-solid fa-cart-shopping"></i></Link>
          </li>
        {/* <li>
          
          
          {count}
          <Link to={"wilshlist"}> <i class="fa-solid fa-heart"></i></Link>
          </li> */}
          <li>
            <i className='fa-brands fa-instagram'></i>
          </li>
          <li>
            <i className='fa-brands fa-facebook'></i>
          </li>
          <li>
            <i className='fa-brands fa-tiktok'></i>
          </li>
          <li>
            <i className='fa-brands fa-twitter'></i>
          </li>
          <li>
            <i className='fa-brands fa-linkedin'></i>
          </li>
          <li>
            <i className='fa-brands fa-youtube'></i>
          </li>
        
        </ul>
      
        <ul className='flex gap-4'>
          {/* lw how 3amel log in show siginout  : show login  register   */}
          {token ? <li>
            <span onClick={logOut}>SiginOut</span>

          </li> : <>
          <li>
          <NavLink to={'register'}>Register</NavLink>
          </li>
          <li>
          <NavLink to={'login'}>LogIn</NavLink>
          </li>

          </> }
          
         
          
          
        </ul>
      </div>
      
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
     
    </div>
  </nav>
  






</>
  )
}
