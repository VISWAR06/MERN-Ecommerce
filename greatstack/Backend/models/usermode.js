import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cartdata: { type: Object, default: {} }
}, { minimize: false, timestamps: true });

const Usermodel = mongoose.models.User || mongoose.model('User', userSchema);
export default Usermodel;
