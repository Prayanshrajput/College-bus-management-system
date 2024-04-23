const mongoose =require("mongoose")

const compalainModel= new mongoose.Schema({
    
    input:{
        type:String
    }
    ,
    rollnumber:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        
    },
    url:{
        type:String,  
    }
    ,
    email:{
        type:String
    }

})

module.exports=mongoose.model("compalainModel",compalainModel)