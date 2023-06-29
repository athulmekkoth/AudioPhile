import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) res.status(401).json({ message: "you are not authenticated" });
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) res.status(403).json({ message: "not valid token" });
    req.user = user;
    
   next()

  });
};

export const verifyTokenAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      console.log(req.user.isAdmin)
      next();
    } else {
      return res.status(403).json({ message: "you are not allowed to do that" });
    }
  });
};