import mongoose, { Schema } from "mongoose"
const Order=new mongoose.Schema({
    owner : {
        type: mongoose.Types.ObjectId,
         required: true,
         ref: 'User'
       },
       product:{
        type:Array,
       },
    date:{
        type:Date,
        default:Date.now
    },
    status:
    {
        type:String,
        default:"false"
    },
    ordertotal:{
        type:Number,
        required:true
    },
    Shipping:{
        type:mongoose.Schema.Types.Mixed,
        required:true

    },
    mode:{
        type:String,
        

    }
    
},{timestamps:true})
export default mongoose.model("Order",Order)