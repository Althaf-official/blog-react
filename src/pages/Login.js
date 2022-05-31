import React from 'react'
import {auth,provider } from "../firebase-config"
import {signInWithPopup} from "firebase/auth"

function Login() {


    const signInWithGoogle = () =>{

    }


  return (
    <div className='loginPage'>
        <p>Sign In With Google</p>
        <button className='login-with-google-btn'>Sign In With Google</button>
      
    </div>
  )
}

export default Login
