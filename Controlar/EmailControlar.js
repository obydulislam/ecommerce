const bcrypt = require('bcrypt');
const Email = require("../Helpers/Emailvalidasion")
const User = require("../model/User")
const otpGenerator = require('otp-generator')
const nodemailer = require("nodemailer");

let Emailcontrolar = async (req,res)=>{
    let {name, email, password} = req.body
    let otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: true });
    let mailcheek = await User.find({email : email})

        if(mailcheek.length == 0){
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
                bcrypt.hash(password, 6, async function (err, hash) {
                    let user = new User({
                        name : name,
                        email : email,
                        password : hash,
                        otp : otp
                    })
                    user.save()
                    const transporter = nodemailer.createTransport({
                        service: 'Gmail',
                        auth: {
                          user: "obydulislam018834@gmail.com",
                          pass: "pvjc xzhb cgbu hqwu",
                        },
                      });
                      const info = await transporter.sendMail({
                        from: 'obydulislam018834', 
                        to: "nibirtanjir@gmail.com", 
                        subject: "Hello ✔", 
                        html: `<b> Your Otp is ${otp}</b>`, 
                      });
                      
                    res.send({success : "Done"})
                });
              
            }
        }
        else{
            res.send("Email All Ready velid")
        }
        

       
}
module.exports = Emailcontrolar