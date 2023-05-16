import {add,get} from "../controllers/Order.js"
import {verifyToken, verifyTokenAdmin} from "../VerifyToken.js"
import express from "express"
const Orderouter=express.Router();
Orderouter.post("/add",verifyToken,add)
Orderouter.get("/get",verifyToken,get)
export default Orderouter