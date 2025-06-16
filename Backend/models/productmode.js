import mongoose from "mongoose";
const schema = new mongoose.schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        requried:true
    },
    price:{
        type:Number,required:true
    },
    image:{type:Arrya,required:true},
    category:{type:String,requrired:true},
    subcategory:{type:String,requried:true},
    bestseller:{type:Boolean},
    sizes:{type:Number,required:true},
    date:{type:Number,required:true}

})
const productmodel= mongoose.model.schema||mongoose.model('product',schema)