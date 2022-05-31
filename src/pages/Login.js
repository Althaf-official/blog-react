import React from 'react'
import { auth, provider } from "../firebase-config"
import { signInWithPopup } from "firebase/auth"

function Login({setIsAuth}) {
    const signInWithGoogle = () => {
        //i call the imported function signInWithGoogle and i pass the auth and provider wich is i created in firebase-config.js file
        signInWithPopup(auth, provider).then((result) => { //the user data will be in the result.

        })
    }

}
return (
    <div className='loginPage'>
        <p>Sign In With Google</p>
        <button className='login-with-google-btn'>Sign In With Google</button>

    </div>
)
}

export default Login
