const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    description:{
        type:String,
    },
    company:{
        type:String
    },
    salary:{
        type:String
    },
    image:{
        type:String,
        default:"https://media.istockphoto.com/id/610003972/vector/vector-businessman-black-silhouette-isolated.jpg?s=612x612&w=0&k=20&c=Iu6j0zFZBkswfq8VLVW8XmTLLxTLM63bfvI6uXdkacM="
    },
    jobRole:{
        type:String,
    },
    requirements:{
        type:Array
    },
    skills:{
        type:Array
    },
    applicants:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'users'
            }
        }
    ],
    lastDate:{
        type:String
    }

},{timestamps:true})

jobSchema.add({
    location:{
        type:String
    },
    ShiftAndSchedule:{
        type:String
    },
    lastDateOfApply:{
        type:String
    },
    jobType:{
        type:String
    }
})

module.exports = mongoose.model('job',jobSchema)