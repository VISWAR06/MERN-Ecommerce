import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter name"]
  },
  description: {
    type: String,
    required: [true, "Enter description"]
  },
  price: {
    type: Number,
    required: [true, "Enter price"],
    maxLength: [7, "Price should not exceed 7 digits"]
  },
  rating: {
    type: Number,
    default: 0
  },
  image: [
    {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  ],
  category: {
    type: String,
  
  },
  subcategory: {
    type: String,
  
  },
  reviews: [
    {
      name: { type: String },
      rating: { type: Number }, 
      comment: { type: String }
    }
  ],
  stock: {
    type: Number,
    maxLength: [10, "Stock cannot exceed 10 digits"],
    default: 1
  }
});

export default mongoose.model("Product", productSchema);
