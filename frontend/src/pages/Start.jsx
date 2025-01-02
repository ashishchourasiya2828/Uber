import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='h-screen bg-cover  bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhZmZpYyUyMGxpZ2h0JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D)] pt-10 w-full flex justify-between flex-col bg-red-400' >
            <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />
            <div className='bg-white px-4 py-4'>
                <h2 className='text-3xl font-bold tracking-tight font-sans  h-16' >Get started with Uber</h2>
                <Link to='/login' className=' flex items-center justify-center w-full bg-black py-3 rounded text-white text-xl font-medium' >Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start