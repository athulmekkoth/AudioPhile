import {additem,deleteitem} from "../controllers/Product.js";
import express from "express"
const productrouter=express.Router();
productrouter.post("/add",additem)
productrouter.delete("/del",deleteitem)
export default productrouter;