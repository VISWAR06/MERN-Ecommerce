const multer = require('multer');
const path = require('path');
const Product = require('../models/addprdtmodel');

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploadimage'));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}${ext}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

const addproduct = async (req, res) => {
  try {
    const { name, category, new_price } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!image) {
      return res.status(400).json({ message: 'Image file is required.' });
    }

    const newProduct = new Product({
      name,
      category,
      new_price,
      image,
    });

    await newProduct.save();
    res.status(200).json({ message: 'Product added successfully', product: newProduct });
  } catch (e) {
    console.error('Error adding product:', e);
    res.status(500).json({ message: 'Server error' });
  }
};

const removeproduct = async (req, res) => {
  try {
    const { id } = req.params; // Changed from req.body to req.params
    const result = await Product.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Removed successfully' });
  } catch (e) {
    console.error('Error removing product:', e);
    res.status(500).json({ message: 'Server error' });
  }
};

const allproduct = async (req, res) => {
  try {
    const allproducts = await Product.find({});
    res.status(200).json(allproducts);
  } catch (e) {
    console.error('Error fetching products:', e);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { upload, addproduct, removeproduct, allproduct };