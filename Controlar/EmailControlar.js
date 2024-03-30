const Email = require("../Helpers/Emailvalidasion")
const User = require("../model/User")
let Emailcontrolar = async (req,res)=>{
    let {name, email, password} = req.body
    let mailcheek = await User.find({email : email})
        

        if(!name){
            res.send("name required")
        }
        else  if(!email){
            res.send("email required")
        }
        else  if(!password){
            res.send("password required")
        }
        else{
            if(Email){
                if(!Email(email)){
                  return   res.send("pless velid Email")
                }
            }
            let user = new User({
                name : name,
                email : email,
                password : password
            })
            // user.save()
            // res.send({success : "Done"})
        }
}
module.exports = Emailcontrolar