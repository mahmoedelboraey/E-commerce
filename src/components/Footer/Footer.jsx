import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer className='bg-[rgb(242,242,242)]  w-full py-2'>
      <div className="container  px-9">
        <h2 className='capitalize text-3xl'>Get the freashCard app</h2>
        <p className='font-light my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptas.</p>
        <div className='flex mb-3'>
        <input type="email"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block grow me-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email..." required />
        <button className='capitalize bg-main p-2 text-white'>share app link</button>
        </div>
        <div className='partners py-4  border-y-2 flex justify-between' >
          <div className='payment flex gap-2 items-center'>
            <h2 className='text-3xl'>payment partnters</h2>
            <ul className='flex gap-3'>
              <li>
                <i className='fa-brands fa-amazon'></i>
              </li>
              <li>
              <i class="fa-solid fa-republican"></i>
              </li>
              <li>
              <i class="fa-brands fa-cc-mastercard"></i>
              </li>
              <li>
              <i class="fa-brands fa-cc-paypal"></i>
              </li>
            </ul>
          </div>
          <div className='app flex items-center'>
            <h2 className='capitalize text-3xl'>get delivers with freshCard</h2>
            <ul className='flex gap-4'>
              <li>
              <i class="fa-brands fa-app-store-ios"></i>
              </li>
              <li>
              <i class="fa-brands fa-google-play"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
