
import Cart from "../databases/Cart.js";
import User from "../databases/Cart.js"
export  const get=async(req,res,next)=>{
    const owner = req.user._id;
    try {
        const cart = await Cart.findOne({ owner });
    if (cart && cart.items.length > 0) {
         res.status(200).send(cart);
    } else {
          res.status(400).json(null);
    }
    } catch (error) {
        res.status(500).send();
    }
}
export  const add =async(req,res,next)=>{
    const owner = req.user._id;
    try {
        const cart = await Cart.findOne({ owner });
    if (cart && cart.items.length > 0) {
         res.status(200).send(cart);
    } else {
          res.status(400).json(null);
    }
    } catch (error) {
        res.status(500).send();
    }
}
