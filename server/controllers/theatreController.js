const Theatre = require("../models/theatreModel");
        //Add Theatre:
const addTheatre = async (req, res) =>{
    try{
        const newTheatre = new Theatre(req.body);
        await newTheatre.save();
        console.log("Theatre Added Successfully:", newTheatre);
        res.status(201).json({message: "Theatre Added Successfully"});
    }
    catch(error){
        console.error("Error adding theatre:", error);
        res.status(500).json({ error: "Internal server error"});
    }};

//GetAll Theatre:
const getAllTheatre = async (req, res) =>{
    try{
        const getTheatre = await Theatre.find();
        res.status(200).json({message: "GetAllTheatre", getTheatre});
    }catch(error){
        console.error("Error fetching theatres:", error);
        res.status(500).json({ error: "Internal server error" });

    }
};
//Update Theatre:
const updateTheatre = async (req, res) =>{
    try{
        await Theatre.findByIdAndUpdate(req.body.theatreId, req.body);
        res.status(200).json({message: "Theatre Updated Successfully"});

    }catch(error){
                console.error("Error Updating Theatres:", error);
                res.status(500).json({ error: "Internal server error"});
    }
};
//Delete Theatre:
const deleteTheatre = async(req, res) =>{
    try{
await Theatre.findByIdAndDelete(req.params.id);
res.status(200).json({message: "Deleted Theatre Successfully"});
    }catch(error){
console.log("Error while deleting the theatre:", error);
res.status(500).json({ error: "Internal server error" });
    }
};
//Get TheatreBy Id:
const getTheatteById = async (req, res) =>{
    try{
  await Theatre.findById(req.params.id);
    res.status(200).json({message: "GetTheatre Correctly"});
    }catch(error){
console.log("Error while getting the theatre by id:", error);
res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    addTheatre,
    getAllTheatre,
    updateTheatre,
    deleteTheatre,
    getTheatteById
};