var express = require('express')
var multer  = require('multer')

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./upload')
    }, 
    filename:function(req,file,cb)
    {
        cb(null,new Date().toISOString()+'-'+file.originalname)
    }
})

//file valid

const filefilter=(req,file,next)=>{
    if(file.mimetype === 'image/jpeg' || 'image/png'){
        cb(null,true)
    }
    else{
        //prevent uplaod
        cb({message:'Unsupported file format'},false)
    }
}
const upload=multer({
    storage:storage,
    limits:{fileSize:1024 *1024},
    fileFilter:fileFilter


})
modules.export=upload 