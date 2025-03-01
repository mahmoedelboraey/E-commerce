import React, { useContext } from 'react'
import { countContext } from '../../../context/countContext'
import RecentProducts from './RecentProducts/RecentProducts'
import PopulerCtegory from './PopulerCtegory/PopulerCtegory'
import StaticSlider from './StaticSlider/StaticSlider'


export default function Home() {
//   let x = useContext(countContext)
//   console.log(x)
// function changeNumber(){
//   x.setCount(Math.random()*100)
// }
  return (
    <>
    
    <div className='container'>
      <StaticSlider/>
      <PopulerCtegory/>
      <RecentProducts/>
    </div>
   

    </>
  )
}
