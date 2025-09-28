const jwt  = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
   // const token = req.header("Authorization")?.replace("Bearer ", "");
      const token = req.headers.authorization?.split(" ")[1] || null;
   console.log("Token:", token);
   console.log("JWT_SECRET:", process.env.JWT_SECRET);
    if (!token){
        return res.status(401).json({ error: "No Token Provided, Authorization Denied." });
    }
    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded);
        req.user = decoded;
         console.log(req.user.role);
        next();

    } catch(error){
        console.log("Error verifying token:", error);
        res.status(400).json({error: "Invalid Token"});
        
    }
};

module.exports = authMiddleware; 