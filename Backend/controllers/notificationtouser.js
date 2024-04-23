const usernotification=require("../models/usernotification")

exports.usernotification=async (req,res)=>{
    try{
            const data=await usernotification.find({})

            if(!data){
                return res.json({
                    success:false,
                    data,
                    message:"notification is empty"
                })
            }

            res.json({
                success:true,
                data
            })
    }

    catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}


exports.change=async(req,res)=>{
    try{
        const{oldbus,newbus}=req.body
            let message=oldbus+" - is replace to - "+newbus
        const data=new usernotification({message})
        const savedata=await data.save()

        res.json({
            success:true,
            savedata,
            message:"change is successfully "
        })

    }
    catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}