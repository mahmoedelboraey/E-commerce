import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from './Brands.module.css'

import axios from 'axios'
// import { useDispatch, useSelector } from 'react-redux'
// import { store } from '../../store/store'
// import { decres, increse } from '../../store/counterSlice'

export default function Brands() {
  let [brand, setbrand] = useState([])

// let  {count}=  useSelector((store) => store.counter)
// console.log(count)
// let dispatch = useDispatch()

  async function getBrand() {
    const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`
    ).then(function ({ data }) {
      setbrand(data.data)
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
    getBrand()
  }, [])

  return (
    <>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        {brand.map((brands) => (
            <div key={brands._id} className="border p-2 rounded-lg shadow-md">
              <img src={brands.image} alt={brands.name} className="w-full h-24 object-contain" />
              <p className="text-center mt-2 font-medium">{brands.name}</p>
            </div>
          ))}
      
        </div>
      </div>
      {/* <div className=' container'>
        <h1>{count}</h1>
        <button onClick={() =>(dispatch(increse()))} className='btn bg-red-600 text-white py-3 mx-3'>increas</button>
        <button onClick={() =>(dispatch(decres()))} className='btn bg-red-600 text-white py-3 '>decreas</button>
      </div> */}
    </>
  )
}
