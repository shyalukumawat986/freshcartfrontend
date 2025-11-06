import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function Productdetails() {
   let loc= useLocation()
  return (
    <>
      <Navbar/>
        <h1>productdetails</h1>
        <img src={loc.state.productimage}/>
        <Footer/>
          



      
    </>
  )
}
