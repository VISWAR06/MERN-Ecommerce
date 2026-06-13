const express=require('express')
const route=express.Router()
const auth=require('../middlewares/Auth')
const {signup,login,info}=require('../Controller/Usercontrller')

route.post('/signup',signup)
route.post('/login',login)
route.get('/info',info)
module.exports=route