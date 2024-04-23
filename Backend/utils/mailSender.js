//const { mongo, default: mongoose } = require("mongoose")
const mongoose=require("mongoose");
const nodemailer=require("nodemailer")
require("dotenv").config()

const mailSender=async (email,title,body)=>{
    try{
        let transporter=nodemailer.createTransport({
            host:process.env.MAIL_HOST,
             port: 587,
           //port: 25,
auth:{
user:process.env.MAIL_USER,
pass:process.env.MAIL_PASS,
} 

})

            let info=await transporter.sendMail({
                from:'CDGI BUS || chameli devi group of institude indore',
                to:`${email}`,
                subject:`${title}`,
                html:`${body}`
            })


    }
    catch(error){
        console.log(error.message)
    }
}

//module.exports=mongoose.model("mailSender",mailSender)
module.exports=mailSender;
