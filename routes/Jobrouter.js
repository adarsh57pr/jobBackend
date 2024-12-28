const { createJob, getAllJob, updateJob, deleteJob, singleCompamyJobs, countNumbers, searchJob } = require('../controllers/JobController')

const express = require('express');
const checkToken = require("../middleware/checkToken");
const router = express.Router();

router.post('/create', checkToken,createJob)
router.get('/getalljob',checkToken, getAllJob)
router.put('/update/:_id',checkToken,updateJob)
router.delete('/delete/:_id',checkToken, deleteJob)
router.get('/getsinglejob',checkToken,singleCompamyJobs)
router.get('/countJob',checkToken,countNumbers)
router.get('/searchJob',searchJob)



module.exports = router