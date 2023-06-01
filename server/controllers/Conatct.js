import Message from "../databases/Contactfrom.js";

export const add=async(req,res,next)=>{
    try{
   const {name,email,message}=req.body
   console.log(name,email,message)
    const response=new Message({name,email,message})
    await response.save()
    res.status(200).json({message:"succes"})
    }
    catch(err)
    {
        console.log(err)
    }
}
export const del=async(req,res,next)=>{
    try{
        const {id}=req.body
        const response=await Message.findByIdAndDelete(id)
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
    
        const response=await Message.find()
        res.status(200).json({response})
  
      res.status(500).json({message:"error"})
    }
        
        catch(err)
        {
            console.log(err)
        }
}