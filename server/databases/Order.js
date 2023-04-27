import mongoose from "mongoose"
const Order=new mongoose.Schema({
    owner : {
        type: mongoose.Types.ObjectId,
         required: true,
         ref: 'User'
       },
    status:
    {
        type:String,
        required:true
    },
    modeofpayment:{
        type:String,
        required:true,
    },
    ordertotal:{
        type:Number,
        required:true
    },
    Shippinginformation:{
        type:Number,
        required:true

    }
    
})