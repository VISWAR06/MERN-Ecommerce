const mongoose = require('mongoose');

const prdtschema = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  new_price: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Product", prdtschema);