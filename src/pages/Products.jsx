import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function Products() {

    let [ourproducts,setourproducts]=useState([])

    useEffect(()=>{
        allproducts()
    },[])

    let allproducts=()=>{
        axios.get("http://localhost:5000/products").then((res)=>{
            if(res.data.status){
                  setourproducts(res.data.products)  
            }
        })
    }

    


    // productdetails 
    let go=useNavigate()
    let productdetails=(productitem)=>{
        go("/Productdetails",{state:productitem})
    }

    {ourproducts.map((item)=>{
        return(
            <>
                <img src={item.productimage} onClick={()=>productdetails(item)}/>

            </>
        )
    })}
      
    
  
}
