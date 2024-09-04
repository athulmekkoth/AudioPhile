import User from "../databases/User.js" 
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";


export const signup = async (req, res, next) => {
  const { name,email, password } = req.body;


  try {
    const existinguser = await User.findOne({ email: email });
    if (existinguser) {
      res.status(409).json({ message: "user already registered, please log in" });
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
export const resetpassword = async (req, res) => {
  
  const { email, password, newpassword, confirmpassword } = req.body;
  try{
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(500).json("Please create an account first.");
    }

    const matchpass = await bcrypt.compare(password, user.password)
    if (!matchpass) {
      return res.status(500).json("Incorrect password.");
    } else {
     ;
      if (newpassword !== confirmpassword) {
        return res.status(400).json({ message: "Passwords do not match." });
      }
      else if (await bcrypt.compare(newpassword, user.password)) {
        return res.status(501).json({message:"Old password and new should not be the same."});
      }
      else {
        const filter = { email };
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(newpassword, salt);
        const update = { password: hash };
        const doc = await User.findOneAndUpdate(filter, update, {
          new: true
        });
        return res.status(200).json({ message: "Password updated." });
      console.log("updated")
      }
    }
  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred." });
  }
}


export const signin = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user)
    
      return res.status(500).json("please create an account first");

    const matchpass = await bcrypt.compare(req.body.password, user.password);
    if (!matchpass)
      return res.status(500).json("check password");

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isadmin
      },
      process.env.JWT
    );

    const { password, ...others } = user._doc;

    res.cookie("access_token", token, {
      httpOnly: true
    });

    res.status(200).json(others);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error occurred." });
  }
};

////admin roles to be added

export const getall=async(req,res,next)=>{
  try{
    const response=await User.find();
    res.status(200).json({response})
  }
  catch(err)
  {
    console.log(err)
  }
}

export const remove=async(req,res,next)=>{

  try{
    console.log("called")
    console.log(req.body.id)
    const user= await User.findByIdAndRemove(req.body.id)
   
    if(user)
    {
      res.status(200).json({message:"succces"})
    }
    else{
      res.status(200).json({message:"user dont exist"})
    }
  
  }
  catch(err)
  {
    console.log(err)
  }
}
export const logout= (req, res) => {
  try{
    res.clearCookie('access_token')
    res.status(200).json({ message: 'Logged out successfully' });
  }catch(err)
  {
    res.status(200).json({err})
  }
  }
  