const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors')
const userRouter = require('./routes/user')
const jobRouter  = require('./routes/Jobrouter')
const applicantRouter = require('./routes/Applicant')

const connection = require('./db')  // 
connection();


app.use(cors())
app.use(express.json({limit:'50mb'})) // middle ware are functions that can have the access of requesting to an object and responding to an object. they can modify the request and resposne and can also be used between the routes

app.get('/',(req,res)=>{
    res.send('welcome page');

})

app.set('view engine','ejs')

app.use('/users',userRouter)

app.use('/jobs',jobRouter)

app.use('/applicants',applicantRouter)


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})