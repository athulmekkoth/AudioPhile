import mongoose, { mongo } from "mongoose";
const Cartschema= new mongoose.Schema({
    owner : {
        type: mongoose.Types.ObjectId,
         required: true,
         ref: 'User'
       },
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
    }

})
export default mongoose.model("Cart",Cartschema)