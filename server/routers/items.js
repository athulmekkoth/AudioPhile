import {additem,deleteitem,find,findbycat,getall,del,addpic} from "../controllers/Product.js";
import { verifyToken } from "../VerifyToken.js";
import {verifyTokenAdmin}  from "../VerifyToken.js";
import  multerUploads  from "./controllers/multer.js";
import express from "express"
const productrouter=express.Router();
productrouter.post("/add",verifyTokenAdmin,multerUploads,additem)
productrouter.delete("/del",verifyToken,del)
productrouter.get("/find/:id",verifyToken,find)
productrouter.get("/getall/:cat",verifyToken, findbycat)
productrouter.get("/getall/",verifyToken, getall)
productrouter.post("/addpic",verifyToken, addpic)
export default productrouter;