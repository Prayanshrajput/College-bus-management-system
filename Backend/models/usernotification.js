const mongoose=require("mongoose")

const usernotification=new mongoose.Schema({
    message:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:8*60*60,
    }
})

module.exports=mongoose.model("usernotification",usernotification)