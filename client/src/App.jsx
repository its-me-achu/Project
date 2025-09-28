import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Admin from './pages/Admin';
import UploadMovies from './pages/UploadMovies';
import MovieCard from './components/MovieCard';
import TheatreCard from './components/TheatreCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <div className='flex flex-col min-h-screen'>
 <Navbar/>
 <main className='flex-grow'>
 <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element = {<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/uploadmovies'  element={<UploadMovies/>}></Route>
      <Route path='/moviecard' element={<MovieCard/>}></Route>
      <Route path='/theatrecard' element={<TheatreCard/>}></Route>
      {/* Add more routes as needed */}
      </Routes> 
 </main>
      <Footer/>  
      </div>
      </Router>
  
    </>
  )
}

export default App
