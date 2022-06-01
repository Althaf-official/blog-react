import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
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
    return (
        <div className='homePage'>{postLists.map((post) => {// {postLists.map((post) - postList is grab all the document from collection.  and .map -for catch each one of them 
            return <div className='post'>
                <div className='postHeader'>
                    <div className='title'><h1>{post.title}</h1></div>
                </div>
            </div>//in the map(post) is holding each one data

        })}</div>
    )
}

export default Home
