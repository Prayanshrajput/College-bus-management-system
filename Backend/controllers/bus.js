const buses= require("../models/bus")

exports.bus = async (req,res)=>{

try{

const data=await buses.find({})


//  res.json(data)
res.status(200).json({
    result:data,
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



