const express=require('express')
const { uploadimage } = require('../Controller/images.js')
const upload = require('../middlewares/Uploadimage.js')
const route=express.Router()

route.post("/upload",upload.single("image"),uploadimage)

module.exports=route