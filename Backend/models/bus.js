const mongoose=require("mongoose")

const bus= new mongoose.Schema({
    Rno:{
        type:String,
        require:true
    },
    Bno:{
        type:String,
        require:true
    },
    DRIVER_NAME:{
        type:String,
        require:true
    },
    DRIVER_PHONE_NO:{
        type:String,
        require:true
    },
    BUS_ROUTE:[
        {type:String,
          }
    ],
    SHIFT_I:[
        {type:String,
           }
    ],
    SHIFT_II:[
        {type:String,
        }
    ]
})

module.exports=mongoose.model("buses",bus)