const express=require('express');
const app=express();
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


