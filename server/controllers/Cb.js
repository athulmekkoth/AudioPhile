
import Cart from "../databases/Cart.js";
import User from "../databases/Cart.js"
import jwt from 'jsonwebtoken';

export const get = async (req, res, next) => {
  try {
    console.log(req.user.id)
    const cart = await Cart.findOne({ owner: req.user.id }).populate('items');
console.log(cart)
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
    const update = { $push: { items: req.body.itemId ,quantity:req.body.quantity} };
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    const cart = await Cart.findOneAndUpdate(filter, update, options);


/*upsert": if set to true, creates a new document if no document matches the filter.
"new": if set to true, returns the updated document instead of the original document.
"setDefaultsOnInsert": if set to true, sets default values for fields that are not specified in the update object.
*/
    res.status(200).send(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error found" });
  }
};

export const remove = async (req, res, next) => {
  try {
    const filter = { owner: req.user.id };
    const update = { $pop: { items: req.body.itemId } };
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    const cart = await Cart.findOneAndUpdate(filter, update, options);

    res.status(200).send(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error found" });
  }
};