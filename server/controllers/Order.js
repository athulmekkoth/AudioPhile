import Order from "../databases/Order.js";
import Cart from "../databases/Cart.js";
import Sales from '../databases/Sales.js'

export const add = async (req, res, next) => {
  try {
    const {  Shipping,mode} = req.body;
    console.log(Shipping)
   
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
    const ordertotal = cart.total;

   
    const sales=await Sales.findOne()
    if(sales)
    {
      try{
   
    
      const filter = { _id: sales._id}
      const update = { $inc: { totalsaleprice:ordertotal } };
      const options = { new: true }
      const response = await Sales.findOneAndUpdate(filter, update, options);

     const order = new Order({ owner, product: products,  Shipping, ordertotal,mode });
      await order.save();
    console.log(response)
      res.status(200).json({ response,order});
    }
    catch(err)
    {
      console.log(err)
    }
  }
    else{
      try{
        console.log("not")
      const sales=new Sales({totalsaleprice:ordertotal})
      sales.save()
      const order = new Order({ owner, product: products,  Shipping, ordertotal,mode });
      await order.save();
      }
      catch(err)
      {
        console.log(err)
      }
    }
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


export const update = async (req, res, next) => {
  const { status, id } = req.body;
  
  try {
    const filter = await Order.updateOne(
      { _id: id },
      { $set: { status: status } }
    );
    console.log(filter)
    if (filter.modifiedCount === 1) {
      res.status(200).json({ message: 'Document updated successfully' });
    } else {
      res.status(404).json({ message: 'Document not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating document', error });
  }
};
export const deletes = async (req, res, next) => {
  const {  _id } = req.body;
  console.log(_id)
  try {
    const filter = await Order.findByIdAndDelete(_id);
    console.log(filter)
    if (filter) {
      res.status(200).json({ message: 'Document deleted successfully' });
    } else {
      res.status(404).json({ message: 'Document not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting document', error });
  }
};

    /* const order = new Order({ owner, product: products, ordertotal, Shipping, total,mode });
      await order.save();*/