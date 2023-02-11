import Product from "../databases/Product.js";
export const additem= async(req,res,next)=>{
    const{name} = req.body;
    const exist = await Product.findById({name:name});
    try{
    if(name){
      
        res.status(404).json({ message: "item already present" });
    }
 
    const product = new Product(req.body);
    product.save();
}
catch(err)
{
    console.log(err)

}
}
