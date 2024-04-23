const Signup =require("../models/signup")
const otp =require("../models/otp")
const otpgenerator=require("otp-generator")
//send otp

exports.sendOtp=async (req,res)=>{

    try{
const {email}=req.body;

const cheakUserPresent=await Signup.findOne({email})

if(cheakUserPresent){
   return res.send(
       {
        success:false,
        message:"user already registered"
       }
    )
}

var otp=otpgenerator.genetate(6,{
    upperCaseAlphabets:false,
    lowerCaseAlphabets:false,
    specialChars:false
})

let result=await otp.findOne({otp:otp})

const otpPaylode={email,otp}

//enter in db

const otpBody=await otp.create(otpPaylode)
   
res.send({
    success:true,
    message:"otp send successfully"
})

}
    catch(error){
        res.send({
            success:false,
            message:error.message
        })
    }
}
