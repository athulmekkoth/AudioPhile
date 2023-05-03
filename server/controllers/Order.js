import Order from "../databases/Order";
export const add=async(req,res,next)=>{
    try{
    const {ordertotal,Shipping}=req.body;
    const owner=req.user.id
    const status=false;
    const save=new Order(owner,ordertotal,Shipping,status)
    await save.save()
    }
    catch(err)
    {
        console.log(err)
    }
}