const mongoose = require('mongoose')
const userSchema=mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },email:{
            type:String,
            required:true,
            unique:true
        },password:{
            type:String,
            required:true
        },isadmin:{
              type:Boolean,
              required:true,
              default:false
        }
    },{timestamps:true}
)
const user = moongose.model('user',userSchema)
module.exports=user