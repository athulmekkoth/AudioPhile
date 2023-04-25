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
    tracking:{
        type:String,
        required:true,
    }
    
})