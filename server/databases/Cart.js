import mongoose, { mongo } from "mongoose";
const Cartschema= new mongoose.Schema({
    owner : {
        type: mongoose.Types.ObjectId,
         required: true,
         ref: 'User'
       },
       items: [{
        product: {
          type: mongoose.Types.ObjectId,
          required:true,
          ref:'Product'
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
          default: 1
        }
      }],
    name:{
        type:String,
        required:true
    },
  
    total:{
        required:true,
        type:Number,
        default:0
    }

})
export default mongoose.model("Cart",Cartschema)