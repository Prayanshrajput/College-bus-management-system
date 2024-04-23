const Signup =require("../models/signup")
const bcrypt=require("bcrypt")
const Enrollment=require("../models/enrollment")
const mailSender=require("../utils/mailSender")
const Otp=require("../models/otp")
const jwt=require("jsonwebtoken")
require("dotenv").config()
let newuser
let scrate=process.env.scrate

exports.sign= async (req,res)=>{

   try{
   
    
    const{rollnumber,email,password}=req.body


    const finduser= await Enrollment.findOne({rollnumber})

    if(!finduser){
        return res.json({
            success:false,
            message:"Your enrollment is not valid"
        })
    }
    const signdbfinduser=await Signup.findOne({rollnumber})
    if(signdbfinduser){
        return res.json({
            success:false,
            message:"Your are alreay singuped"
        })
    }

    let ifexist=await Signup.findOne({email})

    if(ifexist){
        return res.json({
            success:false,
            message:"user alredy exist"
        })
    }
    let hashedpassword

    try{
        hashedpassword=await bcrypt.hash(password,10)

        const payload={
            email:email,rollnumber
        }

        token=jwt.sign(payload,scrate,{
            expiresIn:"2m"
        })

    }
    catch(error){
        res.send({
            success:false,
            message:error.message
        })
    }
    newuser= new Signup({
        email,password:hashedpassword,rollnumber,token
    })

    let str=Date.now()
str=str.toString();
str=str.substring(9)

const otp= new Otp({email,otp:str})

const saveotp=await otp.save();


 
//const saveuser=await newuser.save();
   
return res.status(200).json({
        success:true,
        message:"account created successfully"
    })
   }
   catch(err){
    return res.status(500).json({
        mes:"find some error",
     message: err.message,
     
    }) 
 }
}

exports.verifyOtp=async (req,res)=>{
    try{
        const {otp}=req.body

        const findotp=await Otp.findOne({otp})

        if(!findotp){
           return  res.send({
                success:false,
                message:"wrong otp"
            })
        }

    const saveuser= await newuser.save()

        res.send({
            success:true,
            message:"Account created successfully"
        })

        
    }
    catch(error){
res.json({
    success:false,
    message:error.message
})
    }
}