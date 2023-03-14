
import Cart from "../databases/Cart.js";
import User from "../databases/Cart.js"
import jwt from 'jsonwebtoken';
export const get = async (req, res, next) => {
    try {
      console.log(req.user.id)
      const cart = await Cart.findOne({owner: req.user.id });
  
      if (cart && cart.length>0) {
        res.status(200).send(cart);
      } if(cart && cart.length ===0) {
        res.status(400).json({message:"nothing here"});

      }
      else{
        res.status(404).json({message:"no cart found"})
      }
    } catch (error) {
      res.status(500).json({message:"error found"})
    }
  };
  
export  const add =async(req,res,next)=>{
  try {
    console.log(req.user)
    const cart = await Cart.findOne({owner: req.user.id });

    if (cart) {
      const addit=Cart.updateOne(req.body)
      await addit.save();
      res.status(200).send(cart);

    } else {
      const newcart= await new Cart(req.body)
      await newcart.save();
      res.status(200).json({message:"adeded succesfully"})
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({message:"error found"})
  }
};
