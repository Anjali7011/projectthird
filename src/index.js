const express = require('express');
const mongoose = require('mongoose');
const route = require("./route/route");
const app = express();
const multer=require("multer")
const {AppConfig}=require('aws-sdk')

app.use(express.json());
app.use(multer().any())

app.use("/", route);


mongoose.connect("mongodb+srv://Lucifer:lucifer123@mycluster.bdqxxtr.mongodb.net/group20Database?retryWrites=true&w=majority", { 
    useNewUrlParser: true
}).then(()=> console.log("MongoDB Connected"))
.catch((err)=> console.log(err))

app.listen(process.env.PORT || 4000, ()=>{
    console.log(`Server is running on port ${4000}`)
})