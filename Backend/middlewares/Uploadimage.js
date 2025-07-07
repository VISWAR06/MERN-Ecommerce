const multer=require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        return cb(null,'./uploadimage')
    },
    filename:(req,file,cb)=>{
        const name=path.extname(file.originalname);
        const newname=`${Date.now()}${name}`
        return cb(null,newname)
    }
})

module.exports=multer({
    storage:storage
})