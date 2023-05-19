import express from "express";
import {add,del,get} from "../controllers/Conatct.js"
import {verifyTokenAdmin}  from "../VerifyToken.js";
const Messagerouter=express.Router();
Messagerouter.delete("/del",verifyTokenAdmin,del)
Messagerouter.get("/get",verifyTokenAdmin,get)
Messagerouter.post("/add",add)

export default Messagerouter;