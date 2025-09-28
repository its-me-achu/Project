const express = require('express');
const router = express.Router();
const authMiddleWare = require("../middleware/authMiddleWare");
const {addTheatre, getAllTheatre, updateTheatre, deleteTheatre,
     getTheatteById} = require("../controllers/theatreController");

router.post('/add-theatre', authMiddleWare, addTheatre);
router.get('/get-all-theatres', authMiddleWare, getAllTheatre);
router.post('/update-theatre', authMiddleWare, updateTheatre);
router.get('/get-theatre-by-id', authMiddleWare, getTheatteById);
router.delete('/delete-theatre/:id', authMiddleWare, deleteTheatre);

module.exports = router;