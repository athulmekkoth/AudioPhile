import Order from "../databases/Order.js";
import Cart from "../databases/Cart.js";


export const add = async (req, res, next) => {
  try {
    const { ordertotal, Shipping } = req.body;
    const owner = req.user.id;

    // Fetch cart items for the owner
    const cart = await Cart.findOne({ owner });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Extract the products from the cart
    const products = cart.items.map((item) => ({
      name: item.name,
      product: item.product,
      quantity: item.quantity,
      itemprice: item.itemprice,
      price: item.price,
    }));

    // Calculate the total from the cart
    const total = cart.total;

    const status = false;
    const order = new Order({ owner, product: products, ordertotal, Shipping, total, status });
    await order.save();

    res.status(200).json({ order });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const get=async(req,res,next)=>{
    try{
      

        const response= await Order.find({owner:req.user.id})
        console.log(response)
        if(response)
        {
            res.status(200).json({response})
        }
        else{
            res.status(404).json({message:'empyt'})
        }
    }
    catch(err)
    {
        console.log(err)
    }
}
export const getall=async(req,res,next)=>{
    try{
      

        const response= await Order.find()
        console.log(response)
        if(response)
        {
            res.status(200).json({response})
        }
        else{
            res.status(404).json({message:'empyt'})
        }
    }
    catch(err)
    {
        console.log(err)
    }
}