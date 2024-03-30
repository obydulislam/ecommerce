const mongoose = require("mongoose");
const {Schema} = mongoose;

let UserSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    otp : {
        type : String,
       
    },
    verify: {
        type : Boolean,
        default : false
    },
    rule : {
        type : String,
        enum : ["Admi", "User", "marchen"],
       default : "User"
    }
})
module.exports = mongoose.model(`User`, UserSchema)