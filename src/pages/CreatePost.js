import { async } from '@firebase/util'
import React, { useState } from 'react'

function CreatePost() {
    const [title, setTitle] = useState("")
    const [postText, setPostText] = useState("")
    //("")   means pass the value as a string

    //^this is the important step.when we click on the submit button the data will store on the database
    const createPost = async () =>{
        
    }

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
                <button>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost
