import mongoose, { mongo } from "mongoose";
const Cart= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
    }

})
export default mongoose.model("Cart",Cart)