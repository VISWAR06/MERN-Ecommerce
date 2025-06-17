import express from 'express'
import {login,register} from '../controllers/usercontroll.js'
const route = express.Router()
route.post('/login',login)
route.post('/register',register)
// route.post('/login]',usercontroller)
export default route