const Product = require('../models/addprdtmodel');

const addproduct = async (req, res) => {
  try {
    const { id, name, category, new_price } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!image) {
      return res.status(400).json({ message: 'Image file is required.' });
    }

    const newProduct = new Product({
      id,
      name,
      category,
      new_price,
      image,
    });

    await newProduct.save();
    res.status(200).json({ message: 'Product added successfully' });
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ message: e.message });
  }
};

const removeproduct = async (req, res) => {
  const { id } = req.body;
  try {
    const result = await Product.findOneAndDelete({ id });
    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Removed successfully' });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const allproduct = async (req, res) => {
  try {
    const allproducts = await Product.find({});
    res.status(200).json(allproducts);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

module.exports = { addproduct, removeproduct, allproduct };
