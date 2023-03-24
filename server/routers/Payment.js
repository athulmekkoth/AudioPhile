import express from "express"
const Paymentrouter=express.Router();
import createCheckoutSession from "./paymentController.js"
Paymentrouter.post('/create-checkout-session', createCheckoutSession);

export default Paymentrouter