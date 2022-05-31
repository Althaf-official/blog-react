import React from 'react'
import { auth, provider } from "../firebase-config"
import { signInWithPopup } from "firebase/auth"
import {useNavigate } from "react-router-dom"

function Login({setIsAuth}) {
    let navigate =useNavigate()

    const signInWithGoogle = () => {
        //i call the imported function signInWithGoogle and i pass the auth and provider wich is i created in firebase-config.js file
        signInWithPopup(auth, provider).then((result) => { //the user data will be in the result.
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/")
            //navigate("/createpost")
        });
    };
return (
    <div className='loginPage'>
        <p>Sign In With Google</p>
        <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign In With Google</button>

    </div>
)
}

export default Login
