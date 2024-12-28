const mongoose = require('mongoose');
const applicantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,   
    },
    phone:{
        type: String
    },
    address:{
        type: String
    },
    resume:{
        type: String
    },
    coverletter:{
        type: String
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    job:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'job'
    }
},{timestamps: true})

applicantSchema.add({
    companyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
})

module.exports = mongoose.model('applicants', applicantSchema)