const mongoose=require("mongoose")


const login=new mongoose.Schema({
    // clg_id:{
    //     type:String,
    //     require:true
    // },
    email:{
        type:String,
        require:true
      },
    password:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model("Login",login)