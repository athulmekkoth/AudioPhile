import mongoose, { mongo } from "mongoose";
const Sales = new mongo.Schema({
    totalsaleprice:{
        type:Number,
        default:0,
    },
 
       

    
})
export default mongoose.model("Sales",Sales )
