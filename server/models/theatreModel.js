const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    seats:{
        type: Number,
        required: true,
        default: 100,
    },
}, {timestamps: true});
    const theatres = mongoose.model("theatres", theatreSchema);
    module.exports = theatres; 