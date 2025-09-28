import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext';
import { Pencil } from "lucide-react"; // using lucide-react icons



function Admin() {
  const navigate = useNavigate();
  const {user} = useAuth();
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };
    const handleChange = (e) => {
    const value = e.target.value;
    if (value === "movie") {
      navigate("/moviecard");
    } else if (value === "theatre") {
      navigate("/theatrecard");
    }
  };
  return (
   <>
   <div className='grid grid-cols-2'>
    <div>
  <h1 className='text-center'>ADMIN PROFILE</h1>
  <h2></h2>
      {/* Profile Image Container */}
      <div className="relative">
        {/* Circle for profile image */}
        <img
          src={
            profileImage ||
            "https://via.placeholder.com/150?text=Upload+Photo"
          }
          alt="Photo
           Upload"
          className="w-32 h-32 rounded-full border-2 border-pink-600 object-cover ml-60 mt-5"
        />
        {/* Pencil Icon */}
        <label
          htmlFor="fileUpload"
          className="absolute mr-60 mb-5
           bottom-2 right-2 bg-pink-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-400 transition"
        >
          <Pencil size={16} />
        </label>

        {/* Hidden File Input */}
        <input 
          type="file"
          id="fileUpload"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
        {/* Admin Name */}
        <input
        type='text'
        placeholder='name'
        className='ml-50 mt-4'
        />
    </div>
  <div>
  <div className='p-3 mt-20 mr-10 text-center bg-pink-600 hover:bg-blue-300 rounded-sm'
 >
   <select  defaultValue=""
   onChange={handleChange}>
    <option value="" >--Add Movies / Theatres-- </option>
    <option value="movie">Add Movie</option>
    <option value="theatre">Add Theatre</option>
   </select>
   </div>
   <h1
   onClick={()=>{
    navigate('/uploadmovies')
   }} className='p-3 mt-20 mr-10 text-center bg-pink-600 hover:bg-blue-300 rounded-sm'>UPLOAD MOVIES</h1>
  <h1 
   onClick={()=>{
    navigate('/bookingdetails')
   }} 
   className='p-3 mt-20 mr-10 text-center bg-pink-600 hover:bg-blue-300 rounded-sm'>BOOKING DETAILS</h1>

  </div>
 
   </div>
   </>
  )
}

export default Admin