import { createError } from "./err";
import  jwt  from "jsonwebtoken";
export const verifyToken=(req,res,next)=>
{
    const token=req.cookies.acess_token
    if(!token) return createError(401,"you are not athticate");
    jwt.verify(token,process.env.JWT,(err,user=>{
        if(err)
            return next(createError(403,"not valid tokens"))
        req.user=user;
        next();
    }))
} 