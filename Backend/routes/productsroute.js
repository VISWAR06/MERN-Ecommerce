import express  from 'express'
import { addprdt,removeprdt,listprdt,singleprdt } from '../controllers/productcontroller.js'
const productroute = express.Router()

productroute.post('/add',addprdt)
productroute.post('/remove',removeprdt)
productroute.get('/list',listprdt)
productroute.post('/single',singleprdt)

export default productroute
