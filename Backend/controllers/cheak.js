

exports.cheak= async (req,res)=>{
    try{
const cook=req.cookies
if(cook){
   return res.send({
                success:true,
                token,
                find,
                message:"user logged in successfully"
            })
}

return res.send({
    success:false,
    message:"user is not login"
})
    }
    catch(error){
res.json({
    success:false,
    message:error.message
})
    }
}