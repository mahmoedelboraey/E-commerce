import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Categories from './components/Categories/Categories';
import Brands from './components/Brands/Brands';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import Register from './components/Register/Register';
import Notfound from './components/Notfound/Notfound';
import Cart from './components/Cart/Cart'
import { tokenContext } from './context/tokenContext'
import ProtectedRouter from './components/ProtectedRouter/ProtectedRouter'
import AuthView from './components/AuthView/AuthView'
import Home from './components/Home/components/Home';
import ProductDetiles from './components/ProductDetiles/productDetiles';
import { ToastContainer } from 'react-toastify'
import CheckOut from './components/CheckOut/CheckOut';
import AllOrders from './components/AllOrders/AllOrders';
import ForgetPassword from './components/ForgetPassword/ForgetPassword'
import WilshlistComponent from './components/WilshlistComponent/WilshlistComponent'




function App() {
  // استدعاء token 
  let{setToken} = useContext(tokenContext)
// hna awl ma yfta7 yshof fe token wl la lo kda yo7dha f settkoen 
useEffect(() =>{
  if(localStorage.getItem("user")){
    setToken(localStorage.getItem("user"))
  }
})

const routes = createHashRouter([
  {path:'' ,element:<Layout/> , children:[
    {index:true , element: <ProtectedRouter><Home/></ProtectedRouter>},
    {path:'home' , element:<ProtectedRouter><Home/></ProtectedRouter>},
    {path:'categories' , element:<ProtectedRouter><Categories/></ProtectedRouter>},
    {path:'brands' , element:<ProtectedRouter><Brands/></ProtectedRouter>},
    {path:'cart' , element:<ProtectedRouter><Cart/></ProtectedRouter>},
    {path:'productDetiles/:id/:categoryid' , element:<ProtectedRouter><ProductDetiles/></ProtectedRouter>},
    {path:'login' , element:<AuthView> <Login/> </AuthView>},
    {path:'product' , element: <ProtectedRouter><Products/></ProtectedRouter>},
    {path:'checkout' , element: <ProtectedRouter><CheckOut/></ProtectedRouter>},
    {path:'allorders' , element: <ProtectedRouter><AllOrders/></ProtectedRouter>},
    {path:'wilshlist' , element: <ProtectedRouter><WilshlistComponent/></ProtectedRouter>},
    {path:'forgetpasword' , element: <AuthView><ForgetPassword/></AuthView>},
    {path:'register' , element:<AuthView> <Register/></AuthView> },




    {path:'*' , element:<Notfound/>},
  ]}
])
  return (
    <>
    <RouterProvider router={routes}> 
    
    
    </RouterProvider>
    <ToastContainer />
    </>
    
  )
}
export default App
