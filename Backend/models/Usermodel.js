const mongoose=require('mongoose')
const usermodel=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true,lowercase:true},
    password:{type:String,required:true,minlength:6}
})
const users = mongoose.model("users",usermodel)
module.exports=users