import React,{createContext, useContext, useState, useEffect} from "react";
import { use } from "react";
import api from "../api/axios";


//Create a context for authentication
 const AuthContext = createContext();

 //Create a custom hook to use the AuthContext:
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
   
    const login = (userData) => {
        setUser(userData);
    }



    const logout = () => {
        localStorage.removeItem("token");
        // Optionally, you can also clear user data from state
        setUser(null);
       // navigate('/dashboard'); // Redirect to login page after logout
    }
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);