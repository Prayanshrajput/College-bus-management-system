const compalainModel=require("../models/compalainModel")

exports.getnotificationtoadmin=async (req,res)=>{
    try{
            const data=await compalainModel.find({})
            if(!data){
              return  res.json({
                    success:false,
                    message:"Notification is empty"
                })
            }

            res.json({
                success:true,
                data,
                Message:"your request is successfuly "
            })
    }
    catch(error){
        res.json({
            success:false,
            message:"SOMETHING WENT TO WRONG"
        })
    }
}