import mongoose, { mongo } from "mongoose";

const paymentSchema = new mongoose.Schema({
    owner:{
        type: mongoose.Types.ObjectId,
       

    },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_signature: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Payment", paymentSchema);