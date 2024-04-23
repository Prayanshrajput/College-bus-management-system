const express = require("express");

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


const router=express.Router();

const {sign}=require("../controllers/sign")
const {login,forget, mail, userverifyOtp}=require("../controllers/login")
const {bus}=require("../controllers/bus")
const {postbus}=require("../controllers/postbus")
const {enrollment, multipalenrollment}=require("../controllers/enrollment")
const {verifyOtp}=require("../controllers/sign")
const {cheak}=require("../controllers/cheak");
const { userbus } = require("../controllers/userbus");
const { updatebus } = require("../controllers/updatebus");
const { compalain } = require("../controllers/compalain");
const { getnotificationtoadmin } = require("../controllers/getnotificationtoadmin");
const { usernotification, change } = require("../controllers/notificationtouser");
const {imageupload}=require("../controllers/fileupload")

router.post("/singup",sign)
router.post("/login",login)
router.get("/getdata",bus)
router.post("/postdata",postbus)
router.post("/forget",forget)
router.post("/roll",enrollment)
router.post("/verifyOtp",verifyOtp)
router.post("/userverifyOtp",userverifyOtp)
router.post("/userbus",userbus)
router.post("/updatebus",updatebus)
router.post("/forgetpassword",mail)

router.post("/compalain", upload.single('file'),imageupload,compalain);

router.get("/admingetnotification",getnotificationtoadmin)
router.post("/multipalenrollment",multipalenrollment)
router.get("/usernotification",usernotification)
router.post("/change",change)

module.exports=router