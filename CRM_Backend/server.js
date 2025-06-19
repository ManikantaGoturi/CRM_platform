const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const router = require('./router/router')
const cors = require('cors');



const app = express()
app.use(cors());
app.use(express.json())
const PORT = 8080
dotEnv.config()


mongoose.connect(process.env.mongo_uri)
.then(()=>{
    console.log("MongooDB Connected Successfully!");
})
.catch((err)=>{
    console.log("error in connection",err);
})

app.use('/api',router);

app.use('/test',(req,res)=>{
    res.send('Manikanta');
})

app.listen(PORT,()=>{
    console.log("Server is running on PORT 8080");
})