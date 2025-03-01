import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from './Categories.module.css'
import axios from 'axios'

export default function Categories() {
    let[category , setCtegory] =useState([])
  async function getCategory() {
    const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`

    ).then(function ({ data }) {
      setCtegory(data.data)
      console.log(data.data)
     
      return true

    })
      .catch(function (err) {
        console.log(err, 'brand  errrro')
        return false
      })

    return data
  }
  useEffect(() => {
    getCategory()
  }, [])

  return (
    <>
    

{category && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-3 container'>
  {category.map((categorys) =>(
    <div className=" flex flex-wrap  max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div>
         <img className="w-[400px] rounded-t-lg" src={categorys.image} alt="product image" />
      </div>
        <span className="text-3xl  py-4 font-bold text-gray-900 dark:text-white">{categorys.name}</span>
    
  </div>

  )) }
  
  </div>}
  






    </>
  )
}
