import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from './Layout.module.css'

import Footer from './../Footer/Footer';
import Navebar from './../Navebar/Navebar';
import { Outlet } from 'react-router-dom';


export default function Layout() {
  return (
    <>
    <Navebar/>
    <Outlet/>
    <Footer/>   
    </>
  )
}
