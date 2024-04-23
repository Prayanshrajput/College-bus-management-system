const buses=require("../models/bus")
const usernotification=require("../models/usernotification")
exports.updatebus=async(req,res)=>{
  
    try{
        let{Rno,Bno,DRIVER_NAME,DRIVER_PHONE_NO,BUS_ROUTE,SHIFT_I,SHIFT_II}=req.body
       
        console.log(DRIVER_NAME)
      const find= await buses.findOneAndUpdate({Rno:Rno},{Bno,DRIVER_NAME,DRIVER_PHONE_NO,BUS_ROUTE,SHIFT_I,SHIFT_II})
        
     

        if(!find){
         return  res.send({
                success:false,
                message:"bus is not found"
            })
        }
     
      
        let alert=new usernotification({message:"your bus has updated"})
        alert_user=await alert.save()
        res.send({
            success:true,
            find,
            alert_user,
            message:"bus is successfully updated"
        })
    }
    catch(error){
        res.send({
            success:false,
            message:error.message
        })
    }
}
