const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB =  require("./config/dbConfig");
const authRoutes = require ("./routes/authRoutes");
const movieRoutes = require ("./routes/movieRoutes");
const theatreRoutes = require("./routes/theatreRoutes")


 require("dotenv").config();

const app = express();

//Middleware:
app.use(bodyParser.json());
app.use(cors());

//Connect to MongoDb:
connectDB();



//Routes:
app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/theatres", theatreRoutes);



const PORT = process.env.PORT || 4040;
//const PORT = 2000;
app.listen(PORT, ()=>{
    console.log(`Server is Running on the port ${PORT}`);
});