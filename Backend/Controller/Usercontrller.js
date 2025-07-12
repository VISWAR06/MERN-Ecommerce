const users=require('../models/Usermodel')
const jwt=require('jsonwebtoken')
const signup = async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const check=await users.findOne({email})
        if(check){
            res.status(400).json({message:"user alredy there"})
        }
        if(password.length<6)res.status(500).json({message:"enter strong password"})
     
       const user = await users.create({name,email,password})
       const token=jwt.sign({
        id:user._id,email:user.email
       },process.env.SECRET_KEY,process.env.EXP)
        res.status(200).json({message:"user created",token})

    }catch(e){
        res.status(500).json({message:e.message})
    }
}
module.exports={signup}