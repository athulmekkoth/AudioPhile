import {add} from "../controllers/Order.js"
import {verifyToken, verifyTokenAdmin} from "../VerifyToken.js"
import express from "express"
const Orderouter=express.Router();
Orderouter.post("/add",verifyToken,add)
export default Orderouter