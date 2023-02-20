import express  from "express";
import {signup,signin} from "../controllers/User.js"
const authrouter=express.Router();
authrouter.post("/signup",signup)
authrouter.post("/signin",signin)

export default authrouter;