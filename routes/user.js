const { registerUser, loginUser, updateUser, deleteUser, forgetPassword, verifyPasswordToken, resetPassword } = require("../controllers/user");

const express = require('express');
const checkToken = require("../middleware/checkToken");
const router = express.Router();

router.post('/create', registerUser)
router.post('/login', loginUser)
router.put('/update/:_id', checkToken , updateUser)
router.delete('/delete/:_id',checkToken, deleteUser)
router.post('/forgetpassword',checkToken,forgetPassword)
router.get('/forgetpassword/:token',verifyPasswordToken)
router.post('/resetpassword/:token',resetPassword)



module.exports = router