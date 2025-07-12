const users=require('../models/Usermodel')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
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
const login = async(req,res)=>{
    try{
        const {email,password}=req.body;
        const check=await Users.findOne({email})
        if(!check)res.status(401).json({message:"not founded"})
        const match=await bcrypt.compare(password,check.password)

    }catch(e){

    }
}
module.exports={signup,login,info}