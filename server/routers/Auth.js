import express  from "express";
import {verifyToken, verifyTokenAdmin} from "../VerifyToken.js"
import {signup,signin,resetpassword,getall,remove,logout} from "../controllers/User.js"
const authrouter=express.Router();
authrouter.post("/signup",signup)
authrouter.post("/signin",signin)
authrouter.post("/resetpass",verifyToken,resetpassword)
authrouter.get("/getuser",verifyTokenAdmin,getall)
authrouter.delete("/del",verifyTokenAdmin,remove)
authrouter.get("/logut",verifyToken,logout)


export default authrouter;