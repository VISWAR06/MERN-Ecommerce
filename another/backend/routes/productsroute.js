import express from 'express'
const route=express.Router()
import {allpro,createproduct} from '../controllers/productscontro.js'

route.get('/prdts',allpro)

route.post('/prdts',createproduct)





export default route