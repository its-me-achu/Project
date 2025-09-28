import React from 'react'
import { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api/axios'


function Signup() {
    const [name, setName] = React.useState('');
     const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
                 const response = await api.post('/auth/signup', {name, email, password });
           localStorage.setItem("token", response.data.token);
            login(response.data.token);
            navigate('/');
            alert("Signup successful! You can now login.");
      
        } catch (error) {
            console.log("Signup failed:", error);
        }
       
    }
  return (
    <>
     <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
        <h1 className='text-2xl font-bold mb-4'>SignUp</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
             <div className='mb-4'>
                <label className='block text-sm font-medium mb-2' htmlFor='name'>Name</label>
                <input
                    type='name'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='w-full p-2 border border-gray-300 rounded'
                    required
                />
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-medium mb-2' htmlFor='email'>Email</label>
                <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full p-2 border border-gray-300 rounded'
                    required
                />
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-medium mb-2' htmlFor='password'>Password</label>
                <input
                    type='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full p-2 border border-gray-300 rounded'
                    required
                />
            </div>
            <button type='submit' className='w-full bg-pink-800 text-black p-2 rounded hover:bg-gray-400'>Submit</button>
            <Link to="/" className='text-primary hover:underline hover:text-pink-800'>Allreday have a account ? let's lOGIN.</Link>
            </form>
        </div></>
  )
}

export default Signup