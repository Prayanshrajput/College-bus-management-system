const com=require("../models/compalainModel")

exports.readcom=async(req,res)=>{
    try{
const find=com.find()

res.json({
    success:true
})
    }
    catch(error){
        res.send({
            success:false,
            message:error.message
        })
    }
}