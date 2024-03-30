const express = require("express");
const _ = express.Router();
const EmailControlar = require("../../Controlar/EmailControlar")


_.post("/reqistrions",EmailControlar )



module.exports = _