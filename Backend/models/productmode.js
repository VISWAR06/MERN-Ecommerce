import mongoose from "mongoose";
const schema = new mongoose.schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        requried:true
    },
    price:{
        type:Number,required:true
    },
    image:{type:[String],required:true},
    category:{type:String,requrired:true},
    subcategory:{type:String,requried:true},
    bestsellers:{type:Boolean},
    sizes:{type:Number,required:true},
    date:{type:Number,required:true}

})
const productmodel= mongoose.models.schema||mongoose.model('product',schema)
export default productmodel