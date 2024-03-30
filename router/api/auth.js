const express = require("express");
const _ = express.Router();
const EmailControlar = require("../../Controlar/EmailControlar")
const OtpVerify = require("../../Controlar/otpverify")
const LogIn = require("../../Controlar/Login")
_.post("/reqistrions",EmailControlar )
_.post("/otpverify",OtpVerify)
_.post("/login",LogIn)




module.exports = _