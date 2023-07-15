const express=require('express');
const app=express();


//body parser exress

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.static('views'))

//import router 
const router=require('./route');
app.use(router)





module.exports=app;