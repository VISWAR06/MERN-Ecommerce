import express from 'express'
import {login,register,admin} from '../controllers/usercontroll'

const route=express.Router()

route.post('/api/login',login)
route.post('/api/register',register)
route.post('/api/admin',admin)

export default route