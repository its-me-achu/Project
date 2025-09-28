const Movie = require ('../models/movieModel');

                    //*---Add Movie*---///
const addMovie = async (req, res)=>{
    try{
        const newMovie = new Movie(req.body);
        await newMovie.save();
        console.log("Movie Added SuccessFully:", newMovie);
        res.status(201).json({message: "Movie Added Successfully"});
    }catch(error){
           console.error("Error adding movie:", error);
                res.status(500).json({ error: "Internal server error"})
    }
};
                         //*---Get all  Movies*---///
        const getAllMovies =  async (req , res) =>{
            try{
                const getMovie = await Movie.find();
                res.status(200).json({message:"GetallMovies:" , getMovie});
            }catch(error){
                  console.error("Error fetching movies:", error);
                res.status(500).json({ error: "Internal server error"})
            }
        };
              //*---Update Movies*--///
    const updateMovie =  async (req, res) =>{
        try{
            await Movie.findByIdAndUpdate(req.body.movieId, req.body);
            res.status(200).json({message: "Movie Updated Successfully"});
        }catch(error){
                    console.error("Error Updating movies:", error);
                res.status(500).json({ error: "Internal server error"});
        }
    };

    //*---Delete Movie*---//
    const deleteMovie = async (req, res) =>{
        try{
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json({message : "Deleted Movie Successfully"});
        }catch(error){
               console.error("Error while delete the movies:", error);
                res.status(500).json({ error: "Internal server error"});
        }
    };
      //*---Get Movie By Id ---*//
      const getMovieById = async (req, res) =>{
        try{
            await Movie.findById(req.params.id);
          res.status(200).json({message : "GetMovie Correctly"});
        }catch(error){
 res.status(500).json({ error: "Internal server error"});
        }
      };
               

module.exports ={
    addMovie,
    getAllMovies,
    updateMovie,
    deleteMovie,
    getMovieById
}