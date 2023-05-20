import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});


export default mongoose.model("Message", MessageSchema);
