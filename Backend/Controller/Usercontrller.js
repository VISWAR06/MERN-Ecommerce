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
     
      const hashed=await bcrypt.hash(password,10)
      const add=await users({
        name,email,password:hashed
      })
      await add.save()
       const token=jwt.sign({
        id:add._id,email:add.email
       },process.env.SECRET_KEY,
  { expiresIn: process.env.EXP || '1h' })
        res.status(200).json({message:"user created",token})

    }catch(e){
        res.status(500).json({message:e.message})
    }
}
const login = async(req,res)=>{
    try{
        const {email,password}=req.body;
        const check=await users.findOne({email})
        if(!check)res.status(401).json({message:"not founded"})
        const match=await bcrypt.compare(password,check.password)
    if(!match)res.status(400).json({messge:'not match of passwrod'})
        const token=jwt.sign({id:check._id,email:check.email},process.env.SECRET_KEY,
  { expiresIn: process.env.EXP || '1h' })
res.status(200).json({token,message:"logined succesfully"})
    }catch(e){ res.status(500).json({message:e.message})

    }

}
const info= async(req,res)=>{

}
module.exports={signup,login,info}