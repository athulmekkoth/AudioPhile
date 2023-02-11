import {additem} from "../controllers/Product.js";
import express from "express"
const productrouter=express.Router();
productrouter.post("/add",additem)
export default productrouter;