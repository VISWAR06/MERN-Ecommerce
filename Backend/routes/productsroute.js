import express from 'express'
import { addproduct,removeproduct,listproduct,singleproduct } from '../controllers/productcontroller.js'
import upload from '../middlewares/multer.js'
const producterouter = express.Router()
producterouter.post('/add',upload.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:1},{name:"image3",maxCount:1},{name:"image4",maxCount:1},]),addproduct)
producterouter.post('/remove',removeproduct)
producterouter.get('/list',listproduct)
producterouter.post('/single',singleproduct)
export default producterouter