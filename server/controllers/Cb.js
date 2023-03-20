
import Cart from "../databases/Cart.js";
import User from "../databases/Cart.js"
import Product from "../databases/Product.js"
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";

export const get = async (req, res, next) => {
  try {
  
    const cart = await Cart.findOne({ owner: req.user.id }).populate('items');

    if (cart) {
      res.status(200).send(cart);
    } else {
      res.status(400).json({message:"nothing here"});

    }
    
  } catch (error) {
    res.status(500).json({message:"error found"})
  }
};

export const add = async (req, res, next) => {
  try {
    const filter = { owner: req.user.id };

    const data= await Product.findById({_id:req.body.itemId})
    const cart = await Cart.findOne({ owner: req.user.id }).populate('items');
 
  const {price}=data
 const  itemprices=req.body.quantity*price


    const update = { $push: { items:{ name:data.name,product:req.body.itemId ,quantity:req.body.quantity,itemprice:itemprices}} ,
  $set:{total:cart.total+itemprices }
};
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    const find = await Cart.findOne({"items.product":req.body.itemId})
   
    if(find)
    {
      return res.status(300).json({messgae:"items already there"})
      console.log("nothinf added")
    }
    else

{    const cart = await Cart.findOneAndUpdate(filter, update, options);


/*upsert": if set to true, creates a new document if no document matches the filter.
"new": if set to true, returns the updated document instead of the original document.
"setDefaultsOnInsert": if set to true, sets default values for fields that are not specified in the update object.
*/
    res.status(200).send(cart);
}
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error found" });
  }
};

export const remove = async (req, res, next) => {
  
 
  try {
  
    const filter = { owner: req.user.id };
    const update = { $pull:{items:{ _id:req.body.id} }};
    const option={new:true}
    const cart = await Cart.findOneAndUpdate(filter, update,option);

    res.status(200).send(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error found" });
  }
};
export const update = async (req, res, next) => {
  
 
  try {
    //positional aprmaeter specific
  
    const itemId = req.body.itemId;
    const filter = { owner: req.user.id, "items._id": req.body.id};
    
    const update = { $set: { "items.$.quantity": req.body.quantity } };
    const options = { new: true };
    const cart = await Cart.findOneAndUpdate(filter, update, options);
    
    

    res.status(200).send(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error found" });
  }
};