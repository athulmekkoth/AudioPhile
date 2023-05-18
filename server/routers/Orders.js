import {add,get,getall} from "../controllers/Order.js"
import {verifyToken, verifyTokenAdmin} from "../VerifyToken.js"
import express from "express"
const Orderouter=express.Router();
Orderouter.post("/add",verifyToken,add)
Orderouter.get("/get",verifyToken,get)
Orderouter.get("/getall",verifyToken,getall)
export default Orderouter