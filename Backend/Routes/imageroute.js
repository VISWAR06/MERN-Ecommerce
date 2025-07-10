const express = require('express');
const { addproduct, removeproduct, allproduct } = require('../Controller/addproduct.js');
const upload = require('../middlewares/Uploadimage.js');

const router = express.Router();

// Upload image + add product (image field name = 'image')
router.post('/addproduct', upload.single('image'), addproduct);

router.post('/removeproduct', removeproduct);
router.get('/allproduct', allproduct);

module.exports = router;
