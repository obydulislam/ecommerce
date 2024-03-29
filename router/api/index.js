const express = require("express");
const _ = express.Router();
const authrouth = require('./auth')


_.use("/auth",authrouth)


module.exports = _