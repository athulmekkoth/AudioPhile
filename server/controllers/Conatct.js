import Contactfrom from "../databases/Contactfrom.js";

export const add=async(req,res,next)=>{
    try{
    const {name,email,message}=req.body
    const response=new Contactfrom(name,email,message)
    await response.save()
    res.status(200).json({message:success})
    }
    catch(err)
    {
        console.log(err)
    }
}
export const del=async(req,res,next)=>{
    try{
        const {id}=req.body
        const response=await Contactfrom.findByIdAndDelete(id)
    if(response){
        res.status(200).json({response})
    }
    else{
        res.status(500).json({message:"error"})
    }
        }
        catch(err)
        {
            console.log(err)
        }
}
export const get=async(req,res,next)=>{
    try{
    
        const response=await Contactfrom.find()
        res.status(200).json({response})
  
      res.status(500).json({message:"error"})
    }
        
        catch(err)
        {
            console.log(err)
        }
}