// import axios from 'axios';
// import api from './Axios'

// //Register a new user:
// export const RegisterUser = async (payload) =>{
//     try{
//         const response = await axios.post("/auth/register", payload);
//         return response.data;
//     }catch(error){
//         return error.response;

//     }
// };

// //Login a user:
// export const LoginUser = async (payload)=>{
//     try{
//         const response = await axiosInstance.post("/auth/login", payload);
//         return response.data;
//     }catch(error){
//         return error.response;

//     }
// };


// //Get Current User:
// export const fetchCurrentUser = async () => {

//     try{
//  const token = localStorage.getItem("token"); 
//   const response = await axiosInstance.get("/auth/get-current-user", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
  
//     return response.data;
   
//   }
//     catch (error) {
//     return error.response;


//     }};
  
