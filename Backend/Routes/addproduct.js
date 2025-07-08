const express=require('express')
const route=express.Router()
const addproduct=require('../Routes/imageroute')
const upload=require('../middlewares/Uploadimage')
app.post('/addproduct',upload.single('image'),addproduct)


module.exports=route