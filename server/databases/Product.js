import mongoose from "mongoose";
const ProductSchema= new mongoose.Schema({
   
    price: {
        type:String,
        required:true,
        },

    name:{
        required:true,
        type:String

    },
    photos:{
        required:true,
        type:Array

    },
    description:{
        required:true,
        type:String
    },
    category:{
        required:true,
        type:String
    },
    



},{timestamps:true})

export default mongoose.model("Product", ProductSchema);