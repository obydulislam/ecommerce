require('dotenv').config()
const express = require("express");
const app = express()
const dbconnet = require("./DBconneted/DBconnetion")
const Router = require("./router")
dbconnet()

app.use(express.json())
app.use(Router)

app.post("/",function(req,res){
    
})


app.listen(8000,function(){
    console.log("nodemon runing")
})