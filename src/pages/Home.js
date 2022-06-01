import React, { useEffect, useState } from 'react'
import { getDocs, collection, deleteDoc ,doc} from 'firebase/firestore'
import { db } from '../firebase-config'
import { async } from '@firebase/util'
function Home() {
    //~Now i want to list all the post in the database
    const [postLists, setPostList] = useState([])//initialize as a empty array
    const postsCollectionRef = collection(db, "posts")

    useEffect(() => {//i will use useEffect for showing the data async
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef)
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getPosts()
    })

    const deletePost = async(id)=>{
        const postDoc= doc(db,"posts",id )// this function is for specify which document we want to delete. this function we imported from firestore
        await deleteDoc()//call the function for delete. firestore function. now we need specify which document we want to delete
    }




    return (
        <div className='homePage'>{postLists.map((post) => {// {postLists.map((post) - postList is grab all the document from collection.  and .map -for catch each one of them 
            return <div className='post'>
                <div className='postHeader'>
                    <div className='title'>
                        <h1>{post.title}</h1>
                    </div>
                    <div className='deletePost'>
                        <button onClick={()=>{deletePost(post.id)}}> &#128465;</button>
                    </div>
                </div>
                <div className='postTextContainer'>{post.postText}</div>
                <h6>@{post.author.name}</h6>
            </div>//in the map(post) is holding each one data

        })}</div>
    )
}

export default Home
