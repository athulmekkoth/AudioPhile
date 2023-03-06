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


const fileFilter = (req, file, next) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        next(null, true)
    } else {
        // prevent upload
        next({message: 'Unsupported file format'}, false)
    }
}

const upload=multer({
    storage:storage,
    limits:{fileSize:1024 *1024},
    fileFilter:fileFilter


})
module.exports = upload; 