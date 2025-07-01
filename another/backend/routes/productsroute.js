import express from 'express'
const route=express.Router()
import {allpro} from '../controllers/productscontro.js'

route.get('/products',allpro)
export default route