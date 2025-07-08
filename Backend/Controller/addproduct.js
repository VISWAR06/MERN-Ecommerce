const Product = require('../models/addprdtmodel');

const addproduct = async (req, res) => {
    try {
        const { id, name, category, new_price } = req.body;
        const image = req.file ? req.file.filename : null;

        if (!image) {
            return res.status(400).json({ message: "Image file is required." });
        }

        const addprdt = new Product({
            id,
            name,
            image, 
            category,
            new_price
        });

        await addprdt.save();
        res.status(200).json({ message: "Product added successfully" });
    } catch (e) {
        console.error(e.message);
        res.status(400).json({ message: e.message });
    }
};

module.exports = { addproduct };
