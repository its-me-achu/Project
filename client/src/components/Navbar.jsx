import React , {useEffect, useState }from 'react'
import { Link } from 'react-router-dom'
import { useAuth }  from '../Context/AuthContext';
import { useNavigate,} from 'react-router-dom';
import api from '../api/axios'



function Navbar() {
    const {user,  logout } = useAuth();
  
   
  return (
    <>
    <nav className='bg-gradient-to-r from-pink-800 to-blue-500 text-black p-4 flex justify-between items-center'>
        <h1> ###---AARA MOVIES---###  </h1>
       <div>{user ?  (
        <>
        <Link to='/'
        className='bg-gray-400 text-black-800 font-bold px-4 py-2 rounded-xl hover:bg-pink-800' variant="contained" onClick={logout}>
            Logout</Link>
        </>
      ) : (
         <Link 
         to='/' 
         variant="contained" 
        className='bg-gray-400 text-black-800 font-bold px-4 py-2 rounded-xl hover:bg-pink-800'
      >Login</Link>
      )}
      </div>  
     </nav>
    </>


  )
}

export default Navbar