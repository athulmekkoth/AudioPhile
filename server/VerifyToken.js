import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.acess_token;
  if (!token) res.status(401).json({ message: "you are not authenticated" });
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) res.status(403).json({ message: "not valid token" });
    req.user = user;
    
    next();
  });
};
export const verifyTokenAdmin =(req,res,next)=>{
  verifyToken(req,res,()=>{
    if(req.user.isAdmin)
    {
      next();
    }
    else{
      res.status(403).json("you are not allowed to do that")
    }
  })
}