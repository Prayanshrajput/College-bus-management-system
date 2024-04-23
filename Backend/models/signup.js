const mongoose=require("mongoose")
const mailSender=require("../utils/mailSender")
const usershema = new mongoose.Schema({
  rollnumber:{
        type:String,
        require:true

    },
  email:{
    type:String,
    require:true
  },
  password:{
    type:String,
    require:true
  },
  role:{
    type:String,
    default:"Student",
  }

})


usershema.post("save",async (doc)=>{

  await mailSender(doc.email,"Welcome to CDGI Bus ",`<h4>Congratulations! Your account has been successfully created on the CDGI Bus Page. We're thrilled to have you on board!
  With your CDGI Bus Page account, you now have access to a range of features including:<br/>
  Find Your Bus Route<br/>
  Report The Bus<br/>
  Get Real Time Bus Change Notification<br/>
  If you have any questions, concerns, or feedback, please don't hesitate to reach out to us at [CDGI_BUS@support.com].
  Thank you for choosing CDGI Bus Page. We appreciate your trust in us and look forward to serving you.
  <br/>
  <h2>Best regards,<br/>
  CDGI BusTeam</h2></h4>`)
   
})

module.exports=mongoose.model("Signup",usershema)