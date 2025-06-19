import mongoose from "mongoose";
const schemaa = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,required:true
    },
    image:{type:[String],required:true},
    category:{type:String,required:true},
    subcategory:{type:String,required:true},
    bestsellers:{type:Boolean},
    sizes:{type:Array,required:true},
    date:{type:Number,required:true}

})
const productmodel= mongoose.models.product||mongoose.model('product',schemaa)
export default productmodel