import User from "../databases/User.js" 
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


export const signup = async (req, res, next) => {
  const { email, password } = req.body;


  try {
    const existinguser = await User.findOne({ email: email });
    if (existinguser) {
      res.status(404).json({ message: "user already registered, please log in" });
    } else {
        var salt=bcrypt.genSaltSync(10)
        var hash=bcrypt.hashSync(req.body.password,salt)
        const newuser = new User({...req.body,password:hash})
        newuser.save();
        res.status(200).send("user has created")
    
    }

  } catch (err) {
    console.error(err); 
    res.status(500).json({ message: "something went wrong" });
  }
};

export const signin=async (req,res,next)=>{
    const { email} = req.body;
    try{
    const user=await User.findOne({email:email});
    if(!user)
res.status(500).json("please create an acoount first");

const matchpass = await bcrypt.compare(req.body.password,user.password)
if(!matchpass)
res.status(500).json("check password")

//jwt sert kry

const token= jwt.sign({id:user._id},process.env.JWT) 
const {password,...others}=user._doc

res.cookie("acess_token",token,{
 httpOnly:true  //o 3rdpart
 
 }).status(200).json(others);

    } 
catch(err)
{
    console.log(err);
}
    
    
}
