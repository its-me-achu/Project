const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();

                             /* Register a new user */
const registernewUser = async (req ,res) => {
    try{
        const {name, email, password, isAdmin} = req.body;
        //Check a existing user:
        const existingUser = await User.findOne({ email});
        console.log(existingUser);
        if(existingUser){
            return res.status(400).json({ message: "User already exists" });
        }
        //Create a new User:
        const newUser = new User ({ name, email, password,isAdmin: isAdmin|| false});
            await newUser.save();
            console.log("New user created:", newUser);
        //Response with success message:
            res.status(201).json({ message: "User registered successfully", user: newUser });
    }catch (error) {
        console.error("Error in registernewUser:", error);
        res.status(500).json({ message: "Internal server error" });
    } 
};


                                /* Login a user */
const loginUser = async (req, res) => {
    try{
        const {email, password } = req.body;
        //Check if user exists:
        const user = await User.findOne({email});
         console.log(user);
        if(!user){
           return res.status(401).json({ message: "User not found" });
        }
       
        //Check password:
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({ message: "Invalid credentials" });
        }
        //Generate JWT token:
        const token = jwt.sign(
            {
             userId: user._id ,
              email: user.email,
              Admin: user.isAdmin,
             },
              process.env.JWT_SECRET,
              {
                expiresIn: process.env.JWT_EXPIRES_IN,
              }
            );
            res.status(200).json({message: "Login Successfully", token,  isAdmin:user.isAdmin });         
    }catch(error){
        console.error("Error in loginUser:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
                            /*Get user Profile*/
    const getCurrentUser = async(req, res) =>{
        try{
           // const userId = req.user._id; // Assuming you have middleware to set req.user
           const user = await User.findById(req.userId).select("-password"); // Exclude password from response
            if(!user)
                return res.status(404).json({ message: "User not found" });
                  res.json({
      id: user.userId,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,   // <--- send this
    });
           
        }catch(error){
            console.error("Error in getuserProfile:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

module.exports = {
    registernewUser,
    loginUser,
    getCurrentUser
};
