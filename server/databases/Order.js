import mongoose from "mongoose"
const Order=new mongoose.Schema({
    owner : {
        type: mongoose.Types.ObjectId,
         required: true,
         ref: 'User'
       },
       oderId:{
        type:String,
     
       },
    status:
    {
        type:String,
        required:true
    },
    ordertotal:{
        type:Number,
        required:true
    },
    Shipping:{
        type:mongoose.Schema.Types.Mixed,
        required:true

    }
    
},{timestamps:true})
export default mongoose.model("Order",Order)