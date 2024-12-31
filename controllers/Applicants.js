let ApplicantCollection = require('../models/Applicant')
let JOB = require('../models/Job')

const applyJob = async (req, res) => {
    // res.send("Apply job running")
    let { _id } = req.user
    try {
        let job = await JOB.findById(req.body.job);
        if (!job.applicants.includes(req.user)) {
            job.applicants.push(req.user)
            await job.save()
        }
        else {
            return res.json({ msg: "already applied to this job", success: true })
        }
        let data = await ApplicantCollection.create({ ...req.body, user: _id });
        res.json({ msg: "Job Applied successfully", success: true, data: data });
    } catch (error) {
        res.json({ msg: " error in apply job", success: false, error: error.message });
    }
}


const AllJobs = async (req, res) => {
    // res.send("Get all jobs running")
    const { _id } = req.user
    try {
        let data = await ApplicantCollection.find({ user: _id }).populate('job');
        res.json({ msg: "fetch all jobs successfully", success: true, jobs: data });
    } catch (error) {
        res.json({ msg: "error in getting applied job", success: false, error: error.message });
    }
}


const singleJob = async (req, res) => {
    res.send("Single job running")
}

const getApplicants = async (req, res) => {
    let userId = req.user._id;

    try {
        let job = await ApplicantCollection.find({ companyId: userId }).populate('job');
        res.json({ msg: "get successfully", success: true, job })
    } catch (error) {
        res.json({ msg: "error in getting applicants", success: false, error: error.message })
    }
}

module.exports = {
    applyJob,
    AllJobs,
    singleJob,
    getApplicants,
}
