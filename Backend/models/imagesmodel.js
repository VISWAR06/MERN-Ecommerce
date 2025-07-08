const mongoose= require('mongoose')
const prdtschema=mongoose.Schema({
    id:{
        type:Number,required:true
    },name:{type:String,required:true},category:{type:String,required:true},
    image:{type:String,required:true},new_price:{type:Number,required:true}
})
const prdtmodel=mongoose.model("Product",(prdtschema))

module.exports=prdtmodel