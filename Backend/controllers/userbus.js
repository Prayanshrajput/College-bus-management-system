const buses= require("../models/bus")

exports.userbus = async (req,res)=>{

try{
    let{Rno,Bno,DRIVER_NAME,DRIVER_PHONE_NO,BUS_ROUTE,SHIFT_I,SHIFT_II}=req.body
       
const findbus=await buses.find({Rno})

if(!findbus){
    return res.send({
        findbus,
        success:false,
        message:"bus is already present "
    })
}

const newbus=new buses({
    Rno,Bno,DRIVER_NAME,DRIVER_PHONE_NO,BUS_ROUTE,SHIFT_I,SHIFT_II
})

const savebus=await newbus.save()




//  res.json(data)
res.status(200).json({
    result:newbus,
    success:true,
    message:"you taken data"
})
 
}
catch(error){
res.status(500).json({
    success:false,
    message:error.message
})
}

}



