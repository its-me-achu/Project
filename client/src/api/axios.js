import axios from 'axios';


const api = axios.create({
    baseURL: "http://localhost:1998/api" //Backend URL:
});

//Add a token to the request headers:
api.interceptors.request.use((config) =>{
    const token = localStorage.getItem("token");
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
export default api;