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
            setPostList(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
        }
        getPosts()
    })
    return (
        <div className='homePage'></div>
    )
}

export default Home
