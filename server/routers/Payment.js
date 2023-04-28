import express from "express"
import { checkout } from "../controllers/Payment.js";
const Paymentrouter=express.Router();
Paymentrouter.post("/checkout",checkout)
export default Paymentrouter;