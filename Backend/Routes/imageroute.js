const express=require('express')
const {addproduct}=require('../Controller/addproduct.js')
const { uploadimage } = require('../Controller/images.js')
const upload = require('../middlewares/Uploadimage.js')
const route=express.Router()

route.post("/upload",upload.single("image"),uploadimage)
route.post('/addproduct',upload.single('image'),addproduct)
module.exports=route