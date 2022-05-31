import React from 'react'
import {auth,provider } from "../firebase-config"

function Login() {
  return (
    <div className='loginPage'>
        <p>Sign In With Google</p>
        <button className='login-with-google-btn'>Sign In With Google</button>
      
    </div>
  )
}

export default Login
