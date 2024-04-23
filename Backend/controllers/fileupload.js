const cloudinary=require("cloudinary")
const { request } = require("express")

function fileTypeSupported(supportedTypes,fileType){
   
    return supportedTypes.includes(fileType)
    }

    async function uploadToCloudinary(file,folders){

        const options={folders}
    return await cloudinary.uploader.upload(
        file.path,options
    )
    }

exports.imageupload= async (req,res,next)=>{
    try{
        const{input,rollnumber}=req.body

const file=req.file
if(!file){
   return next()
}

console.log("file is ->",file)

const supportedTypes=["jpg","jpeg","png","mp4"]

const fileType=`${file.originalname.split(".")[1].toLowerCase()}`



if(!fileTypeSupported(supportedTypes,fileType)){
    res.json({
        success:false,
        message:"file type is not supported"
    })
}

//upload to cloudinary 

const response= await uploadToCloudinary(file,"mydata")
       console.log(response)


//        // save entrt to db

// // const filedata= await File.create({
// //     name,tags,email,image_url:response.secure_url
// // })

// res.json({
//     success:true,
//     message:"image successfully uploaded"
// })
const url=response.secure_url
req.body={input,rollnumber,url}
next();
    }
    catch(error){
        res.status(550).json({
            success:false,
            message:error.message
        })
    }
}