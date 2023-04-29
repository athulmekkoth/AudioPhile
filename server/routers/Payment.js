import express from "express"
import { checkout ,paymentverification,getkey} from "../controllers/Payment.js";
const Paymentrouter=express.Router();
Paymentrouter.post("/checkout",checkout)
Paymentrouter.get("/getkey",getkey)
Paymentrouter.post("/paymentverification",paymentverification)
export default Paymentrouter;