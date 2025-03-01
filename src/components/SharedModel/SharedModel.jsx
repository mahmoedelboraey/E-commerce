import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from './SharedModel.module.css'

export default function SharedModel( {closeModel , items}) {
  
  return (
    <>

<div className='bg-[rgba(0,0,0,0.5)]  fixed inset-0 flex justify-center items-center'>
  <div className=' contant py bg-white p-5 relative'>
    <i onClick={closeModel} className='fa fa-close absolute top-0 left-[100%] p-3 bg-white rounded-md shadow-md cursor-pointer  translate-x-[-50%] translate-y-[-50%]'></i>
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                
                </tr>
              </thead>
              <tbody>
                {items.map((product) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4">
                      <img
                        src={product.product.imageCover}
                        className="w-16 md:w-32 max-w-full max-h-full"
                        alt="Apple Watch"
                      />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {product.product.title.split(" ").splice(0, 2).join(" ")}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                     
                        <div>
                          <span>{product.count}</span>
                        </div>
                       
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      ${product.price}
                    </td>
                   
                  </tr>
                ))}
              
              </tbody>
            </table>
  </div>
</div>
      </>
  )
}
