import {deleteitem,find,findbycat,getall,del,addpic,update} from "../controllers/Product.js";
import { verifyToken } from "../VerifyToken.js";
import {verifyTokenAdmin}  from "../VerifyToken.js";
import  multerUploads  from "../controllers/multer.js";
import express from "express"
const productrouter=express.Router();
//productrouter.post("/add",additem)
productrouter.delete("/del",verifyTokenAdmin,del)
productrouter.get("/find/:id",find)
productrouter.get("/getall/:cat", findbycat)
productrouter.get("/getall/", getall)
productrouter.post("/addpic",verifyTokenAdmin,multerUploads, addpic)
productrouter.post("/update",verifyTokenAdmin,multerUploads, update)
export default productrouter;