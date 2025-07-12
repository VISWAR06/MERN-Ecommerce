const express = require('express');
const { upload, addproduct, removeproduct, allproduct } = require('../Controller/addproduct.js');

const router = express.Router();

router.post('/addproduct', upload.single('image'), addproduct);
router.delete('/removeproduct/:id', removeproduct); // Changed to DELETE and using params
router.get('/allproduct', allproduct);

module.exports = router;