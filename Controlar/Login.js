const User = require("../model/User")
let Login = async (req,res)=>{
    let {email, password, otp } = req.body
    let data = await User.find({email:email})
    console.log(data[0].otp)

    
}
module.exports = Login