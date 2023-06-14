import mongoose, { mongo } from "mongoose";
const ProductSchema= new mongoose.Schema({
   
    price: {
        type:String,
       
        },

    name:{
        required:true,
        type:String,
     

    },
    photos:{
        
        type:[String]

    },
    description:{
       
        type:String
    },
    category:{
        required:true,
        type:String
    },
    count:{
        required:true,
        type:String,
    },
   



},{timestamps:true})
// Create a compound unique index on the `name` and `category` fields
ProductSchema.index({ name: 1, category: 1 }, { unique: true });
export default mongoose.model("Product", ProductSchema);