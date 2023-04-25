import {get,add,remove,update} from "../controllers/Cb.js"
import {verifyToken, verifyTokenAdmin} from "../VerifyToken.js"
import express  from "express";
const Cartrouter = express.Router()
Cartrouter.get("/get",verifyToken,get)
Cartrouter.post("/add",verifyToken,add)
Cartrouter.delete("/rem",verifyToken,remove)
Cartrouter.post("/update",verifyToken,update)
export default Cartrouter;