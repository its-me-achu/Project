import React from 'react'
import { useEffect } from 'react';
import { useNavigate , Link} from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import api from '../api/axios'

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/login', { email, password});
            localStorage.setItem("token", response.data.token);
            console.log(response.data);
            // login(response.data.token);
            // navigate('/dashboard');
            await login();
            if(response.data.isAdmin){
                navigate('/admin');
            }else{
                navigate('/dashboard');
            };
console.log(response);
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

  return (
    <>
      <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
        <h1 className='text-2xl font-bold mb-4'>Login</h1>
        <form onSubmit={handleSubmit}
        className='space-y-4'>
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
            <button type='submit'
             className='w-full bg-pink-800 text-black p-2 rounded hover:bg-gray-400'>Login</button>
            <Link to="/signup" className='text-primary hover:underline hover:text-pink-800'>If you Don't have an account? SIGNUP</Link>
            </form>
        </div>
    </>
  )
}

export default Login