import React from 'react'
import Login from './Login.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <>
    <div className='grid grid-cols-2 w-full'>
        <div className='text-2xl font-extrabold text-pink-800 mt-10 p-40 float-left'> AARA MOVIES!!!!
      <p className='text-xl text-black font-mono'>Relax and fun with your family and friends..</p>
        </div>   
        <div className=''>
            <Login/>
        </div>
    </div>
    </>
  )
}
export default Home