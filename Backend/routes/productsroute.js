import express  from 'express'
import { addprdt,removeprdt,listprdt,singleprdt } from '../controllers/productcontroller.js'
import upload from '../middlewares/multer.js'
const productroute = express.Router()

productroute.post('/add',upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1},]),addprdt)
productroute.post('/remove',removeprdt)
productroute.get('/list',listprdt)
productroute.post('/single',singleprdt)

export default productroute
