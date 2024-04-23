
const buses=require("../models/bus")
exports.postbus = async (req,res)=>{


    try{
    
         const{Rno,Bno,Driver_Name,Driver_No,Bus_route,First_Shift,Second_Shift}=req.body
       //  const{Rno,Bno,Driver_Name,Driver_No}=req.body
    
        const entry= new buses({
            Rno,Bno,Driver_Name,Driver_No,Bus_route,First_Shift,Second_Shift
        })
    
        const savedata= await entry.save();
   
        res.status(200).json({
            success:true,
            message:"data enter successfully"
        })
    
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
    
    }