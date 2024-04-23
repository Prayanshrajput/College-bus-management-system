const Enrollment=require("../models/enrollment")
const { rawListeners } = require("../models/signup")

exports.enrollment=async (req,res)=>{
    try{
const {rollnumber}=req.body

const finduser=await Enrollment.findOne({rollnumber})

if(finduser){
   return res.json({
        succes:false,
        message:"this number is already store in db"
    })
}
const newrollnumber= new Enrollment({rollnumber})
          const data= await newrollnumber.save()

          res.json({
            success:true,
            message:"successfully added"
          })
    }
    catch(error){
res.json({
    succes:false,
    message:error.message
})
    }
}

// iski help se ek sath yada roll number enter kar sakte hai db me time saving ke liye bayana hai isse
exports.multipalenrollment=async (req,res)=>{
    try{
let {start,end}=req.body
start=parseInt(start)
end=parseInt(end)

while(start<=end){
    let roll="0832CS"+String(start)
   
    const finduser=await Enrollment.findOne({roll})
   
    if(finduser){
      start++;
    }
else{
    const newrollnumber= new Enrollment({rollnumber:roll})
    const data= await newrollnumber.save()
start++;
}
}
     res.json({
            success:true,
            message:"successfully added"
          })
    }
    catch(error){
res.json({
    succes:false,
    message:error.message
})
    }
}