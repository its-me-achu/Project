const mongoose = require("mongoose");

const movieSchema  = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    poster:{
        type: String,
        required: true,
        default: false,
    },
}, {timestamps: true});

 const movies = mongoose.model("movies", movieSchema);

 module.exports = movies;
