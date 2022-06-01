import { async } from '@firebase/util'
import React, { useEffect, useState } from 'react'
import { addDoc, collection } from "firebase/firestore"
import { db ,auth} from '../firebase-config'
import {useNavigate} from "react-router-dom"

function CreatePost({isAuth}) {//isAuth i grab from the props.because i will use for useEffect to prevent someone calling '/createpost' page
    const [title, setTitle] = useState("")
    const [postText, setPostText] = useState("")
    //("")   means pass the value as a string

    //^this is the important step.when we click on the submit button the data will store on the database
    const postsCollectionRef = collection(db, "posts")
    let navigate=useNavigate();
    const createPost = async () => {
        await addDoc(postsCollectionRef, {
             title, 
             postText, 
             author: { name: auth.currentUser.displayName, id:auth.currentUser.uid },
         })// take the information from the user
         navigate('/');
    }

    useEffect(()=>{
        if(!isAuth){//if the person is not authenticated
            navigate('/login');//it will redirected to the login page

        }
    },[])

    return (
        <div className='createPostPage'>
            <div className='cpContainer'>
                <h1>Create A Post</h1>
                <div className='inputGp'>
                    <label>Title:</label>
                    <input placeholder='Title...' onChange={(event) => {
                        setTitle(event.target.value);//whenever there is a change we grab the value using this setTitle
                    }} />
                </div>
                <div className='inputGp'>
                    <label>Post:</label>
                    <textarea placeholder='Post...' onChange={(event) => {
                        setPostText(event.target.value);
                    }} />
                </div>
                <button onClick={createPost}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost
