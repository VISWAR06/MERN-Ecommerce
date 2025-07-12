const express=require('express')
const route=express.Router()
const auth=require('../middlewares/Auth')
const {signup,login}=require('../Controller/Usercontrller')

route.post('/signup',auth,signup)
route.post('/login',auth,login)
module.exports=route