import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from './Products.module.css'
import RecentProducts from '../Home/components/RecentProducts/RecentProducts'

export default function Products() {
  return (
    <>
    <div className=' container'>
    <RecentProducts/>

    </div>
    
    </>
  )
}
