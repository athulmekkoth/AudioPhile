import {get,add} from "../controllers/Cb.js"
import {verifyToken} from "../VerifyToken.js"
import express  from "express";
const Cartrouter = express.Router()
Cartrouter.get("/get",verifyToken,get)
Cartrouter.get("/add",verifyToken,add)
export default Cartrouter;