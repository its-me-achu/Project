// import {api} from '../api/axios'
// //Add a   New Movie:
// export const AddMovie = async (movies) =>{
//    console.log(movies);
//     try{
//         const token = localStorage.getItem("token"); 
//         const response = await api.post("/movies/add-movies", movies,{
//                        headers: {
//                 Authorization: `Bearer ${token}`,
//               } });
//         return response.data;
//     }catch(error){
//         return error.response 
//  }};
// //Get All Movies:
// export  const GetAllMovies = async ()=>{
//     try{
//         const token = localStorage.getItem("token");
//              const response = await api.get("/movies/get-all-movies",{
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                   }});
//              return response.data;    
//     }catch(error){
//         return error.response 
//  }};