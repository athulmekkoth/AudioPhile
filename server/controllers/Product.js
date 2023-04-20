import Product from "../databases/Product.js";
import cloudinary from "cloudinary"
import  multerUploads  from "../controllers/multer.js";
import dotenv from "dotenv"
import getDataUri from "../utils/dataUri.js";
dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });
  
  
  export const addpic = async (req, res, next) => {
    try {
      const files = req.files;
      const dataUris = [];
  
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const dataUri = getDataUri(file);
        dataUris.push(dataUri);
      }
  
      const results = await Promise.all(
        dataUris.map((dataUri) => cloudinary.v2.uploader.upload(dataUri.content))
      );
  
      res.json({ results });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  
export const additem = async (req, res, next) => {
  const { name, category, count, price, description } = req.body;

  // Validate the input data
  if (typeof name !== "string" || typeof category !== "string") {
    return res.status(400).json({ message: "name and category must be strings" });
  }
  
  if (typeof count !== "number" || typeof price !== "number") {
    return res.status(410).json({ message: "count and price must be numbers" });
  }

  // Check if the product already exists
  const exist = await Product.findOne({ name, category });
  if (exist) {
    return res.status(500).json({ message: "item already present" });
  }

  // Create and save the new product
  const product = new Product({ name, category, count, price, description });
  product.save((err) => {
    if (err) {
      return res.status(500).json({ message: "error saving item" });
    }
    return res.status(200).json({ message: "item saved" });
  });
};

export const deleteitem= async(req,res,next)=>{
 
    const result = await Product.findById({ _id: productId });
    try{
    if(result){  

        await exist.deleteOne();
      
       return res.status(200).json({ message: "item deleted" });
    }
    else{

   return res.status(500).json({ message: "item noy prdent " });
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


