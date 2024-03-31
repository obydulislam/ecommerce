const User = require("../model/User")
let Otpverify =async(req,res)=>{
    let {otp, email} = req.body
    let data = await User.find({email : email})
    
    if(data[0].otp == otp){
        await User.findOneAndUpdate({email : email}, {otp : "" , verify : true} )
    }
    else{
        res.send("otp not mach")
    }
     
}
module.exports = Otpverify