import mongoose from "mongoose"
const Order=new mongoose.Schema({
    owner : {
        type: mongoose.Types.ObjectId,
         required: true,
         ref: 'User'
       },
       oderId:{
        type:String,
        required:true
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
        type:Object,
        required:true

    }
    
})