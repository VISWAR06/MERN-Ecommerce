import mongoose from "mongoose";

const productschema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"enter name"]
    },
    description:{type:String,required:[true,"entere desc"]},
    price:{type:Number,required:[true,"enter price"],MaxLength:[7,"not then 7"]},
    rating:{type:Number,default:0},
    image:[
        {
            public_id:{
                type:String,
                required:true
            },url:{type:String,required:true}

        }
    ],
    category:{type:String,required:true},
    subcategory:{type:String,required:true},
    reviews:[
        {
            name:{type:String,required:true},
            rating:{type:String,required:true},
            comment:{type:String,required:true}
        }
    ],stock:{type:Number,MaxLength:[10,"not exceeed 10"],default:1}

})
export default mongoose.model("products",productschema)