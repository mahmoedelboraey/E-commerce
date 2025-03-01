import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from './Loading.module.css'
import loding from '../../../assets/images/loding.gif'
export default function Loading() {
  
  return (
    <div className='flex justify-center'>
      <img src={loding} className=''   alt="" />

    </div>
  )
}
