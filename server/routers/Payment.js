import express from "express"
import { checkout ,paymentverification,getkey,add} from "../controllers/Payment.js";
import { verifyToken } from "../VerifyToken.js";
const Paymentrouter=express.Router();
Paymentrouter.post("/checkout",checkout)
Paymentrouter.get("/getkey",getkey)
Paymentrouter.post("/add",verifyToken,add)
Paymentrouter.post("/paymentverification",paymentverification)
export default Paymentrouter;