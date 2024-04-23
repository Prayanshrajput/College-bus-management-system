const mongoose =require("mongoose")

const Enrollment= new mongoose.Schema({
    rollnumber:{
        type:String
    }

})

module.exports=mongoose.model("Enrollment",Enrollment)