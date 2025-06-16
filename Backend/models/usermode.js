import mongoose from "mongoose";
const user=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartdata:{type:Object,default:{}}
},{minimize:false})
const usermodels=mongoose.models.user||mongoose.model('user',user)
export default usermodels