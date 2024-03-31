const bcrypt = require('bcrypt');
const User = require("../model/User")
let Login = async (req,res)=>{
    let {email, password } = req.body
    let existingUser = await User.find({email:email})
    // console.log(existingUser[0].password)
    if(existingUser.length == 0){
        res.send("credencial in not velie")
    }
    else{
        bcrypt.compare(password, existingUser[0].password, function(err, result) {
           if(result){
            res.send("Login success Full")
           }
           else{
            res.send("credencial in not velie")
           }
        });
    }
    

    
}
module.exports = Login