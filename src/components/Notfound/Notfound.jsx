import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from './Notfound.module.css'
import NOtfound from'../../assets/images/error.svg'

export default function Notfound() {
  return (
    <>
    <div className='flex items-center justify-center container'>
    <img className='' src={NOtfound} alt="" />
    </div>
    
    </>
  )
}
