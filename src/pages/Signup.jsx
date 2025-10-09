import axios from 'axios'
import React, { useState } from 'react'

function Signup() {

  let [signup,setsignup]= useState({})

  let inputvalue=(e)=>{
    setsignup({
      ...signup,[ e.target.name]:e.target.value 
    })
  }

   let submitbtn=()=>{
    axios.post("http://localhost:5000/signup", {signup})
   }

  return (
    <>
      <div class="signup-container">
    <span class="close-btn">&times;</span>
    <h2>Sign Up</h2>

    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Enter Your Name" name='name' onChange={inputvalue}/>
      </div>

      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" id="email" placeholder="Enter Email address" name='email' onChange={inputvalue}/>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter Password" name='password' onChange={inputvalue}/>
      </div>

      <p class="terms">
        By Signup, you agree to our 
        <a href="#">Terms of Service</a> & 
        <a href="#">Privacy Policy</a>
      </p>

      <button type="submit" class="signup-btn" onClick={submitbtn}>Sign Up</button>
    </form>

    <div class="signin-link">
      Already have an account? <a href="#">Sign in</a>
    </div>
  </div>

    </>
  )
}

export default Signup
