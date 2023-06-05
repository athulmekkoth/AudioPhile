import {add,get,getall,update,deletes} from "../controllers/Order.js"
import {verifyToken, verifyTokenAdmin} from "../VerifyToken.js"
import express from "express"
const Orderouter=express.Router();
Orderouter.post("/add",verifyToken,add)
Orderouter.get("/get",verifyToken,get)
Orderouter.get("/getall",verifyToken,getall)
Orderouter.post("/update",verifyTokenAdmin,update)
Orderouter.delete("/delete",verifyTokenAdmin,deletes)
export default Orderouter