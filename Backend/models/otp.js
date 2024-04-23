const mongoose=require("mongoose");
const mailSender = require("../utils/mailSender");

const Otp= new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    otp:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:5*60,
    }
})


// async function sendverificationEmail(email,otp){
//     try{
// const mailResponse=await mailSender(email,"verification Email from CDGI buses ",otp)
//     }
//     catch(error){
//         console.log('error accured while sending mails')
//         throw error;
//     }
// }

Otp.post("save",async (doc)=>{

   await mailSender(doc.email,"Verify Your Account on CDGI Bus ",`<h4><p>Thank you for creating an account on the CDGI Bus Page. To complete the registration process and ensure the security of your account, please verify your email address by entering the OTP provided below:
   </p>
    <h3>OTP:${doc.otp}</h3>
    <br/>
    <p>
    Please enter this OTP on the CDGI Bus  to confirm your email address and activate your account. </p>
    
    <p>If you did not request this verification or have any concerns about your account's security, please contact us immediately at [CDGI_BUS@support.com].
    </p>
    
    <p>Thank you for choosing CDGI Bus Page. We look forward to serving you!
    </p>
    <br/>
    <h2>Best regards,
    <br/>
    CDGI BusTeam</h2>
    </h4>`)
    
})

// otp.pre("save",async function(next){
//     await sendverificationEmail(this.email,this.otp);
//     next();
// })


module.exports=mongoose.model("OTP",Otp)
