import express from 'express'
import {login,register,admin} from '../controllers/usercontroll.js'
const route = express.Router()
route.post('/login',login)
route.post('/register',register)
route.post('/admin',admin)

export default route