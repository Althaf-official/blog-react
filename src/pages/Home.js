import React, { useEffect, useState } from 'react'
import {} from 'firebase/firestore'
function Home() {
    //~Now i want to list all the post in the database
    const [postLists,setPostList] =useState([])//initialize as a empty array

    useEffect(()=>{//i will use useEffect for showing the data async
        const getPosts =async()=>{
            const data = await
        }
    })
  return (
    <div className='homePage'></div>
  )
}

export default Home
