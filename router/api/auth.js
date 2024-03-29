const express = require("express");
const _ = express.Router();


_.post("/reqistrions", function(req,res){

    console.log(req.body)

})


module.exports = _