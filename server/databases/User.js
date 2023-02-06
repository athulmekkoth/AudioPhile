import mongoose from "mongoose";

const Userschema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true,
        lowecase:true,

    },
    address:{
        type:String,
        
    },
    fromGoogle:{
        type:Boolean,
        default:false

    },
    password:
    {
        type:String
    }
},{timestamps:true})
export default mongoose.model("User",Userschema)