const mongoose = require('mongoose');
require('dotenv').config

const connectToDB = ()=>{
    mongoose.connect(`mongodb+srv://adarshlp110:${process.env.Mongo_Password}@jobportal.9fqes.mongodb.net/?retryWrites=true&w=majority&appName=jobPortal`)
    .then(() => console.log('connected to mongodb successfully'))
    .catch(()=>console.log('error in connecting mongodb'))
}

module.exports = connectToDB