const cloudinary=require("cloudinary").v2

require("dotenv").config();

exports.CloudinaryConnect=()=>{

    try{
cloudinary.config({
    cloud_name:process.env.CLOUDE_NAME,
    api_key:process.env.APIKEY,
    api_secret:process.env.API_SECRET
})
    }
    catch(error){
console.log(error)
    }
}

