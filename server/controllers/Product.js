import Product from "../databases/Product.js";
export const additem= async(req,res,next)=>{
 
    const exist = await Product.findOne({ name: req.body.name, category: req.body.category });
    try{
    if(exist){
      
        res.status(500).json({ message: "item already present" });
    }
    else{
 
    const product = new Product(req.body);
    product.save();
    res.status(200).json({ message: "item saved" });
    }
}
catch(err)
{
    console.log(err)

}
}
export const deleteitem= async(req,res,next)=>{
 
    const result = await Product.findById({ _id: productId });
    try{
    if(result){

        await exist.deleteOne();
      
        res.status(200).json({ message: "item deleted" });
    }
    else{

    res.status(500).json({ message: "item noy prdent " });
    }
}
catch(err)
{
    console.log(err)

}
}
export const find= async(req,res,next)=>{

    const ids=req.params.id

    try{
        const exist = await Product.findById(ids);
    if(!exist){

        
        res.status(400).json({ message: "item noy present " });
        
    }
    else{
        res.status(200).json({exist});

    }
    }

catch(err)
{
    console.log(err)

}
 }
 export const findbycat=async(req,res,next)=>
 {
    
    try{

        console.log(req.params.cat)
       
       
        
        const exist= await Product.find({category: req.params.cat});
        if(exist)
        {
            res.status(200).json(exist)
        }
    } catch(err) {
        console.log(err);
    }
 }

 export const findbysearch=async(req,res,next)=>
 {
    console.log(req.query.page)
    try{
        const regex = new RegExp(req.query.page, "i");
        const exist= await Product.find({name: regex});
        if(exist)
        {
            res.status(200).json(exist)
        }
    } catch(err) {
        console.log(err);
    }
 }
 export const getall = async (req, res, next) => {
 
    try {
        const data= await Product.find();
    
      res.status(201).json({ data }); // return data as JSON response
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Error fetching data' });
    }
  };



 
  export const del = async (req, res, next) => {
 
    try {
        const data= await Product.findById(req.body.id)
        if(data)
        {
           await Product.findByIdAndDelete(req.body.id)


           console.log(`Deleted product with ID: ${req.body.id}`);
            res.status(201).json({message:"deleted successsfully"})
        }
    else{
        res.status(401).json({message:"item is not found"})
    }
   
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Error fetching data' });
    }
  };


