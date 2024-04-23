const express=require("express")
const app=express();
const cors=require("cors")
var cookieParser = require('cookie-parser')
app.use(express.json());
require("dotenv").config()
const PORT = process.env.PORT || 4000

app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(cookieParser())


const route=require("./routes/back")
app.use(route)

const dbconnect=require("./config/database")
dbconnect();


const cloudinary=require("./config/cloudnary")
cloudinary.CloudinaryConnect();

app.listen(PORT ,(req,res)=>{
    console.log(`Server is listing at port ${PORT}`)
})



app.get("/",(req,res)=>{
   
    res.send("AAPKA SVAGAT HAI MR RAJPUT")
})