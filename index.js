const express=require('express');
const app=express();
//Experess Rate limiter setup
const limit=require("express-rate-limit");
const limiter=limit({
    windowMs:5000,
    max:30
})
app.use(limiter)
//dot env setup
require("dotenv").config();
const port=process.env.PORT;
//body parser exress
app.use(express.urlencoded({extended:true}))
app.use(express.json());
//vbiew engine setup
app.set('view engine', 'ejs');
app.use(express.static('views'))
app.use(express.static('public'))
require("./confid/db")
//import router 
const {shereRoute}=require('./router/fileshereRoute');
app.use(shereRoute)
 

app.get("*",(req,res,next)=>{
res.send("Invalid Url")
})
app.get((err,req,res,next)=>{
    res.send(err)
})


app.listen(port,()=>{
    console.log(`the server is running at ${port}`)
})


