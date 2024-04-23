const { json } = require("express")
const Login =require("../models/login")
const Signup =require("../models/signup")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const mailSender = require("../utils/mailSender")
const Otp = require("../models/otp")

const signup = require("../models/signup")
require("dotenv").config()

exports.login= async (req,res)=>{
    try{
     
const{email,password}=req.body

let find=await Signup.findOne({email})

if(!find){
    res.status(500).json({
        success:false,
        resp:"wrong",
        massages:"user is not find",
        message:error.message
    }) 
}

let scrate=process.env.scrate
let token
if( await bcrypt.compare(password,find.password)){

    const payload={
        email:find.email,
        role:find.role
    }

     token=jwt.sign(payload,scrate,{
        expiresIn:"2m"
    })

  // find=find.toObject()
   find["token"]=token
    find.password="ram ram"

  
  console.log("value of find ->",find)

let option={
expires:new Date( Date.now()+3*24*60*60*1000),

}
//console.log("find ka data type ->",typeof find)
let tm=find.rollnumber;
let em=find.email
if(find.role=="admin"){
    token="AbCz."+String(token)
    res.cookie("prayansh",token,option)
}
else{
token=String(tm)+"#"+"&"+String(em)+"&"+String(token)}

 return res.send({
        success:true,
        token,
        find,
        message:"user logged in successfully"
    })

  
}
else{
     return res.status(501).json({
        success:false,
        resp:"wrong",
        massages:"password is not match",
    }) 
}


    }
    catch(error){
        res.status(502).json({
            success:false,
            message:"some thing wrong bro",
            message:error.message
        })
    }
}

exports.mail= async(req,res,next)=>{
    try{
const {email}=req.body
const find=await signup.findOne({email})

if(!find){
    res.json({
        success:false,
        message:"firstly your create account"
    })
}

let str=Date.now()
str=str.toString();
str=str.substring(9)

const otp= new Otp({email,otp:str})

const saveotp=await otp.save();
res.json({
    success:true,
    message:"otp send successfully"
})
    }
    catch(error){
        res.json({
            success:false,
            message:error.message,
            problem:"problem at mailsender"
        })
    }
}



exports.userverifyOtp=async (req,res)=>{
    try{
        const {otp}=req.body

        const findotp=await Otp.findOne({otp})

        if(!findotp){
           return  res.send({
                success:false,
                message:"wrong otp"
            })
        }


        res.send({
            success:true,
            message:"otp verify"
        })

        
    }
    catch(error){
res.json({
    success:false,
    message:error.message
})
    }
}





exports.forget= async(req,res)=>{
    let hashedpassword
    try{
        const{email,password}=req.body

        const user= await Signup.findOne({email})
if(!user){
   return res.status(500).json({
        success:false,
        massages:"cheak your email id"
    })
}

try{
    hashedpassword=await bcrypt.hash(password,10)

}
catch(error){
    res.status(450).json({
        success:false,
        message:error.message
    })
}
       
        const change= await Signup.findOneAndUpdate(
            {email:email},{password:hashedpassword})

            res.status(200).json({
                success:true,
                massage:"password updated successfuly"
            })
    }
    catch(error){
        res.status(400).json({
            success:false,
            hashedpassword,
            massage:error.massage
        })
    }

}