import Order from "../databases/Order.js";
export const add=async(req,res,next)=>{
    try{
    const {ordertotal,Shipping}=req.body;
    const owner={_id:req.user.id}
   
    const status=false;
    const order = new Order({ owner, ordertotal, Shipping, status }); // create a new document instance
    await order.save()
    res.status(200).json({order})
    }
    catch(err)
    {
        console.log(err)
    }
}