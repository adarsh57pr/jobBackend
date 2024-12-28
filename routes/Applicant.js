

const express = require('express');
const { applyJob, AllJobs, singleJob, getApplicants } = require('../controllers/Applicants');
const checkToken = require('../middleware/checkToken');

const router = express.Router();

router.post('/apply',checkToken, applyJob)
router.get('/appliedjob',checkToken,AllJobs)
router.get('/singlejob/:_id',singleJob)
router.get('/getApplicants',checkToken,getApplicants);


module.exports = router