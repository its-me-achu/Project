const express = require('express');
const router = express.Router();
const authMiddleWare = require('../middleware/authMiddleWare');
const {addMovie, getAllMovies, updateMovie, deleteMovie, getMovieById} = require('../controllers/movieController');
const authMiddleware = require('../middleware/authMiddleWare');

router.post('/add-movies', authMiddleWare, addMovie);
router.get('/get-all-movies', authMiddleWare, getAllMovies);
router.post('/update-movies', authMiddleware,updateMovie);
router.delete('/delete-movies/:id',authMiddleware , deleteMovie);
router.get('/get-movie-by-id/:id' , authMiddleware, getMovieById);

module.exports= router;