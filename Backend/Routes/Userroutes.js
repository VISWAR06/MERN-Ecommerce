const express=require('express')
const route=express.Router()
const {signup}=require('../Controller/Usercontrller')

route.post('/signup',signup)
module.exports=route