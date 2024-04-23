const compalain=require("../models/compalainModel")



exports.compalain=async(req,res)=>{
    try{
const{input,rollnumber,email}=req.body
const url=req.body.url

let newcompalain
if(url)
{ 
    newcompalain= new compalain({input,rollnumber,url,email})}
else{
     newcompalain= new compalain({input,rollnumber,email})
}
console.log(newcompalain)

         const data= await newcompalain.save()
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

    