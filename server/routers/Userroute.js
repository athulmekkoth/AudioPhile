import express  from "express";
import {signup,signin} from "../controllers/User.js"
const userrouter=express.Router();
userrouter.post("/signup",signup)
userrouter.post("/signin",signin)

export default userrouter;