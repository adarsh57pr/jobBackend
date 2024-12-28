
let JobCollection = require('../models/Job')

const createJob = async(req,res)=>{
    // const {title,description,company}
let {role,_id } = req.user
if(role!=='company'){
    return res.json({msg:"Only company can create a job",success:false})  // checking if the user is company or not
}
   try {
    let data = await JobCollection.create({...req.body , userId:_id});
    res.json({msg:"jobPost created successfully",success:true,data})
   } catch (error) {
    res.json({msg:"error in creating job post",success:false,error:error.message}) 
   }


}

const updateJob = async(req,res)=>{
    let user_id = req.params._id;
    let {role,_id } = req.user
if(role!=='company'){
    return res.json({msg:"Only company can updated a job",success:false})  // checking if the user is company or not
 
}   
   try {
     // let {title,description,company} = req.body;
     let data = await JobCollection.findByIdAndUpdate(user_id , {$set:req.body},{new:true});
     res.json({msg:"job updated successfully",success:true, Job:data});
   } catch (error) {
    res.json({msg:error.message,success:false}) 
   }

    
}
const deleteJob = async(req,res)=>{
    let _id = req.params._id;
    let {role } = req.user
if(role!=='company'){
    return res.json({msg:"Only company can delete  job",success:false})  // checking if the user is company or not
 
}
   try {
    let data = await JobCollection.findByIdAndDelete(_id);
    res.json({msg:"job deleted successfully",success:true, data:data});

   } catch (error) {
      res.json({msg:"error in deleting job",success:false,error:error.message}) 
   }
}
const getAllJob = async(req,res)=>{
   try {
    let jobs = await JobCollection.find();
    res.json({msg:"all jobs fetched successfully",success:true, jobs})

   } catch (error) {
    res.json({msg:"error fetching jobs"})
   }
}
const singleCompamyJobs = async(req,res)=>{
    let company_Id = req.user._id;
    console.log(company_Id)
   try {
    let jobs = await JobCollection.find({userId:company_Id});
    res.json({msg:"get all jobs successfully",success:true,allJobs:jobs})
   } catch (error) {
    res.json({msg:"error in getting all jobs",success:false,error:error.message})
   }
}

const countNumbers = async(req,res)=>{
    let userId = req.user;
    try {
      let findJob = await JobCollection.find({userId});
    console.log(findJob)

      let appliedUserCounts = 0;
   
      findJob.forEach((jobObj)=>{
        appliedUserCounts = appliedUserCounts+ jobObj.applicants.length
      })
      console.log(appliedUserCounts)
  let totalJobPost = findJob.length;

  res.json({msg:"get successfully",success:true,jobCount:totalJobPost, appliedCount:appliedUserCounts})
    } catch (error) {
      res.json({msg:"error in getting counts",success:false,error:error.message})
    }
}

const searchJob = async()=>{
    const {title,location} = req.query;

    let obj = {};
    if(title){
      obj.title = { $regex: title, $option: 'i'}
    }
    if(location){
      obj.location = { $regex: location, $option: 'i'}
    }
    let jobs = await JobCollection.find(obj);
    res.json(jobs)
}


module.exports = {
    createJob,
    updateJob,
    deleteJob,
    getAllJob,
    singleCompamyJobs,
    countNumbers,
    searchJob
}