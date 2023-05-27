import mongoose, { mongo } from "mongoose";
const Salesschema = new mongoose.Schema({
    totalsaleprice:{
        type:Number,
        default:0,
    },
 
       

    
})
export default mongoose.model("Sales",Salesschema )
