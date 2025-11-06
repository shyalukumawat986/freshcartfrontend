import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'

import { Addproducts } from "./Dashboard/Addproducts";
import Products from './pages/Products'
import Productdetails from './pages/Productdetails'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featuredcategories from './components/Featuredcategories'
import Bannersection from './components/Bannersection'
import Popularproducts from './components/Popularproducts'
import Bestsells from './components/Bestsells'
import Section from './components/Section'
import Footer from './components/Footer'
import Buynow from './components/Buynow'
import Productdetail from './pages/Productdetail'
import Dashboard from './Dashboard/Dashboard'
import { Home } from './pages/Home'
import Signin from './pages/Signin'






function App() {
  

  return (
    <>
    
      
      <BrowserRouter>
      
        <Routes>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/Addproducts' element={<Addproducts/>} />
          <Route path='/Products' element={<Products/>} />
          <Route path='/Productdetail' element={<Productdetail/>} />
          <Route path='/Dashboard' element={<Dashboard/>} />
          <Route path='/Signin' element={<Signin/>} />


          {/* <Route path='/' element={<Header/>}/>
          <Route path='/' element={<Navbar/>} />
          <Route path='/' element={<Hero/>} />
          <Route path='/' element={<Featuredcategories/>} />
          <Route path='/' element={<Bannersection/>} />

          <Route path='/' element={<Popularproducts/>}/>
          <Route path='/' element={<Bestsells/>} />
          <Route path='/' element={<Section/>} />

          <Route path='/' element={<Footer/>} />
          <Route path='/' element={<Buynow/>} /> */}

          
          


          </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App
