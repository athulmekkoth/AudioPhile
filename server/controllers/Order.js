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