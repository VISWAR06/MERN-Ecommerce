const express=require('express')
const {addproduct, removeproduct, allproduct}=require('../Controller/addproduct.js')
const { uploadimage } = require('../Controller/images.js')
const upload = require('../middlewares/Uploadimage.js')
const route=express.Router()

route.post("/upload",upload.single("image"),uploadimage)
route.post('/addproduct',upload.single('image'),addproduct)
route.post('/removeproduct',removeproduct)
route.get('/allproduct',allproduct)
module.exports=route