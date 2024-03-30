const User = require("../model/User")
let Otpverify =async(req,res)=>{
    let {email, otp} = req.body

    let Otpex = await User.find({email : email})
     console.log(Otpex[0].otp)  
}
module.exports = Otpverify