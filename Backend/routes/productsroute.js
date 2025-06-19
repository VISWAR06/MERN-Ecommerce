import express from 'express'
import { addproduct,removeproduct,listproduct,singleproduct } from '../controllers/productcontroller.js'
import adminauth from '../middlewares/adminauth.js'
import upload from '../middlewares/multer.js'
const producterouter = express.Router()
producterouter.post('/add',adminauth,upload.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:1},{name:"image3",maxCount:1},{name:"image4",maxCount:1},]),addproduct)
producterouter.post('/remove',adminauth,removeproduct)
producterouter.get('/list',adminauth,listproduct)
producterouter.post('/single',adminauth,singleproduct)
export default producterouter