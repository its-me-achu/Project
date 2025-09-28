const express = require('express');
const router = express.Router();
const {registernewUser, loginUser, getCurrentUser} = require('../controllers/authController');
const authMiddleWare = require('../middleware/authMiddleWare');

router.post('/signup', registernewUser);
router.post('/login', loginUser);
router.get('/get-current-user', authMiddleWare, getCurrentUser); // Assuming getuserProfile is defined in authController


module.exports = router;